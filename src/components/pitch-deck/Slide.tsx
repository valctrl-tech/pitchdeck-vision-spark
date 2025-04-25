import { useState, useEffect, useCallback } from "react";

interface SlideProps {
  imagePath: string;
  onError?: (error: Error) => void;
}

export const Slide = ({ imagePath, onError }: SlideProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
    setLoadError(false);
  }, []);

  const handleImageError = useCallback(() => {
    setLoadError(true);
    setIsLoaded(false);
    const error = new Error(`Failed to load image: ${imagePath}`);
    console.error(error);
    onError?.(error);
  }, [imagePath, onError]);

  useEffect(() => {
    setIsLoaded(false);
    setLoadError(false);

    if (!imagePath) {
      handleImageError();
      return;
    }
    
    const img = new Image();
    img.src = imagePath;
    
    img.onload = handleImageLoad;
    img.onerror = handleImageError;

    // If the image is already cached, trigger load immediately
    if (img.complete) {
      handleImageLoad();
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imagePath, handleImageLoad, handleImageError]);

  if (loadError) {
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <div className="text-red-500 text-xl">Failed to load slide</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-black relative">
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="text-[#00E5E5] text-xl">Loading slide...</div>
      </div>
      {imagePath && (
        <img 
          src={imagePath}
          alt="Slide" 
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ maxHeight: 'calc(100vh - 180px)' }}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
    </div>
  );
};
