import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PitchDeck = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isSelectingSlide, setIsSelectingSlide] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Define the navigation structure
  interface SlideInfo {
    id: number;
    title: string;
    parentTopic: string;
    imagePath: string;
  }

  const slideStructure = {
    topics: [
      {
        title: "Introduction",
        slides: [
          { id: 1, title: "Cover", imagePath: "/images/slide1.png" },
          { id: 2, title: "Overview", imagePath: "/images/solution.png" },
          { id: 3, title: "Executive Summary", imagePath: "/images/features.png" }
        ]
      },
      {
        title: "Problem & Solution",
        slides: [
          { id: 4, title: "Market Problem", imagePath: "/images/market.png" },
          { id: 5, title: "Our Solution", imagePath: "/images/solution.png" },
          { id: 6, title: "Value Proposition", imagePath: "/images/features.png" }
        ]
      },
      {
        title: "Market Analysis",
        slides: [
          { id: 7, title: "Market Overview", imagePath: "/images/market.png" },
          { id: 8, title: "Market Size", imagePath: "/images/size.png" },
          { id: 9, title: "Market Trends", imagePath: "/images/market.png" }
        ]
      },
      {
        title: "Product",
        slides: [
          { id: 10, title: "Product Features", imagePath: "/images/features.png" },
          { id: 11, title: "Technology", imagePath: "/images/solution.png" },
          { id: 12, title: "Product Roadmap", imagePath: "/images/roadmap.png" }
        ]
      },
      {
        title: "Business Model",
        slides: [
          { id: 13, title: "Revenue Model", imagePath: "/images/revenue.png" },
          { id: 14, title: "Pricing Strategy", imagePath: "/images/pricing.png" },
          { id: 15, title: "Go-to-Market", imagePath: "/images/market.png" }
        ]
      },
      {
        title: "Competition",
        slides: [
          { id: 16, title: "Competitive Landscape", imagePath: "/images/market.png" },
          { id: 17, title: "Competitive Advantages", imagePath: "/images/features.png" },
          { id: 18, title: "Market Position", imagePath: "/images/market.png" }
        ]
      },
      {
        title: "Traction",
        slides: [
          { id: 19, title: "Current Progress", imagePath: "/images/progress.png" },
          { id: 20, title: "Key Metrics", imagePath: "/images/milestones.png" },
          { id: 21, title: "Case Studies", imagePath: "/images/progress.png" }
        ]
      },
      {
        title: "Team",
        slides: [
          { id: 22, title: "Leadership", imagePath: "/images/progress.png" },
          { id: 23, title: "Advisory Board", imagePath: "/images/milestones.png" },
          { id: 24, title: "Key Hires", imagePath: "/images/progress.png" }
        ]
      },
      {
        title: "Financial Overview",
        slides: [
          { id: 25, title: "Financial Metrics", imagePath: "/images/revenue.png" },
          { id: 26, title: "Projections", imagePath: "/images/pricing.png" },
          { id: 27, title: "Unit Economics", imagePath: "/images/revenue.png" }
        ]
      },
      {
        title: "Growth Strategy",
        slides: [
          { id: 28, title: "Growth Plans", imagePath: "/images/roadmap.png" },
          { id: 29, title: "Marketing Strategy", imagePath: "/images/market.png" },
          { id: 30, title: "Expansion Plans", imagePath: "/images/progress.png" }
        ]
      },
      {
        title: "Investment",
        slides: [
          { id: 31, title: "Investment Ask", imagePath: "/images/investment.png" },
          { id: 32, title: "Use of Funds", imagePath: "/images/revenue.png" },
          { id: 33, title: "Funding History", imagePath: "/images/milestones.png" }
        ]
      },
      {
        title: "Future Vision",
        slides: [
          { id: 34, title: "Vision & Mission", imagePath: "/images/slide1.png" },
          { id: 35, title: "Future Roadmap", imagePath: "/images/roadmap.png" },
          { id: 36, title: "Call to Action", imagePath: "/images/investment.png" }
        ]
      }
    ]
  };

  // Get all slides in a flat array
  const getAllSlides = (): SlideInfo[] => {
    const slides: SlideInfo[] = [];
    slideStructure.topics.forEach(topic => {
      topic.slides.forEach(slide => {
        slides.push({ ...slide, parentTopic: topic.title });
      });
    });
    return slides;
  };

  const Slide = ({ imagePath }: { imagePath: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
      const img = new Image();
      img.src = imagePath;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);

      return () => {
        img.onload = null;
        img.onerror = null;
      };
    }, [imagePath]);

    if (error) {
      return (
        <div className="w-full h-full bg-black flex items-center justify-center">
          <div className="text-red-500">Failed to load slide</div>
        </div>
      );
    }

    return (
      <div className="w-full h-full bg-black relative overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[#00E5E5] text-xl">Loading slide...</div>
          </div>
        )}
        <img 
          ref={imgRef}
          src={imagePath}
          alt="Slide" 
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            imageRendering: 'crisp-edges',
            maxWidth: '100%',
            maxHeight: '100vh'
          }}
          onError={() => setError(true)}
          loading="eager"
        />
      </div>
    );
  };
  
  const allSlides = getAllSlides();
  const totalSlides = allSlides.length;

  // Preload images with timeout
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

    // Set a timeout to prevent infinite loading
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

  const handleSlideInput = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newSlide = parseInt(inputValue);
      if (!isNaN(newSlide) && newSlide >= 1 && newSlide <= totalSlides) {
        goToSlide(newSlide);
      }
      setIsEditing(false);
    } else if (e.key === 'Escape') {
      setIsEditing(false);
    }
  }, [inputValue, totalSlides]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(value);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => prev === totalSlides ? 1 : prev + 1);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => prev === 1 ? totalSlides : prev - 1);
  }, [totalSlides]);

  const goToSlide = useCallback((slideId: number) => {
    if (slideId >= 1 && slideId <= totalSlides) {
      setCurrentSlide(slideId);
    }
  }, [totalSlides]);

  // Handle keyboard navigation with debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleKeyDown = (e: KeyboardEvent) => {
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
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
      }, 100);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeoutId);
    };
  }, [prevSlide, nextSlide, navigate]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-[#00E5E5] text-xl">Loading pitch deck...</div>
        </div>
      ) : (
        <>
          <div className="flex-1 relative">
            <Slide imagePath={allSlides[currentSlide - 1].imagePath} />
          </div>
          <div className="flex-1 flex flex-col">
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

            <div className="flex flex-col items-center gap-4 p-4 border-t border-[#00E5E5]/20 sticky bottom-0 bg-black z-10">
              <div className="flex items-center justify-between w-full max-w-3xl mx-auto">
                <Button
                  variant="ghost"
                  onClick={prevSlide}
                  className="text-[#E5DEFF] hover:text-[#9b87f5]"
                >
                  <ArrowLeft className="h-6 w-6" />
                </Button>
                
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalSlides }, (_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                        i + 1 === currentSlide 
                          ? 'bg-[#00E5E5] w-4' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      onClick={() => goToSlide(i + 1)}
                    />
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  onClick={nextSlide}
                  className="text-[#E5DEFF] hover:text-[#9b87f5]"
                >
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Slide Counter */}
              <div className="flex items-center gap-2">
                <div 
                  className="relative"
                  onMouseLeave={() => {
                    setIsSelectingSlide(false);
                    setIsEditing(false);
                  }}
                >
                  <div
                    className="flex items-center gap-1 px-3 py-1 rounded border border-[#00E5E5]/30 bg-black/50 hover:border-[#00E5E5] group"
                  >
                    {isEditing ? (
                      <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleSlideInput}
                        className="w-8 bg-transparent text-[#00E5E5] outline-none text-center"
                        autoFocus
                        onFocus={e => e.target.select()}
                      />
                    ) : (
                      <span 
                        className="text-[#00E5E5] cursor-text w-8 text-center"
                        onClick={() => {
                          setIsEditing(true);
                          setInputValue(currentSlide.toString());
                        }}
                      >
                        {currentSlide}
                      </span>
                    )}
                    <span className="text-white/50">/</span>
                    <span className="text-white/70">{totalSlides}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PitchDeck;
