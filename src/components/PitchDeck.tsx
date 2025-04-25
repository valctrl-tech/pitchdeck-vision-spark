import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SlideNavigation } from "./pitch-deck/SlideNavigation";
import { Slide } from "./pitch-deck/Slide";
import { getAllSlides } from "@/services/slideStructure";
import type { SlideInfo } from "@/types/pitch-deck";

const PitchDeck = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const allSlides = getAllSlides();
  const totalSlides = allSlides.length;

  // Memoize the current slide data to prevent unnecessary re-renders
  const currentSlideData = allSlides[currentSlide - 1];

  const handleError = useCallback((error: Error) => {
    console.error('Pitch deck error:', error);
    setError('An error occurred while displaying the slide. Please try refreshing the page.');
  }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    // Add a small delay to prevent accidental closing
    setTimeout(() => {
      navigate('/');
    }, 100);
  }, [navigate]);

  const nextSlide = useCallback(() => {
    try {
      if (isClosing) return;
      setCurrentSlide(prev => {
        const next = prev === totalSlides ? 1 : prev + 1;
        if (!allSlides[next - 1]) {
          throw new Error(`Invalid slide index: ${next}`);
        }
        return next;
      });
      setError(null);
    } catch (err) {
      handleError(err as Error);
    }
  }, [totalSlides, allSlides, handleError, isClosing]);

  const prevSlide = useCallback(() => {
    try {
      if (isClosing) return;
      setCurrentSlide(prev => {
        const next = prev === 1 ? totalSlides : prev - 1;
        if (!allSlides[next - 1]) {
          throw new Error(`Invalid slide index: ${next}`);
        }
        return next;
      });
      setError(null);
    } catch (err) {
      handleError(err as Error);
    }
  }, [totalSlides, allSlides, handleError, isClosing]);

  const goToSlide = useCallback((slideId: number) => {
    try {
      if (isClosing) return;
      if (slideId >= 1 && slideId <= totalSlides && allSlides[slideId - 1]) {
        setCurrentSlide(slideId);
        setError(null);
      } else {
        throw new Error(`Invalid slide ID: ${slideId}`);
      }
    } catch (err) {
      handleError(err as Error);
    }
  }, [totalSlides, allSlides, handleError, isClosing]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      try {
        // Prevent default behavior for arrow keys and escape
        if (['ArrowLeft', 'ArrowRight', 'Escape'].includes(e.key)) {
          e.preventDefault();
        }

        // Only handle events if we're on the pitch-deck route
        if (location.pathname !== '/pitch-deck' || isClosing) return;

        switch (e.key) {
          case 'ArrowLeft':
            prevSlide();
            break;
          case 'ArrowRight':
            nextSlide();
            break;
          case 'Escape':
            handleClose();
            break;
        }
      } catch (err) {
        handleError(err as Error);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [location.pathname, navigate, nextSlide, prevSlide, handleClose, handleError, isClosing]);

  // Group slides by parent topic with error handling
  const slidesByTopic = allSlides.reduce((acc, slide) => {
    if (!acc[slide.parentTopic]) {
      acc[slide.parentTopic] = [];
    }
    acc[slide.parentTopic].push(slide);
    return acc;
  }, {} as Record<string, typeof allSlides>);

  if (!currentSlideData) {
    return (
      <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
        <div className="text-red-500 text-xl">Error: Could not load slide data</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-[100] flex" onClick={(e) => e.stopPropagation()}>
      {/* Side Navigation */}
      <div className="w-64 border-r border-[#00E5E5]/20 overflow-y-auto bg-black/50 backdrop-blur-sm">
        <div className="p-4">
          <div className="text-[#00E5E5] font-semibold mb-4">Sections</div>
          {Object.entries(slidesByTopic).map(([topic, slides]) => (
            <div key={topic} className="mb-4">
              <div className="text-white/70 text-sm mb-2">{topic}</div>
              <div className="space-y-1">
                {slides.map((slide) => (
                  <div
                    key={slide.id}
                    className={`px-3 py-2 rounded-md cursor-pointer text-sm transition-colors ${
                      currentSlide === slide.id
                        ? 'bg-[#00E5E5]/10 text-[#00E5E5]'
                        : 'text-white/50 hover:text-white/70 hover:bg-white/5'
                    }`}
                    onClick={() => goToSlide(slide.id)}
                  >
                    {slide.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-[#00E5E5]/20">
          <div className="text-white/70">
            {currentSlideData.parentTopic} / {currentSlideData.title}
          </div>
          <Button
            variant="ghost"
            className="text-[#E5DEFF] hover:text-[#9b87f5]"
            onClick={handleClose}
          >
            Close
          </Button>
        </div>

        {error ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-red-500 text-xl">{error}</div>
          </div>
        ) : (
          <div className="flex-1 relative overflow-y-auto" style={{ height: 'calc(100vh - 180px)' }}>
            <Slide 
              imagePath={currentSlideData.imagePath} 
              key={currentSlide}
              onError={handleError}
            />
          </div>
        )}

        <SlideNavigation
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onPrevSlide={prevSlide}
          onNextSlide={nextSlide}
          onGoToSlide={goToSlide}
        />
      </div>
    </div>
  );
};

export default PitchDeck;
