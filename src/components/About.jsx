import { motion } from "framer-motion";
import { Code2, Database, Zap, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Code2, label: "Stack", value: "MERN" },
    { icon: Database, label: "Enterprise Backend", value: "ASP.NET & Oracle" },
    { icon: Zap, label: "Also Skilled In", value: "AI / ML" },
    { icon: Award, label: "Problem Solving", value: "Expert" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Full Stack Developer | Enterprise Backend & AI Enthusiast
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm Samina Kalwar, a Full Stack Developer who builds modern,
                scalable web applications end-to-end — from responsive frontends
                to robust, production-ready backend systems.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                My core stack is{" "}
                <span className="text-indigo-400 font-semibold">React.js</span>,{" "}
                <span className="text-purple-400 font-semibold">Node.js</span>,{" "}
                <span className="text-cyan-400 font-semibold">Express.js</span>,
                and{" "}
                <span className="text-green-500 font-semibold">MongoDB</span>{" "}
                (MERN). Alongside this, I'm expanding into enterprise-grade
                backend development with{" "}
                <span className="text-blue-400 font-semibold">
                  ASP.NET Core
                </span>{" "}
                and{" "}
                <span className="text-orange-400 font-semibold">
                  Oracle Database
                </span>
                , building secure, scalable systems suited for large-scale
                business applications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I also bring hands-on experience in{" "}
                <span className="text-pink-400 font-semibold">
                  Artificial Intelligence
                </span>{" "}
                — applied through my Final Year Project and several freelance
                projects — giving me a practical edge in building intelligent
                features into real-world applications.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
