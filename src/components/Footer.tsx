import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] border-t border-[#7E69AB]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">ValCtrl</h3>
            <p className="text-[#8E9196]">
              Revolutionizing value control and management through innovative solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#E5DEFF] mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-[#8E9196] hover:text-[#9b87f5] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-[#8E9196] hover:text-[#9b87f5] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-[#8E9196] hover:text-[#9b87f5] transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#E5DEFF] mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-[#8E9196] hover:text-[#9b87f5] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-[#8E9196] hover:text-[#9b87f5] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#8E9196] hover:text-[#9b87f5] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#E5DEFF] mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-[#8E9196] hover:text-[#9b87f5] transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-[#8E9196] hover:text-[#9b87f5] transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#7E69AB]/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#8E9196] text-sm">
              © 2024 ValCtrl. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-[#8E9196] hover:text-[#9b87f5] transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#8E9196] hover:text-[#9b87f5] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#8E9196] hover:text-[#9b87f5] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 