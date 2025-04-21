import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-[#1A1F2C]/80 backdrop-blur-lg z-50 border-b border-[#7E69AB]/20">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-[#9b87f5]">
            ValCtrl
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#E5DEFF] hover:text-[#9b87f5] transition-colors">
              Home
            </Link>
            <Link to="/features" className="text-[#E5DEFF] hover:text-[#9b87f5] transition-colors">
              Features
            </Link>
            <Link to="/about" className="text-[#E5DEFF] hover:text-[#9b87f5] transition-colors">
              About
            </Link>
            <Link to="/pitch-deck" className="text-[#E5DEFF] hover:text-[#9b87f5] transition-colors">
              Pitch Deck
            </Link>
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
              Get Started
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 