export default function Navbar() {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B0F19]/70 backdrop-blur-md border-b border-white/10">
      <div className="container flex justify-between items-center py-4">
        <h1 className="font-bold text-xl gradient-text">Samina Kalwar</h1>

        <div className="flex gap-6 text-sm text-gray-300">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
