
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SlideNavigation } from "./pitch-deck/SlideNavigation";
import { Slide } from "./pitch-deck/Slide";
import { getAllSlides } from "@/services/slideStructure";
import type { SlideInfo } from "@/types/pitch-deck";

const PitchDeck = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const allSlides = getAllSlides();
  const totalSlides = allSlides.length;

  useEffect(() => {
    setIsLoading(true);
    const preloadImages = async () => {
      try {
        const newLoadedImages = new Set<string>();
        await Promise.all(
          allSlides.map(slide => {
            return new Promise((resolve) => {
              const img = new Image();
              img.src = slide.imagePath;
              img.onload = () => {
                newLoadedImages.add(slide.imagePath);
                resolve(null);
              };
              img.onerror = resolve;
            });
          })
        );
        setLoadedImages(newLoadedImages);
      } catch (error) {
        console.error('Error preloading images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    preloadImages();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [allSlides]);

  const nextSlide = () => {
    setCurrentSlide(prev => prev === totalSlides ? 1 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 1 ? totalSlides : prev - 1);
  };

  const goToSlide = (slideId: number) => {
    if (slideId >= 1 && slideId <= totalSlides) {
      setCurrentSlide(slideId);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'ArrowRight':
          nextSlide();
          break;
        case 'Escape':
          navigate('/');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-[#00E5E5] text-xl">Loading pitch deck...</div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center p-4 border-b border-[#00E5E5]/20">
            <div className="text-white/70">
              {allSlides[currentSlide - 1]?.parentTopic} / {allSlides[currentSlide - 1]?.title}
            </div>
            <Button
              variant="ghost"
              className="text-[#E5DEFF] hover:text-[#9b87f5]"
              onClick={() => navigate('/')}
            >
              Close
            </Button>
          </div>

          <div className="flex-1 relative overflow-y-auto" style={{ height: 'calc(100vh - 180px)' }}>
            {loadedImages.has(allSlides[currentSlide - 1]?.imagePath) ? (
              <Slide imagePath={allSlides[currentSlide - 1]?.imagePath} />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-[#00E5E5] text-xl">Loading slide...</div>
              </div>
            )}
          </div>

          <SlideNavigation
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            onPrevSlide={prevSlide}
            onNextSlide={nextSlide}
            onGoToSlide={goToSlide}
          />
        </>
      )}
    </div>
  );
};

export default PitchDeck;
