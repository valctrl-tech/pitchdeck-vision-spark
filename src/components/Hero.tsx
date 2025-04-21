import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PitchDeck from "./PitchDeck";

const Hero = () => {
  const [isPitchDeckVisible, setIsPitchDeckVisible] = useState(false);

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dark blue to black gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000] to-[#001f3f] animate-gradient-xy"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="text-white">ValCtrl</span>
              <span className="text-white"> Pitch Deck</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto">
              Revolutionizing value control and management through innovative solutions
            </p>
            
            <div className="flex justify-center mt-8">
              <Button 
                className="bg-gradient-to-r from-[#001a35] to-[#004080] hover:from-[#002a55] hover:to-[#0055aa] text-lg px-8 py-6 h-auto border border-blue-700 text-white"
                onClick={() => setIsPitchDeckVisible(true)}
              >
                View Pitchdeck
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <PitchDeck 
        isVisible={isPitchDeckVisible} 
        onClose={() => setIsPitchDeckVisible(false)} 
      />
    </>
  );
};

export default Hero; 