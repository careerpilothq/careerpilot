const features = [
  {
    title: "ATS Resume Scanner",
    description:
      "See exactly why your resume gets rejected and improve your ATS score.",
    icon: "📄",
  },
  {
    title: "AI Cover Letters",
    description:
      "Generate tailored cover letters in seconds for every application.",
    icon: "✍️",
  },
  {
    title: "Interview Coach",
    description:
      "Practice interviews with AI and receive instant feedback.",
    icon: "🎯",
  },
];

export default function Features() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-8 pb-24 md:grid-cols-3">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="text-4xl">{feature.icon}</div>

          <h3 className="mt-6 text-xl font-bold">
            {feature.title}
          </h3>

          <p className="mt-4 text-gray-600">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
}