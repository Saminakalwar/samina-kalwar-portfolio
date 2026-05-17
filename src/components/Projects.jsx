import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AI Career Agent Platform",
      description:
        "An intelligent career guidance platform using AI to help users find their ideal career path with personalized recommendations.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "OpenAI", "MongoDB"],
      color: "from-indigo-500 to-purple-500",
      liveUrl: "https://example.com/ai-career-agent",
      githubUrl: "https://github.com/saminakalwar/ai-career-agent",
    },
    {
      title: "MERN E-Commerce Website",
      description:
        "Full-stack e-commerce platform with product management, shopping cart, payment integration, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tech: ["React", "Express", "MongoDB", "Stripe"],
      color: "from-purple-500 to-pink-500",
      liveUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/saminakalwar/mern-ecommerce",
    },
    {
      title: "Full Stack Task Manager",
      description:
        "Collaborative task management application with real-time updates, team workspaces, and project tracking features.",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&h=600&fit=crop",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
      color: "from-cyan-500 to-blue-500",
      liveUrl: "https://example.com/task-manager",
      githubUrl: "https://github.com/saminakalwar/task-manager",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
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
                      className="text-xs px-2 py-1 bg-white/10 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3 py-2 bg-purple-600 rounded text-sm flex items-center gap-2"
                  >
                    <Eye size={16} />
                    Preview
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="px-3 py-2 bg-white/10 rounded text-sm flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="px-3 py-2 bg-white/10 rounded text-sm"
                  >
                    <FaGithub size={16} />
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
