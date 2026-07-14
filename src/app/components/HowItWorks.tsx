export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Resume",
      description: "Upload your existing resume in PDF or DOCX format.",
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "CareerPilot analyzes your resume and identifies improvements.",
    },
    {
      number: "03",
      title: "Get Hired",
      description: "Download your optimized resume and apply with confidence.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-8 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          How It Works
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Three simple steps to improve your chances of getting interviews.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border bg-white p-8 shadow-sm"
          >
            <div className="text-5xl font-bold text-blue-600">
              {step.number}
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              {step.title}
            </h3>

            <p className="mt-4 text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}