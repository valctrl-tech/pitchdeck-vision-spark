import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from 'react';
import Navbar from "@/components/Navbar";
import PitchDeck from "@/components/PitchDeck";
import CookieConsent from "@/components/CookieConsent";

// Lazy load components
const Hero = lazy(() => import("@/components/Hero"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Privacy = lazy(() => import("./pages/Privacy"));

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#1A1F2C]">
    <div className="text-[#00E5E5] text-xl">Loading...</div>
  </div>
);

const App = () => {
  // Check if we're on the pitch-deck subdomain
  const isPitchDeckDomain = window.location.hostname === 'pitchdeck.valctrl.com';
  const isMainDomain = window.location.hostname === 'valctrl.com' || window.location.hostname === 'www.valctrl.com';
  
  // For local development
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-[#1A1F2C]">
          <Navbar />
          <Suspense fallback={<Loading />}>
            <Routes>
              {isPitchDeckDomain ? (
                <>
                  <Route path="/" element={<PitchDeck />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </>
              ) : isMainDomain || isLocalhost ? (
                <>
                  <Route path="/" element={<Hero />} />
                  <Route path="/pitch-deck" element={<PitchDeck />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="*" element={<NotFound />} />
                </>
              ) : (
                // Redirect unknown domains to the main site
                <Route path="*" element={<Navigate to="https://valctrl.com" replace />} />
              )}
            </Routes>
          </Suspense>
          <CookieConsent />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
