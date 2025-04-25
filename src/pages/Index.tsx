import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // Use useEffect to handle navigation to avoid React node type error
  const handlePitchDeckView = () => {
    navigate('/pitch-deck');
  };

  const [isPitchDeckVisible, setIsPitchDeckVisible] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#051a29] to-[#3d2c41] text-[#FFFFFF]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="mb-6 text-5xl font-bold text-white">
          ValCtrl Pitch Deck Areas
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-indigo-200">
          Discover our innovative approach to value control and management
        </p>
      </section>

      {/* Slides Section - Increased to 80% height */}
      <section className="bg-gradient-to-b from-[#051a29] to-[#3d2c41] min-h-[80vh] py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold text-white">Slides</h2>
            <ArrowRight className="h-8 w-8 text-indigo-300" />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg bg-[#051a29]/80 p-6 transition-transform hover:scale-105 hover:shadow-lg border border-[#3d2c41]/50 cursor-pointer"
                onClick={() => setIsPitchDeckVisible(true)}
              >
                <h3 className="mb-4 text-xl font-semibold text-indigo-200">
                  Slide Area {i}
                </h3>
                <p className="text-indigo-100">
                  Click to view detailed information about this section
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-b from-[#3d2c41] to-[#051a29] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-semibold text-white">Contact</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-indigo-200">
            Ready to learn more about <span className="text-white">ValCtrl</span>? Get in touch with us today.
          </p>
          <Button 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 px-8 py-4 text-white"
            onClick={handlePitchDeckView}
          >
            View Pitch Deck
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
