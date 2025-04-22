import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function PDFViewer() {
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log("PDFViewer component mounted");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto p-4 mt-20 h-[calc(100vh-120px)]">
      <div className="bg-black/80 backdrop-blur-sm border border-blue-900/30 rounded-lg p-8 shadow-2xl text-center">
        <h2 className="text-[#00E5E5] font-bold text-2xl mb-4">PDF Viewing Not Available</h2>
        <p className="text-white mb-6">
          The PDF version of the pitch deck has been removed. Please use the interactive pitch deck on the home page instead.
        </p>
        <Button 
          className="bg-gradient-to-r from-[#001a35] to-[#004080] hover:from-[#002a55] hover:to-[#0055aa] text-lg px-8 py-6 h-auto border border-blue-700 text-white"
          onClick={() => navigate('/')}
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
} 