import { motion } from "framer-motion";
import { Award, ExternalLink, Download } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      title: "Introduction To MongoDB",
      issuer: "MongoDB ",
      date: "2023",
      color: "from-green-500 to-emerald-500",
      credentialUrl: "https://learn.mongodb.com/c/PtRLf_ZsRxi_9ptI9BBkFg",
      credentialId: "MDB32uqngh4im",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University, Coursera",
      date: "2025",
      color: "from-blue-500 to-cyan-500",
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/specialization/9VO67UX3OXZR",
      credentialId: "9VO67UX3OXZR",
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Stanford University, Coursera",
      date: "2025",
      color: "from-orange-500 to-yellow-500",
      credentialUrl: "https://aws.amazon.com/certification/",
      credentialId: "AWS-12345-XYZ",
    },

    {
      title: "Database Structure & Management with MySQL",
      issuer: "Meta",
      date: "March 2023",
      color: "from-red-500 to-pink-500",
      credentialUrl: "https://coursera.org/verify/UTHVG3HNVM4P",
      credentialId: "UTHVG3HNVM4P",
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta (Coursera)",
      date: "July 2023",
      color: "from-indigo-500 to-purple-500",
      credentialUrl:
        "https://www.coursera.org/professional-certificates/meta-front-end-developer",
      credentialId: "META-FE-321",
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "May 2023",
      color: "from-purple-500 to-pink-500",
      credentialUrl:
        "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
      credentialId: "CEH-2023-159",
    },
  ];

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
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
              Certifications & Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all group"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <Award className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-purple-400 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-xs mb-4">{cert.date}</p>

              <div className="mb-4 p-2 bg-white/5 rounded-lg">
                <p className="text-xs text-gray-400">Credential ID</p>
                <p className="text-xs text-white font-mono">
                  {cert.credentialId}
                </p>
              </div>

              <div className="flex gap-2">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify
                </a>
                <button
                  className="flex items-center justify-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm font-medium hover:bg-white/10 transition-all"
                  title="Download Certificate"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
