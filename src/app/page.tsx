export default function Home() {
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

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <h1 className="text-2xl font-bold text-blue-600">
            CareerPilot
          </h1>

          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-blue-600">
              Login
            </button>

            <button className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-8 py-28 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          🚀 AI Powered Career Platform
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight text-gray-900">
          Land More Interviews.
          <br />
          Get Hired Faster.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-600">
          CareerPilot uses AI to optimize resumes, generate personalized
          cover letters, prepare you for interviews, and accelerate your
          job search.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700">
            Start Free
          </button>

          <button className="rounded-xl border px-8 py-4 text-lg hover:bg-gray-100">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Statistics */}
      <section className="mx-auto max-w-6xl px-8 pb-20">
        <div className="grid grid-cols-1 gap-6 rounded-3xl bg-blue-600 p-10 text-center text-white md:grid-cols-3">
          <div>
            <h2 className="text-4xl font-bold">100K+</h2>
            <p className="mt-2 text-blue-100">Resumes Optimized</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">95%</h2>
            <p className="mt-2 text-blue-100">ATS Success Rate</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">50K+</h2>
            <p className="mt-2 text-blue-100">Applications Generated</p>
          </div>
        </div>
      </section>

      {/* Features */}
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
    </main>
  );
}