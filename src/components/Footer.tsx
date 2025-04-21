import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] border-t border-indigo-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">ValCtrl</h3>
            <p className="text-[#94A3B8]">
              Revolutionizing value control and management through innovative solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-[#94A3B8] hover:text-indigo-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-[#94A3B8] hover:text-indigo-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-[#94A3B8] hover:text-indigo-400 transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-[#94A3B8] hover:text-indigo-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-[#94A3B8] hover:text-indigo-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#94A3B8] hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-[#94A3B8] hover:text-indigo-400 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-[#94A3B8] hover:text-indigo-400 transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-indigo-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#94A3B8] text-sm">
              © 2024 ValCtrl. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-[#94A3B8] hover:text-indigo-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#94A3B8] hover:text-indigo-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#94A3B8] hover:text-indigo-400 transition-colors">
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