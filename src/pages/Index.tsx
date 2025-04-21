import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PitchDeck from "@/components/PitchDeck";

const Index = () => {
  const [isPitchDeckVisible, setIsPitchDeckVisible] = useState(false);

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-[#FFFFFF]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="mb-6 text-5xl font-bold text-white">
          ValCtrl Pitch Deck Areas
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[#8E9196]">
          Discover our innovative approach to value control and management
        </p>
      </section>

      {/* Slides Section - Increased to 80% height */}
      <section className="bg-[#222632] min-h-[80vh] py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold text-[#E5DEFF]">Slides</h2>
            <ArrowRight className="h-8 w-8 text-[#9b87f5]" />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg bg-[#2A2F3D] p-6 transition-transform hover:scale-105 hover:shadow-lg border border-[#7E69AB]/20 cursor-pointer"
                onClick={() => setIsPitchDeckVisible(true)}
              >
                <h3 className="mb-4 text-xl font-semibold text-[#D6BCFA]">
                  Slide Area {i}
                </h3>
                <p className="text-[#8E9196]">
                  Click to view detailed information about this section
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#1A1F2C] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-semibold text-[#E5DEFF]">Contact</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-[#8E9196]">
            Ready to learn more about <span className="text-white">ValCtrl</span>? Get in touch with us today.
          </p>
          <Button 
            className="bg-[#9b87f5] px-8 py-4 text-white hover:bg-[#7E69AB] transition-colors"
            onClick={() => setIsPitchDeckVisible(true)}
          >
            View Pitch Deck
          </Button>
        </div>
      </section>

      {/* Pitch Deck Component */}
      <PitchDeck 
        isVisible={isPitchDeckVisible} 
        onClose={() => setIsPitchDeckVisible(false)} 
      />
    </div>
  );
};

export default Index;
