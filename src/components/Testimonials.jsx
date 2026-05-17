import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";
export default function Testimonials() {
  const data = [
    {
      name: "Alex Johnson",
      text: "Amazing developer, delivered everything perfectly.",
    },
    {
      name: "Sarah Williams",
      text: "Great UI skills and clean code quality.",
    },
    {
      name: "Michael Chen",
      text: "Highly recommended for full stack projects.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <SectionTitle title="Testimonials" />

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((t) => (
            <Card key={t.name}>
              <p className="text-gray-300 text-sm mb-4">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
