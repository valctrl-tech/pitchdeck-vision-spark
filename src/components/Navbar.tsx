import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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
            <Button className="bg-gradient-to-r from-[#000000] to-[#001f3f] hover:from-[#001f3f] hover:to-[#003366] border border-blue-700 text-white">
              View Pitchdeck
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 