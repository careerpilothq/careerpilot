export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started.",
      features: [
        "1 Resume Analysis",
        "Basic ATS Score",
        "Limited AI Suggestions",
      ],
    },
    {
      name: "Pro",
      price: "$19",
      description: "Best for job seekers.",
      popular: true,
      features: [
        "Unlimited Resume Analysis",
        "AI Cover Letters",
        "Interview Preparation",
        "Advanced ATS Optimization",
      ],
    },
    {
      name: "Premium",
      price: "$39",
      description: "Everything CareerPilot offers.",
      features: [
        "Everything in Pro",
        "Priority AI Processing",
        "Application Tracker",
        "Future AI Career Coach",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Simple Pricing
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Choose the plan that fits your career journey.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl border bg-white p-8 shadow-sm ${
              plan.popular
                ? "border-blue-600 ring-2 ring-blue-600"
                : ""
            }`}
          >
            {plan.popular && (
              <span className="rounded-full bg-blue-600 px-3 py-1 text-sm text-white">
                Most Popular
              </span>
            )}

            <h3 className="mt-6 text-2xl font-bold">
              {plan.name}
            </h3>

            <p className="mt-2 text-5xl font-bold">
              {plan.price}
              <span className="text-lg text-gray-500">/month</span>
            </p>

            <p className="mt-4 text-gray-600">
              {plan.description}
            </p>

            <ul className="mt-8 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}