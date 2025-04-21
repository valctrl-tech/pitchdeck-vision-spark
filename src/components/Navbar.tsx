import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

const Navbar = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    subject: "Contact Form Submission"
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch("https://formspree.io/f/mzzrpkvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            email: "",
            message: "",
            subject: "Contact Form Submission"
          });
          setShowContactModal(false);
        }, 5000);
      } else {
        const responseData = await response.json();
        setError(responseData.error || "Form submission failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      console.error("Contact form error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <nav className="fixed w-full bg-gradient-to-r from-[#000000] to-[#001f3f] backdrop-blur-lg z-50 border-b border-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-white">
              ValCtrl
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="https://valctrl.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                Home
              </a>
              <Button 
                className="bg-gradient-to-r from-[#001a35] to-[#004080] hover:from-[#002a55] hover:to-[#0055aa] border border-blue-700 text-white"
                onClick={() => setShowContactModal(true)}
              >
                Contact Us
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-gradient-to-b from-[#001f3f] to-black border border-blue-900/30 rounded-lg max-w-md w-full p-6 relative animate-fade-in">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setShowContactModal(false)}
            >
              <X className="h-5 w-5" />
            </Button>
            
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-900/30 border border-red-500/50 text-red-200 p-3 rounded-md text-sm">
                    {error}
                  </div>
                )}
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="bg-[#001a35]/50 border-blue-900/30 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="How can we help you?"
                    className="bg-[#001a35]/50 border-blue-900/30 text-white placeholder:text-gray-400 min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#001a35] to-[#004080] hover:from-[#002a55] hover:to-[#0055aa] border border-blue-700 text-white py-6"
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </Button>
              </form>
            ) : (
              <div className="bg-[#001a35]/30 border border-blue-700/30 rounded-lg p-6 text-center">
                <div className="text-[#00E5E5] text-xl mb-2">Thank You!</div>
                <p className="text-white">
                  We've received your message and will get back to you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 