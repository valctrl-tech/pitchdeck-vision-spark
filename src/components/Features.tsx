import { ArrowUpRight, BarChart3, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Advanced Analytics",
    description: "Get deep insights into your value control metrics with our advanced analytics dashboard."
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Secure Control",
    description: "Enterprise-grade security ensuring your value control processes are protected."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Real-time Updates",
    description: "Stay on top of changes with instant notifications and real-time data updates."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-[#222632]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E5DEFF] mb-4">
            Powerful Features
          </h2>
          <p className="text-[#8E9196] text-lg max-w-2xl mx-auto">
            Discover the tools that make <span className="text-white">ValCtrl</span> the leading choice for value control management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-[#2A2F3D] border border-[#7E69AB]/20 hover:border-[#9b87f5]/50 transition-all hover:scale-105 duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-[#1A1F2C] text-[#9b87f5]">
                  {feature.icon}
                </div>
                <ArrowUpRight className="h-6 w-6 text-[#7E69AB] group-hover:text-[#9b87f5] transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#E5DEFF] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#8E9196]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 