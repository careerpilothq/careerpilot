export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      quote:
        "CareerPilot helped me improve my resume and I received interviews within two weeks.",
    },
    {
      name: "Michael Lee",
      role: "Marketing Manager",
      quote:
        "The AI cover letters saved me hours and made every application feel personalized.",
    },
    {
      name: "Priya Sharma",
      role: "Data Analyst",
      quote:
        "The interview practice gave me confidence and helped me land my dream job.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Loved by Job Seekers
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Here's what our users say about CareerPilot.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {testimonials.map((person) => (
          <div
            key={person.name}
            className="rounded-2xl border bg-white p-8 shadow-sm"
          >
            <p className="text-gray-600 italic">
              "{person.quote}"
            </p>

            <div className="mt-6">
              <h3 className="font-bold">{person.name}</h3>
              <p className="text-gray-500">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}