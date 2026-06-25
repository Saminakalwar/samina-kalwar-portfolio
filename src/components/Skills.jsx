import { motion } from "framer-motion";
import { Code, Server, Database, Wrench, BrainCircuit } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-indigo-500 to-purple-500",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML/CSS",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "WebSockets",
        "ASP.NET Core",
        "C#",
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "from-cyan-500 to-blue-500",
      skills: ["MongoDB", "Oracle DB", "Firebase", "Redis", "Mongoose"],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "from-blue-500 to-indigo-500",
      skills: [
        "Git/GitHub/Gitlab",
        "Docker",
        "Postman",
        "VS Code",
        "npm/yarn",
        "Visual Studio",
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: BrainCircuit,
      color: "from-pink-500 to-rose-500",
      skills: ["Python", "AI/ML", "Deep Learning"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent"></div>

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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all group"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <category.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-white">
                {category.title}
              </h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="flex items-center gap-2"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                    ></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
