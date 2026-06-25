import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Lightbulb } from "lucide-react";

export default function Experience() {
  const timeline = [
    {
      icon: Award,
      title: "Executive Officer – IT (Full Stack Developer)",
      organization: "EFU General Insurance Ltd, Head Office, Karachi",
      period: "Jan 2026 – Present",
      description:
        "Developing scalable Full stack applications in an Agile environment, building reusable React components, integrating RESTful APIs, optimizing frontend performance, and modernizing legacy systems into responsive production-ready applications.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Briefcase,
      title: "MERN Stack Developer Intern",
      organization: "10Pearls Pakistan, Karachi",
      period: "Sep 2025 – Nov 2025",
      description:
        "Built a full-stack MERN application with JWT authentication, role-based access control, REST APIs, middleware architecture, and structured backend logic while following clean coding and Agile development practices.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Briefcase,
      title: "Full Stack Developer Intern",
      organization: "Enumesol LLC",
      period: "Jul 2023 – Sep 2023",
      description:
        "Developed responsive frontend interfaces from Figma designs, created backend APIs, and integrated databases to build dynamic and user-friendly web applications.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: GraduationCap,
      title: "BS Computer Science",
      organization: "Sukkur IBA University",
      period: "2021 – 2025",
      description:
        "Graduated with a CGPA of 3.37/4.00 with a merit-based scholarship. Studied Web Engineering, Enterprise Application Development, Databases, Artificial Intelligence, and Data Science.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Pre-Engineering",
      organization: "Cambridge Public Higher Secondary School",
      period: "2020",
      description:
        "Completed Intermediate education in Pre-Engineering with a strong foundation in mathematics, analytical thinking, and problem-solving.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
              Experience & Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} hidden md:block`}
              ></div>

              <div className="absolute left-8 md:left-1/2 w-16 h-16 -ml-8 flex items-center justify-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 border-4 border-[#0B0F19]`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              <div
                className={`flex-1 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} ml-20 md:ml-0`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${item.color} bg-opacity-20 border border-white/10 rounded-full text-xs text-white whitespace-nowrap`}
                    >
                      {item.period}
                    </span>
                  </div>
                  <p className="text-purple-400 font-medium mb-3">{item.organization}</p>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
