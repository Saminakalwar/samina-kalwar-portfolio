import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Notes Management Application",
      description:
        "A full-stack notes app that lets users create, organize, and manage their notes with a clean dashboard interface. Features authentication and real-time updates.",
      image:
        "https://images.pexels.com/photos/6991842/pexels-photo-6991842.jpeg",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      color: "from-indigo-500 to-purple-500",
      liveUrl: "https://notes-management-app-lime.vercel.app/dashboard",
      githubUrl: "https://github.com/Saminakalwar/Notes-Management-app",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, animated developer portfolio built with React and Framer Motion. Features smooth scroll, project showcase, and a working contact form.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      color: "from-purple-500 to-pink-500",
      liveUrl: "https://samina-kalwar-portfolio.vercel.app",
      githubUrl: "https://github.com/Saminakalwar/samina-kalwar-portfolio",
    },
    {
      title: "Full Stack Task Manager",
      description:
        "A collaborative task management application with real-time updates, team workspaces, and project tracking features built using modern web technologies.",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&h=600&fit=crop",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
      color: "from-cyan-500 to-blue-500",
      liveUrl: "https://github.com/saminakalwar/task-manager",
      githubUrl: "https://github.com/saminakalwar/task-manager",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
            >
              <img
                src={project.image}
                className="h-48 w-full object-cover"
                alt={project.title}
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm flex items-center gap-2 transition-colors"
                  >
                    <Eye size={16} />
                    Preview
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm flex items-center gap-2 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm flex items-center gap-2 transition-colors"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject || { title: "", liveUrl: "", githubUrl: "" }}
        />
      </div>
    </section>
  );
}
