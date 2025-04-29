
import { useState, useEffect, useCallback } from "react";

interface SlideProps {
  imagePath: string;
  onError?: (error: Error) => void;
}

export const Slide = ({ imagePath, onError }: SlideProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [errorDetails, setErrorDetails] = useState<string>("");

  const handleImageLoad = useCallback(() => {
    console.log(`Successfully loaded image: ${imagePath}`);
    setIsLoaded(true);
    setLoadError(false);
    setErrorDetails("");
  }, [imagePath]);

  const handleImageError = useCallback(() => {
    const errorMsg = `Failed to load image: ${imagePath}`;
    console.error(errorMsg);
    console.error('Current base URL:', window.location.origin);
    console.error('Full image URL:', new URL(imagePath, window.location.origin).href);
    
    setLoadError(true);
    setIsLoaded(false);
    setErrorDetails(errorMsg);
    
    if (onError) {
      const error = new Error(errorMsg);
      onError(error);
    }
  }, [imagePath, onError]);

  useEffect(() => {
    setIsLoaded(false);
    setLoadError(false);
    setErrorDetails("");

    // DEBUG: Log the image path we're trying to load
    console.log('Slide attempting to load image:', imagePath);
    console.log('Import.meta.env.BASE_URL:', import.meta.env.BASE_URL);

    if (!imagePath) {
      const error = "No image path provided";
      console.error(error);
      setErrorDetails(error);
      handleImageError();
      return;
    }
    
    // Create a full URL by prepending the base URL if the path is relative
    let fullPath = imagePath;
    if (!imagePath.startsWith('http') && !imagePath.startsWith('/')) {
      fullPath = `/${imagePath}`;
    }
    console.log(`Attempting to load image with path: ${fullPath}`);
    
    const img = new Image();
    img.src = fullPath;
    
    img.onload = handleImageLoad;
    img.onerror = (event) => {
      console.error('Image load error event:', event);
      handleImageError();
    };

    // If the image is already cached, trigger load immediately
    if (img.complete) {
      if (img.naturalWidth === 0) {
        handleImageError();
      } else {
        handleImageLoad();
      }
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imagePath, handleImageLoad, handleImageError]);

  if (loadError) {
    return (
      <div className="w-full h-full bg-black flex flex-col items-center justify-center">
        <div className="text-red-500 text-xl mb-2">Failed to load slide</div>
        <div className="text-red-400 text-sm">{errorDetails}</div>
        <div className="text-gray-400 text-xs mt-2">Path: {imagePath}</div>
        <div className="mt-4 p-2 bg-gray-800 rounded text-xs text-gray-300 max-w-md overflow-auto">
          <pre>Base URL: {window.location.origin}</pre>
          <pre>Attempted URL: {new URL(imagePath, window.location.origin).href}</pre>
        </div>
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
