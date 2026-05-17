import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectModal({ isOpen, onClose, project }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 flex flex-col bg-[#0F172A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <h3 className="text-lg font-bold text-white">
                {project.title} - Live Demo
              </h3>

              <div className="flex items-center gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
                  title="View on GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>

                <button
                  onClick={onClose}
                  className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-red-500/20 hover:border-red-500/50 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* iframe preview */}
            <div className="flex-1 bg-white">
              <iframe
                src={project.liveUrl}
                className="w-full h-full"
                title={`${project.title} Demo`}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </div>

            {/* footer */}
            <div className="p-4 border-t border-white/10 bg-white/5 text-center text-sm text-gray-400">
              Preview Mode - Click <ExternalLink className="w-4 h-4 inline" />{" "}
              to open in full screen
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
