export default function SectionTitle({ title }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold gradient-text">{title}</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3 rounded-full" />
    </div>
  );
}
