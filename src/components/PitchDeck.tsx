import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PitchDeckProps {
  isVisible: boolean;
  onClose: () => void;
}

// Define the navigation structure
interface SlideInfo {
  id: number;
  title: string;
  parentTopic: string;
}

const slideStructure = {
  topics: [
    {
      title: "What We Do?",
      slides: [
        { id: 2, title: "Our Solution" },
        { id: 3, title: "Key Features" }
      ]
    },
    {
      title: "Market Opportunity",
      slides: [
        { id: 4, title: "Target Market" },
        { id: 5, title: "Market Size" }
      ]
    },
    {
      title: "Business Model",
      slides: [
        { id: 6, title: "Revenue Streams" },
        { id: 7, title: "Pricing Strategy" }
      ]
    },
    {
      title: "Traction",
      slides: [
        { id: 8, title: "Current Progress" },
        { id: 9, title: "Milestones" }
      ]
    },
    {
      title: "Next Steps",
      slides: [
        { id: 10, title: "Roadmap" },
        { id: 11, title: "Investment Ask" }
      ]
    }
  ]
};

// Get all slides in a flat array
const getAllSlides = (): SlideInfo[] => {
  const slides: SlideInfo[] = [{ id: 1, title: "Introduction", parentTopic: "Start" }];
  slideStructure.topics.forEach(topic => {
    topic.slides.forEach(slide => {
      slides.push({ ...slide, parentTopic: topic.title });
    });
  });
  return slides;
};

