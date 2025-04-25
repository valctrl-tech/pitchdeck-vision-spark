import { useEffect, useState } from 'react';
import { Button } from './ui/button';

const COOKIE_CONSENT_KEY = 'cookie-consent-status';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consentStatus) {
      setShowBanner(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl rounded-lg bg-[#000510]/95 backdrop-blur-sm shadow-lg border border-[#00E5E5]/20 p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <p className="leading-relaxed text-gray-200">
              We respect your privacy choices. This site uses cookies to enhance your experience. You can manage cookie preferences through your browser settings and our site controls.{' '}
              <a 
                href="/pitch-deck/privacy" 
                className="text-[#00E5E5] hover:text-[#00E5E5]/80 hover:underline font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('/pitch-deck/privacy', '_blank');
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              className="flex-1 md:flex-none border-[#00E5E5]/20 text-gray-200 hover:bg-[#00E5E5]/10 hover:text-white"
              onClick={handleDecline}
            >
              Decline
            </Button>
            <Button
              className="flex-1 md:flex-none bg-[#00E5E5] hover:bg-[#00E5E5]/80 text-black"
              onClick={handleAccept}
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 