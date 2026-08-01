import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { ChevronDown, ArrowRight, User } from "lucide-react";

export default function Hero() {
  const [avatarError, setAvatarError] = useState(false);

  const techStack = [
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Express.js",
    "MongoDB",
    "Oracle DB",
    "SQL Server",
    "ASP.NET Core",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-12 xl:pt-24 xl:pb-10 2xl:pt-24 2xl:pb-12"
    >
      <div className="max-w-[1320px] mx-auto w-full px-5 sm:px-8 lg:px-14 xl:px-12 2xl:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 xl:gap-8 2xl:gap-10 items-center">
          {/* Left column — details */}
          <div className="text-center lg:text-left mt-5 ml-15">
            <div className="mb-2">
              {/* Small greeting
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl lg:text-lg 2xl:text-xl text-gray-400 mb-2"
              >
                Hi, I'm
              </motion.p> */}

              {/* Large Name */}
              <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl 2xl:text-6xl font-extrabold leading-tight">
                {"Hi, I'm Samina Kalwar".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.3,
                    }}
                    className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-xl sm:text-2xl lg:text-xl 2xl:text-2xl font-semibold mb-4"
            >
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg lg:text-base 2xl:text-lg text-gray-400 mb-8 lg:mb-8 2xl:mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Building modern, scalable web applications with cutting-edge
              technologies. Passionate about creating seamless user experiences
              and robust backend solutions. open to freelance and full-time work
              — web apps, landing pages, portfolios or enterprise-level business
              applications with AI-driven features.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8 2xl:mb-6"
            >
              <a
                href="#projects"
                className="group px-8 py-3 lg:px-6 lg:py-2.5 2xl:px-8 2xl:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-6 lg:gap-4 2xl:gap-6 mb-10 lg:mb-7 2xl:mb-10"
            >
              <a
                href="https://github.com/Saminakalwar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 lg:p-2.5 2xl:p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all group"
              >
                <FaGithub className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/samina-kalwar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 lg:p-2.5 2xl:p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-indigo-500/50 transition-all group"
              >
                <FaLinkedin className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />
              </a>

              <a
                href="mailto:kalwarsamina950@gmail.com"
                className="p-3 lg:p-2.5 2xl:p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all group"
              >
                <FaEnvelope className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
              </a>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-2 2xl:gap-3"
            >
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="px-4 py-2 lg:px-3 lg:py-1.5 2xl:px-4 2xl:py-2 bg-white/5 border border-white/10 rounded-lg text-sm lg:text-xs 2xl:text-sm text-gray-300 backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div> */}
          </div>

          {/* Right column — circular photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-center xl:justify-end order-first lg:order-last mr-15"
          >
            <div className="relative">
              {/*
                Photo slot.
                Drop your image at: public/avatar.png (or .jpg/.webp — update the src below to match).
                It will then be served from the site root at /avatar.png automatically.
                Falls back to a placeholder icon until the file exists.
              */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] lg:w-[22rem] lg:h-[22rem] 2xl:w-[26rem] 2xl:h-[26rem] rounded-full overflow-hidden border-4 border-purple-500/40 shadow-xl shadow-purple-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center z-10">
                {!avatarError ? (
                  <img
                    src="/avatar.png"
                    alt="Samina Kalwar"
                    className="w-full h-full object-cover"
                    onError={() => setAvatarError(true)}
                  />
                ) : (
                  <User className="w-28 h-28 text-purple-300" />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
