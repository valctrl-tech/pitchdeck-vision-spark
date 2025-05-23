import { ArrowRight, User, Mail, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

const Hero = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xvgapvrr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: "Investment Inquiry from Website"
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", company: "" });
        }, 5000);
      } else {
        console.error("Form submission failed");
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#001f3f] to-[#003366] animate-gradient-xy"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Hero content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="space-y-8 max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                ValCtrl Pitch Deck
              </h1>
              
              <p className="text-xl text-blue-200 leading-relaxed">
                Revolutionizing Financial Data Analysis and Modeling using Breakthrough AI Capabilities
              </p>
              
              <div className="flex justify-center lg:justify-start mt-8">
                <Button 
                  className="bg-gradient-to-r from-[#001a35] to-[#004080] hover:from-[#002a55] hover:to-[#0055aa] text-lg px-8 py-6 h-auto border border-blue-700 text-white shadow-lg shadow-blue-900/20"
                  onClick={() => navigate('/pitch-deck')}
                >
                  View Pitchdeck
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="w-full lg:w-5/12">
            <div className="bg-black/80 backdrop-blur-sm border border-blue-900/30 rounded-lg p-8 shadow-2xl">
              {!isSubmitted ? (
                <>
                  <h2 className="text-[#00E5E5] font-bold text-2xl mb-2 text-center">Interested in investing or partnering?</h2>
                  <p className="text-gray-300 mb-6 text-center">Fill out this form to get in touch with our team.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                      <Input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                        className="bg-black/60 border-blue-900/50 text-white pl-12 h-14 placeholder:text-gray-500 rounded-md"
                      />
                    </div>
                    
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                      <Input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Your email"
                        className="bg-black/60 border-blue-900/50 text-white pl-12 h-14 placeholder:text-gray-500 rounded-md"
                      />
                    </div>
                    
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                      <Input 
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        placeholder="Your company"
                        className="bg-black/60 border-blue-900/50 text-white pl-12 h-14 placeholder:text-gray-500 rounded-md"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#00C853] hover:bg-[#00B04A] text-black font-medium h-14 text-lg rounded-md transition-colors mt-2 shadow-lg shadow-green-900/20"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="py-10 text-center">
                  <h2 className="text-[#00E5E5] font-bold text-2xl mb-2">Thank You!</h2>
                  <p className="text-gray-300">
                    We've received your inquiry and will contact you shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
