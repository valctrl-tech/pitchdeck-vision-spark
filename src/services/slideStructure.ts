import { SlideStructure } from "@/types/pitch-deck";

export const slideStructure: SlideStructure = {
  topics: [
    {
      title: "Introduction",
      slides: [
        { id: 1, title: "Cover", imagePath: "/images/slide1.png" },
        { id: 2, title: "Overview", imagePath: "/images/solution.png" },
        { id: 3, title: "Executive Summary", imagePath: "/images/features.png" }
      ]
    },
    {
      title: "Problem & Solution",
      slides: [
        { id: 4, title: "Market Problem", imagePath: "/images/market.png" },
        { id: 5, title: "Our Solution", imagePath: "/images/solution.png" },
        { id: 6, title: "Value Proposition", imagePath: "/images/features.png" }
      ]
    },
    {
      title: "Market Analysis",
      slides: [
        { id: 7, title: "Market Overview", imagePath: "/images/market.png" },
        { id: 8, title: "Market Size", imagePath: "/images/size.png" },
        { id: 9, title: "Market Trends", imagePath: "/images/market.png" }
      ]
    },
    {
      title: "Product",
      slides: [
        { id: 10, title: "Product Features", imagePath: "/images/features.png" },
        { id: 11, title: "Technology", imagePath: "/images/solution.png" },
        { id: 12, title: "Product Roadmap", imagePath: "/images/roadmap.png" }
      ]
    },
    {
      title: "Business Model",
      slides: [
        { id: 13, title: "Revenue Model", imagePath: "/images/revenue.png" },
        { id: 14, title: "Pricing Strategy", imagePath: "/images/pricing.png" },
        { id: 15, title: "Go-to-Market", imagePath: "/images/market.png" }
      ]
    },
    {
      title: "Competition",
      slides: [
        { id: 16, title: "Competitive Landscape", imagePath: "/images/market.png" },
        { id: 17, title: "Competitive Advantages", imagePath: "/images/features.png" },
        { id: 18, title: "Market Position", imagePath: "/images/market.png" }
      ]
    },
    {
      title: "Traction",
      slides: [
        { id: 19, title: "Current Progress", imagePath: "/images/progress.png" },
        { id: 20, title: "Key Metrics", imagePath: "/images/milestones.png" },
        { id: 21, title: "Case Studies", imagePath: "/images/progress.png" }
      ]
    },
    {
      title: "Team",
      slides: [
        { id: 22, title: "Leadership", imagePath: "/images/progress.png" },
        { id: 23, title: "Advisory Board", imagePath: "/images/milestones.png" },
        { id: 24, title: "Key Hires", imagePath: "/images/progress.png" }
      ]
    },
    {
      title: "Financial Overview",
      slides: [
        { id: 25, title: "Financial Metrics", imagePath: "/images/revenue.png" },
        { id: 26, title: "Projections", imagePath: "/images/pricing.png" },
        { id: 27, title: "Unit Economics", imagePath: "/images/revenue.png" }
      ]
    },
    {
      title: "Growth Strategy",
      slides: [
        { id: 28, title: "Growth Plans", imagePath: "/images/roadmap.png" },
        { id: 29, title: "Marketing Strategy", imagePath: "/images/market.png" },
        { id: 30, title: "Expansion Plans", imagePath: "/images/progress.png" }
      ]
    },
    {
      title: "Investment",
      slides: [
        { id: 31, title: "Investment Ask", imagePath: "/images/investment.png" },
        { id: 32, title: "Use of Funds", imagePath: "/images/revenue.png" },
        { id: 33, title: "Funding History", imagePath: "/images/milestones.png" }
      ]
    },
    {
      title: "Future Vision",
      slides: [
        { id: 34, title: "Vision & Mission", imagePath: "/images/slide1.png" },
        { id: 35, title: "Future Roadmap", imagePath: "/images/roadmap.png" },
        { id: 36, title: "Call to Action", imagePath: "/images/investment.png" }
      ]
    }
  ]
};

export const getAllSlides = () => {
  const slides = [];
  slideStructure.topics.forEach(topic => {
    topic.slides.forEach(slide => {
      slides.push({ ...slide, parentTopic: topic.title });
    });
  });
  return slides;
};