// Slide Components
const Slide1 = () => (
  <div className="w-full h-full flex flex-col bg-black text-white relative overflow-hidden">
    {/* Background feather image */}
    <div className="absolute right-0 top-0 bottom-0 w-[45%]">
      <img 
        src="/images/feather1.png"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-right animate-fadeIn delay-200 opacity-75"
        style={{
          filter: 'brightness(0.85) contrast(1.05)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black"></div>
    </div>

    {/* Main content container */}
    <div className="relative w-full h-full flex flex-col p-16">
      {/* THE text */}
      <div className="mb-4">
        <div className="inline-block text-xl font-mono border border-[#00E5E5] px-3 py-1 text-[#00E5E5]">
          THE
        </div>
      </div>

      {/* Main title section */}
      <div className="space-y-4 mb-16">
        <h1 className="text-[5.5rem] leading-none font-bold tracking-tight">
          <span className="text-white">ONLY </span>
          <span className="text-[#00E5E5]">10</span>
          <span className="text-white"> SLIDES</span>
        </h1>
        
        <div className="border border-[#00E5E5] inline-block">
          <h2 className="text-2xl tracking-[0.3em] text-white px-4 py-2">YOU NEED IN A</h2>
        </div>
        
        <h1 className="text-[7rem] leading-none font-bold text-white">
          PITCH
        </h1>
      </div>

      {/* Bottom text sections with divider */}
      <div className="mt-auto grid grid-cols-2 gap-8 pr-[45%]">
        <div className="text-lg space-y-4">
          <p className="text-white">
            The purpose of a pitch is to stimulate interest,
            not to cover every aspect of your startup and
            bludgeon your audience into submission.
          </p>
          <p className="text-[#00E5E5]">
            your objective is to generate enough interest
            to get a second meeting.
          </p>
        </div>

        <div className="text-lg border-l border-[#00E5E5] pl-8">
          <p className="text-white">
            Thus, the recommended number of slides for a pitch
            is ten. This impossibly low number forces you to
            concentrate on the absolute essentials. You can add a
            few more, but you should never exceed fifteen slides --
            <span className="text-[#00E5E5]"> the more slides you need, the less compelling your idea.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Slide2 = () => (
  <div className="w-full h-full flex flex-col bg-black text-white relative overflow-hidden">
    <div className="absolute right-0 top-0 bottom-0 w-[45%]">
      <img 
        src="/images/solution.png"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-right animate-fadeIn delay-200 opacity-75"
        style={{
          filter: 'brightness(0.85) contrast(1.05)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black"></div>
    </div>

    <div className="relative w-full h-full flex flex-col p-16">
      <div className="mb-4">
        <div className="inline-block text-xl font-mono border border-[#00E5E5] px-3 py-1 text-[#00E5E5]">
          WHAT WE DO
        </div>
      </div>

      <div className="space-y-4 mb-16">
        <h1 className="text-[5.5rem] leading-none font-bold tracking-tight">
          <span className="text-white">OUR </span>
          <span className="text-[#00E5E5]">SOLUTION</span>
        </h1>
        
        <div className="border border-[#00E5E5] inline-block">
          <h2 className="text-2xl tracking-[0.3em] text-white px-4 py-2">INNOVATION MEETS SIMPLICITY</h2>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-8 pr-[45%]">
        <div className="text-lg space-y-4">
          <p className="text-white">
            We've developed a groundbreaking platform that
            revolutionizes how businesses interact with their
            data, making complex analytics accessible to everyone.
          </p>
          <p className="text-[#00E5E5]">
            Our AI-powered solution transforms raw data into
            actionable insights in real-time.
          </p>
        </div>

        <div className="text-lg border-l border-[#00E5E5] pl-8">
          <p className="text-white">
            By combining cutting-edge machine learning with
            intuitive design, we've created a solution that's
            both powerful and easy to use. Our platform reduces
            analysis time by 80% while increasing accuracy by 95%.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Slide3 = () => (
  <div className="w-full h-full flex flex-col bg-black text-white relative overflow-hidden">
    <div className="absolute right-0 top-0 bottom-0 w-[45%]">
      <img 
        src="/images/features.png"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-right animate-fadeIn delay-200 opacity-75"
        style={{
          filter: 'brightness(0.85) contrast(1.05)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black"></div>
    </div>

    <div className="relative w-full h-full flex flex-col p-16">
      <div className="mb-4">
        <div className="inline-block text-xl font-mono border border-[#00E5E5] px-3 py-1 text-[#00E5E5]">
          CAPABILITIES
        </div>
      </div>

      <div className="space-y-4 mb-16">
        <h1 className="text-[5.5rem] leading-none font-bold tracking-tight">
          <span className="text-white">KEY </span>
          <span className="text-[#00E5E5]">FEATURES</span>
        </h1>
        
        <div className="border border-[#00E5E5] inline-block">
          <h2 className="text-2xl tracking-[0.3em] text-white px-4 py-2">WHAT SETS US APART</h2>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-8 pr-[45%]">
        <div className="text-lg space-y-4">
          <p className="text-white">
            • Real-time data processing
            • Advanced AI analytics
            • Intuitive dashboard
            • Automated reporting
          </p>
          <p className="text-[#00E5E5]">
            Our features are designed to maximize efficiency
            while minimizing complexity.
          </p>
        </div>

        <div className="text-lg border-l border-[#00E5E5] pl-8">
          <p className="text-white">
            Each feature has been carefully crafted based on
            extensive market research and user feedback. We
            prioritize features that deliver immediate value
            while maintaining scalability for future growth.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Slide4 = () => (
  <div className="w-full h-full flex flex-col bg-black text-white relative overflow-hidden">
    <div className="absolute right-0 top-0 bottom-0 w-[45%]">
      <img 
        src="/images/market.png"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-right animate-fadeIn delay-200 opacity-75"
        style={{
          filter: 'brightness(0.85) contrast(1.05)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black"></div>
    </div>

    <div className="relative w-full h-full flex flex-col p-16">
      <div className="mb-4">
        <div className="inline-block text-xl font-mono border border-[#00E5E5] px-3 py-1 text-[#00E5E5]">
          MARKET OPPORTUNITY
        </div>
      </div>

      <div className="space-y-4 mb-16">
        <h1 className="text-[5.5rem] leading-none font-bold tracking-tight">
          <span className="text-white">TARGET </span>
          <span className="text-[#00E5E5]">MARKET</span>
        </h1>
        
        <div className="border border-[#00E5E5] inline-block">
          <h2 className="text-2xl tracking-[0.3em] text-white px-4 py-2">WHO WE SERVE</h2>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-8 pr-[45%]">
        <div className="text-lg space-y-4">
          <p className="text-white">
            Our primary market consists of mid to large-sized
            enterprises in the following sectors:
            • Financial Services
            • Healthcare
            • E-commerce
            • Manufacturing
          </p>
          <p className="text-[#00E5E5]">
            These sectors represent a combined
            market value of $50B annually.
          </p>
        </div>

        <div className="text-lg border-l border-[#00E5E5] pl-8">
          <p className="text-white">
            Our ideal customer is a data-driven organization
            looking to optimize their operations through
            advanced analytics. They typically have:
            • 100+ employees
            • $10M+ annual revenue
            • Multiple data sources
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Slide5 = () => (
  <div className="w-full h-full flex flex-col bg-black text-white relative overflow-hidden">
    <div className="absolute right-0 top-0 bottom-0 w-[45%]">
      <img 
        src="/images/size.png"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-right animate-fadeIn delay-200 opacity-75"
        style={{
          filter: 'brightness(0.85) contrast(1.05)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black"></div>
    </div>

    <div className="relative w-full h-full flex flex-col p-16">
      <div className="mb-4">
        <div className="inline-block text-xl font-mono border border-[#00E5E5] px-3 py-1 text-[#00E5E5]">
          OPPORTUNITY
        </div>
      </div>

      <div className="space-y-4 mb-16">
        <h1 className="text-[5.5rem] leading-none font-bold tracking-tight">
          <span className="text-white">MARKET </span>
          <span className="text-[#00E5E5]">SIZE</span>
        </h1>
        
        <div className="border border-[#00E5E5] inline-block">
          <h2 className="text-2xl tracking-[0.3em] text-white px-4 py-2">THE POTENTIAL</h2>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-8 pr-[45%]">
        <div className="text-lg space-y-4">
          <p className="text-white">
            Total Addressable Market (TAM):
            • Global: $100B
            • North America: $40B
            • Europe: $35B
            • Asia: $25B
          </p>
          <p className="text-[#00E5E5]">
            Projected market growth: 25% CAGR
            over the next 5 years.
          </p>
        </div>

        <div className="text-lg border-l border-[#00E5E5] pl-8">
          <p className="text-white">
            Our initial focus is on the North American
            market, with a serviceable obtainable market
            (SOM) of $5B. We project capturing 10% of
            this market within 3 years of launch.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Slide6 = () => (
  <div className="w-full h-full flex flex-col bg-black text-white relative overflow-hidden">
    <div className="absolute right-0 top-0 bottom-0 w-[45%]">
      <img 
        src="/images/revenue.png"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-right animate-fadeIn delay-200 opacity-75"
        style={{
          filter: 'brightness(0.85) contrast(1.05)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black"></div>
    </div>

    <div className="relative w-full h-full flex flex-col p-16">
      <div className="mb-4">
        <div className="inline-block text-xl font-mono border border-[#00E5E5] px-3 py-1 text-[#00E5E5]">
          BUSINESS MODEL
        </div>
      </div>

      <div className="space-y-4 mb-16">
        <h1 className="text-[5.5rem] leading-none font-bold tracking-tight">
          <span className="text-white">REVENUE </span>
          <span className="text-[#00E5E5]">STREAMS</span>
        </h1>
        
        <div className="border border-[#00E5E5] inline-block">
          <h2 className="text-2xl tracking-[0.3em] text-white px-4 py-2">HOW WE MONETIZE</h2>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-8 pr-[45%]">
        <div className="text-lg space-y-4">
          <p className="text-white">
            Primary Revenue Streams:
            • Subscription Plans
            • Enterprise Licensing
            • Professional Services
            • API Access
          </p>
          <p className="text-[#00E5E5]">
            90% recurring revenue with
            95% customer retention rate.
          </p>
        </div>

        <div className="text-lg border-l border-[#00E5E5] pl-8">
          <p className="text-white">
            Our subscription model ensures steady
            revenue growth while professional services
            and API access provide additional high-margin
            revenue opportunities.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Slide7 = () => (
  <div className="w-full h-full flex flex-col bg-black text-white relative overflow-hidden">
    <div className="absolute right-0 top-0 bottom-0 w-[45%]">
      <img 
        src="/images/pricing.png"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-right animate-fadeIn delay-200 opacity-75"
        style={{
          filter: 'brightness(0.85) contrast(1.05)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black"></div>
    </div>

    <div className="relative w-full h-full flex flex-col p-16">
      <div className="mb-4">
        <div className="inline-block text-xl font-mono border border-[#00E5E5] px-3 py-1 text-[#00E5E5]">
          MONETIZATION
        </div>
      </div>

      <div className="space-y-4 mb-16">
        <h1 className="text-[5.5rem] leading-none font-bold tracking-tight">
          <span className="text-white">PRICING </span>
          <span className="text-[#00E5E5]">STRATEGY</span>
        </h1>
        
        <div className="border border-[#00E5E5] inline-block">
          <h2 className="text-2xl tracking-[0.3em] text-white px-4 py-2">VALUE-BASED PRICING</h2>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-8 pr-[45%]">
        <div className="text-lg space-y-4">
          <p className="text-white">
            Tiered Pricing Structure:
            • Starter: $499/month
            • Professional: $999/month
            • Enterprise: Custom
          </p>
          <p className="text-[#00E5E5]">
            Average contract value: $50,000
            per year per enterprise client.
          </p>
        </div>

        <div className="text-lg border-l border-[#00E5E5] pl-8">
          <p className="text-white">
            Our pricing strategy aligns with customer
            value creation, offering flexible plans that
            scale with usage and feature requirements.
            Enterprise deals include dedicated support
            and customization options.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Slide8 = () => (
  <div className="w-full h-full flex flex-col bg-black text-white relative overflow-hidden">
    <div className="absolute right-0 top-0 bottom-0 w-[45%]">
      <img 
        src="/images/progress.png"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-right animate-fadeIn delay-200 opacity-75"
        style={{
          filter: 'brightness(0.85) contrast(1.05)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black"></div>
    </div>

    <div className="relative w-full h-full flex flex-col p-16">
      <div className="mb-4">
        <div className="inline-block text-xl font-mono border border-[#00E5E5] px-3 py-1 text-[#00E5E5]">
          TRACTION
        </div>
      </div>

      <div className="space-y-4 mb-16">
        <h1 className="text-[5.5rem] leading-none font-bold tracking-tight">
          <span className="text-white">CURRENT </span>
          <span className="text-[#00E5E5]">PROGRESS</span>
        </h1>
        
        <div className="border border-[#00E5E5] inline-block">
          <h2 className="text-2xl tracking-[0.3em] text-white px-4 py-2">WHERE WE ARE NOW</h2>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-8 pr-[45%]">
        <div className="text-lg space-y-4">
          <p className="text-white">
            Key Metrics:
            • 50+ Enterprise Clients
            • $2M ARR
            • 150% YoY Growth
            • 98% Customer Satisfaction
          </p>
          <p className="text-[#00E5E5]">
            Currently processing over 1 billion
            data points monthly.
          </p>
        </div>

        <div className="text-lg border-l border-[#00E5E5] pl-8">
          <p className="text-white">
            We've achieved product-market fit with
            strong customer validation. Our platform
            has been battle-tested across various
            industries with consistent positive feedback.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Slide9 = () => (
  <div className="w-full h-full flex flex-col bg-black text-white relative overflow-hidden">
    <div className="absolute right-0 top-0 bottom-0 w-[45%]">
      <img 
        src="/images/milestones.png"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-right animate-fadeIn delay-200 opacity-75"
        style={{
          filter: 'brightness(0.85) contrast(1.05)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black"></div>
    </div>

    <div className="relative w-full h-full flex flex-col p-16">
      <div className="mb-4">
        <div className="inline-block text-xl font-mono border border-[#00E5E5] px-3 py-1 text-[#00E5E5]">
          ACHIEVEMENTS
        </div>
      </div>

      <div className="space-y-4 mb-16">
        <h1 className="text-[5.5rem] leading-none font-bold tracking-tight">
          <span className="text-white">KEY </span>
          <span className="text-[#00E5E5]">MILESTONES</span>
        </h1>
        
        <div className="border border-[#00E5E5] inline-block">
          <h2 className="text-2xl tracking-[0.3em] text-white px-4 py-2">OUR JOURNEY</h2>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-8 pr-[45%]">
        <div className="text-lg space-y-4">
          <p className="text-white">
            Major Achievements:
            • Series A Funding: $10M
            • Patents Granted: 3
            • Industry Awards: 5
            • Team Growth: 50+ people
          </p>
          <p className="text-[#00E5E5]">
            Named "Top 10 AI Startups to Watch"
            by leading industry analysts.
          </p>
        </div>

        <div className="text-lg border-l border-[#00E5E5] pl-8">
          <p className="text-white">
            Our rapid growth and industry recognition
            validate our approach and technology.
            Strategic partnerships with major tech
            companies have accelerated our market
            penetration.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Slide10 = () => (
  <div className="w-full h-full flex flex-col bg-black text-white relative overflow-hidden">
    <div className="absolute right-0 top-0 bottom-0 w-[45%]">
      <img 
        src="/images/roadmap.png"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-right animate-fadeIn delay-200 opacity-75"
        style={{
          filter: 'brightness(0.85) contrast(1.05)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black"></div>
    </div>

    <div className="relative w-full h-full flex flex-col p-16">
      <div className="mb-4">
        <div className="inline-block text-xl font-mono border border-[#00E5E5] px-3 py-1 text-[#00E5E5]">
          NEXT STEPS
        </div>
      </div>

      <div className="space-y-4 mb-16">
        <h1 className="text-[5.5rem] leading-none font-bold tracking-tight">
          <span className="text-white">FUTURE </span>
          <span className="text-[#00E5E5]">ROADMAP</span>
        </h1>
        
        <div className="border border-[#00E5E5] inline-block">
          <h2 className="text-2xl tracking-[0.3em] text-white px-4 py-2">WHERE WE'RE HEADING</h2>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-8 pr-[45%]">
        <div className="text-lg space-y-4">
          <p className="text-white">
            Next 12 Months:
            • Global Market Expansion
            • New Product Features
            • Strategic Partnerships
            • Team Expansion
          </p>
          <p className="text-[#00E5E5]">
            Targeting 300% growth in
            enterprise customers.
          </p>
        </div>

        <div className="text-lg border-l border-[#00E5E5] pl-8">
          <p className="text-white">
            Our roadmap focuses on scaling operations,
            enhancing product capabilities, and
            expanding market presence. Key initiatives
            include AI advancement and integration
            with major enterprise systems.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Slide11 = () => (
  <div className="w-full h-full flex flex-col bg-black text-white relative overflow-hidden">
    <div className="absolute right-0 top-0 bottom-0 w-[45%]">
      <img 
        src="/images/investment.png"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover object-right animate-fadeIn delay-200 opacity-75"
        style={{
          filter: 'brightness(0.85) contrast(1.05)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black"></div>
    </div>

    <div className="relative w-full h-full flex flex-col p-16">
      <div className="mb-4">
        <div className="inline-block text-xl font-mono border border-[#00E5E5] px-3 py-1 text-[#00E5E5]">
          FUNDING
        </div>
      </div>

      <div className="space-y-4 mb-16">
        <h1 className="text-[5.5rem] leading-none font-bold tracking-tight">
          <span className="text-white">INVESTMENT </span>
          <span className="text-[#00E5E5]">ASK</span>
        </h1>
        
        <div className="border border-[#00E5E5] inline-block">
          <h2 className="text-2xl tracking-[0.3em] text-white px-4 py-2">SCALING FOR SUCCESS</h2>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-8 pr-[45%]">
        <div className="text-lg space-y-4">
          <p className="text-white">
            Seeking $20M Series B:
            • Market Expansion: 40%
            • R&D: 30%
            • Team Growth: 20%
            • Operations: 10%
          </p>
          <p className="text-[#00E5E5]">
            18-month runway to achieve
            key growth milestones.
          </p>
        </div>

        <div className="text-lg border-l border-[#00E5E5] pl-8">
          <p className="text-white">
            This investment will accelerate our growth
            and cement our position as the market
            leader. We project reaching $50M ARR
            within 24 months of funding.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const PitchDeck = ({ isVisible, onClose }: PitchDeckProps) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isSelectingSlide, setIsSelectingSlide] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const allSlides = getAllSlides();
  const totalSlides = allSlides.length;

  const handleSlideInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newSlide = parseInt(inputValue);
      if (!isNaN(newSlide) && newSlide >= 1 && newSlide <= totalSlides) {
        goToSlide(newSlide);
      }
      setIsEditing(false);
    } else if (e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(value);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => prev === totalSlides ? 1 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 1 ? totalSlides : prev - 1);
  };

  const goToSlide = (slideId: number) => {
    setCurrentSlide(slideId);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isVisible) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'ArrowRight':
          nextSlide();
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  const renderSlide = (slideNumber: number) => {
    switch(slideNumber) {
      case 1: return <Slide1 />;
      case 2: return <Slide2 />;
      case 3: return <Slide3 />;
      case 4: return <Slide4 />;
      case 5: return <Slide5 />;
      case 6: return <Slide6 />;
      case 7: return <Slide7 />;
      case 8: return <Slide8 />;
      case 9: return <Slide9 />;
      case 10: return <Slide10 />;
      case 11: return <Slide11 />;
      default: return <div className="text-white">Slide {slideNumber} content coming soon</div>;
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex bg-black/90 backdrop-blur-sm">
      {/* Navigation Sidebar */}
      <div className="w-64 h-full bg-black border-r border-[#00E5E5]/20 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* First slide special case */}
          <div 
            className={`cursor-pointer transition-colors ${currentSlide === 1 ? 'text-[#00E5E5]' : 'text-white/70 hover:text-white'}`}
            onClick={() => goToSlide(1)}
          >
            Introduction
          </div>

          {/* Topics and their slides */}
          {slideStructure.topics.map((topic, index) => (
            <div key={index} className="space-y-2">
              <div className="text-white/90 font-medium">{topic.title}</div>
              <div className="pl-4 space-y-2">
                {topic.slides.map(slide => (
                  <div
                    key={slide.id}
                    className={`cursor-pointer transition-colors ${
                      currentSlide === slide.id 
                        ? 'text-[#00E5E5]' 
                        : 'text-white/50 hover:text-white/70'
                    }`}
                    onClick={() => goToSlide(slide.id)}
                  >
                    {slide.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-[#00E5E5]/20">
          <div className="text-white/70">
            {allSlides[currentSlide - 1]?.parentTopic} / {allSlides[currentSlide - 1]?.title}
          </div>
          <Button
            variant="ghost"
            className="text-[#E5DEFF] hover:text-[#9b87f5]"
            onClick={onClose}
          >
            Close
          </Button>
        </div>

        <div className="flex-1 relative">
          {renderSlide(currentSlide)}
        </div>

        <div className="flex flex-col items-center gap-4 p-4 border-t border-[#00E5E5]/20">
          <div className="flex items-center justify-between w-full">
            <Button
              variant="ghost"
              onClick={prevSlide}
              className="text-[#E5DEFF] hover:text-[#9b87f5]"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }, (_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    i + 1 === currentSlide 
                      ? 'bg-[#00E5E5] w-4' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => goToSlide(i + 1)}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              onClick={nextSlide}
              className="text-[#E5DEFF] hover:text-[#9b87f5]"
            >
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Slide Counter */}
          <div className="flex items-center gap-2 text-sm">
            <div 
              className="relative"
              onMouseLeave={() => {
                setIsSelectingSlide(false);
                setIsEditing(false);
              }}
            >
              <div
                className="flex items-center gap-1 px-3 py-1 rounded border border-[#00E5E5]/30 bg-black/50 hover:border-[#00E5E5] group"
              >
                {isEditing ? (
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleSlideInput}
                    className="w-8 bg-transparent text-[#00E5E5] outline-none text-center"
                    autoFocus
                    onFocus={e => e.target.select()}
                  />
                ) : (
                  <span 
                    className="text-[#00E5E5] cursor-text w-8 text-center"
                    onClick={() => {
                      setIsEditing(true);
                      setInputValue(currentSlide.toString());
                    }}
                  >
                    {currentSlide}
                  </span>
                )}
                <span className="text-white/50">/</span>
                <span className="text-white/70">{totalSlides}</span>
              </div>

              {/* Slide Selection Dropdown */}
              {isSelectingSlide && !isEditing && (
                <div className="absolute bottom-full mb-2 left-0 bg-black border border-[#00E5E5]/30 rounded shadow-lg py-1 min-w-[100px]">
                  {Array.from({ length: totalSlides }, (_, i) => (
                    <div
                      key={i}
                      className={`px-3 py-1 cursor-pointer ${
                        i + 1 === currentSlide
                          ? 'bg-[#00E5E5]/10 text-[#00E5E5]'
                          : 'text-white/70 hover:bg-white/5'
                      }`}
                      onClick={() => {
                        goToSlide(i + 1);
                        setIsSelectingSlide(false);
                      }}
                    >
                      Slide {i + 1}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck; 