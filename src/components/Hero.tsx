import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PitchDeck from "./PitchDeck";

const Hero = () => {
  const [isPitchDeckVisible, setIsPitchDeckVisible] = useState(false);

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] via-[#2A2F3D] to-[#1A1F2C] animate-gradient-xy"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="text-white">ValCtrl</span>
              <span className="text-white"> Pitch Deck</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#8E9196] max-w-2xl mx-auto">
              Revolutionizing value control and management through innovative solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-lg px-8 py-6 h-auto"
                onClick={() => setIsPitchDeckVisible(true)}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-[#7E69AB] text-[#E5DEFF] hover:bg-[#7E69AB]/20 text-lg px-8 py-6 h-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <PitchDeck 
        isVisible={isPitchDeckVisible} 
        onClose={() => setIsPitchDeckVisible(false)} 
      />
    </>
  );
};

export default Hero; 