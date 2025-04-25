
import { useState, useEffect, useRef } from "react";

interface SlideProps {
  imagePath: string;
}

export const Slide = ({ imagePath }: SlideProps) => {
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
