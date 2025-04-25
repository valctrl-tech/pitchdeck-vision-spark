
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
import Navbar from "@/components/Navbar";
import PitchDeck from "@/components/PitchDeck";

// Lazy load components
const Hero = lazy(() => import("@/components/Hero"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#1A1F2C]">
    <div className="text-[#00E5E5] text-xl">Loading...</div>
  </div>
);

const App = () => {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-[#1A1F2C]">
          <Navbar />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/pitch-deck" element={<PitchDeck />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
