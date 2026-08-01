import { motion } from "framer-motion";
import { Code2, Database, Zap, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Code2, label: "Frontend & Backend", value: "React & Node" },
    {
      icon: Database,
      label: "Enterprise Backend",
      value: "ASP.NET & Oracle/SQL",
    },
    { icon: Zap, label: "Also Skilled In", value: "AI / ML" },
    { icon: Award, label: "Problem Solving", value: "Expert" },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-16 2xl:py-20 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-10 2xl:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-4xl 2xl:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-8 2xl:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-8 lg:p-6 2xl:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all">
              <h3 className="text-2xl lg:text-xl 2xl:text-2xl font-bold mb-5 lg:mb-4 2xl:mb-5 bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Full Stack Developer | MERN • ASP.NET Core
                </span>
              </h3>

              <p className="text-gray-400 text-base lg:text-sm 2xl:text-base leading-7 mb-4">
                I'm a Full Stack Developer with a Computer Science background,
                currently building enterprise applications in the insurance
                industry. I develop modern{" "}
                <span className="text-cyan-400 font-semibold">React</span>{" "}
                frontends and secure{" "}
                <span className="text-blue-400 font-semibold">
                  ASP.NET Core
                </span>{" "}
                backends powered by{" "}
                <span className="text-orange-400 font-semibold">Oracle</span>{" "}
                and{" "}
                <span className="text-green-400 font-semibold">SQL Server</span>
                , with a strong focus on{" "}
                <span className="text-purple-400 font-semibold">
                  clean architecture
                </span>
                , performance, and maintainable code, while also having strong
                hands-on experience building backend applications with{" "}
                <span className="text-purple-400 font-semibold">Node.js</span>{" "}
                and{" "}
                <span className="text-pink-400 font-semibold">Express.js</span>.
              </p>

              <p className="text-gray-400 text-base lg:text-sm 2xl:text-base leading-8">
                My expertise spans{" "}
                <span className="text-cyan-400 font-semibold">React</span>,{" "}
                <span className="text-purple-400 font-semibold">Node.js</span>,{" "}
                <span className="text-pink-400 font-semibold">Express.js</span>,{" "}
                <span className="text-blue-400 font-semibold">
                  ASP.NET Core
                </span>
                , <span className="text-orange-400 font-semibold">Oracle</span>,{" "}
                <span className="text-green-400 font-semibold">SQL Server</span>
                , and{" "}
                <span className="text-teal-400 font-semibold">
                  Entity Framework Core
                </span>
                . I also have practical experience applying{" "}
                <span className="text-yellow-400 font-semibold">
                  Artificial Intelligence
                </span>{" "}
                in real-world projects and enjoy building intelligent, scalable
                web solutions. I'm open to{" "}
                <span className="text-blue-400 font-semibold">
                  full-time opportunities
                </span>
                ,{" "}
                <span className="text-blue-400 font-semibold">
                  freelance projects
                </span>
                , and exciting collaborations.
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
                className="p-6 lg:p-4 2xl:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all group"
              >
                <div className="w-12 h-12 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 lg:mb-3 2xl:mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 text-white" />
                </div>
                <div className="text-3xl lg:text-2xl 2xl:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-xs 2xl:text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
