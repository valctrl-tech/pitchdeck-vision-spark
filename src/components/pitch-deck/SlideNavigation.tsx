import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onGoToSlide: (slide: number) => void;
  disabled?: boolean;
}

export const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevSlide,
  onNextSlide,
  onGoToSlide,
  disabled = false,
}: SlideNavigationProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSlideInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (e.key === 'Enter') {
      const newSlide = parseInt(inputValue);
      if (!isNaN(newSlide) && newSlide >= 1 && newSlide <= totalSlides) {
        onGoToSlide(newSlide);
      }
      setIsEditing(false);
    } else if (e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const value = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(value);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border-t border-[#00E5E5]/20 sticky bottom-0 bg-black z-10">
      <div className="flex items-center justify-between w-full max-w-3xl mx-auto">
        <Button
          variant="ghost"
          onClick={onPrevSlide}
          className={`text-[#E5DEFF] hover:text-[#9b87f5] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={disabled}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i + 1 === currentSlide 
                  ? 'bg-[#00E5E5] w-4' 
                  : 'bg-white/30 hover:bg-white/50'
              } ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
              onClick={() => !disabled && onGoToSlide(i + 1)}
            />
          ))}
        </div>
        
        <Button
          variant="ghost"
          onClick={onNextSlide}
          className={`text-[#E5DEFF] hover:text-[#9b87f5] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={disabled}
        >
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>

      <div 
        className="relative"
        onMouseLeave={() => setIsEditing(false)}
      >
        <div className={`flex items-center gap-1 px-3 py-1 rounded border border-[#00E5E5]/30 bg-black/50 ${disabled ? 'opacity-50' : 'hover:border-[#00E5E5]'} group`}>
          {isEditing && !disabled ? (
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
              className={`text-[#00E5E5] w-8 text-center ${disabled ? 'cursor-not-allowed' : 'cursor-text'}`}
              onClick={() => {
                if (!disabled) {
                  setIsEditing(true);
                  setInputValue(currentSlide.toString());
                }
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
  );
};
