import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Server,
  Globe,
  Database,
  Sparkles,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Building responsive, interactive user interfaces with React and modern CSS — clean, accessible, and fast.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Code,
      title: "Full Stack Web Applications",
      description:
        "End-to-end apps with a React frontend backed by Node.js/Express or ASP.NET Core, wired together cleanly.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Server,
      title: "Enterprise Backend Development",
      description:
        "Secure, scalable APIs and business logic with ASP.NET Core, Oracle, and SQL Server for production systems.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Globe,
      title: "Landing Pages & Portfolios",
      description:
        "Fast, polished, custom-built sites for personal brands, startups, or small businesses — no templates.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Database,
      title: "API Integration & Dashboards",
      description:
        "RESTful API design, third-party integrations, and feature-rich admin dashboards with data visualization.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Sparkles,
      title: "AI-Assisted Features & ML Projects",
      description:
        "Integrating AI features into web apps, plus support with dataset preparation and model training tasks.",
      color: "from-indigo-500 to-cyan-500",
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Services I Offer
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all group"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}