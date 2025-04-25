import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
    
    // Disable Google Analytics and other tracking
    window['ga-disable-G-QYLSFWWM9B'] = true;
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-blue-900/30 p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white text-sm flex-1">
          <p>
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
            <a href="/privacy" className="text-[#00E5E5] hover:underline">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="text-white border-blue-900/50 hover:bg-blue-900/20"
          >
            Decline
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-[#00E5E5] hover:bg-[#00E5E5]/80 text-black"
          >
            Accept
          </Button>
        </div>
        <button
          onClick={() => setShowBanner(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-white md:hidden"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent; 