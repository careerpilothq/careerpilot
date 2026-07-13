export default function Home() {
  const features = [
    {
      title: "ATS Resume Scanner",
      description:
        "Instantly analyze your resume and improve your ATS score.",
    },
    {
      title: "AI Cover Letters",
      description:
        "Generate personalized cover letters for every application.",
    },
    {
      title: "Interview Coach",
      description:
        "Practice interviews with AI and receive instant feedback.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <h1 className="text-2xl font-bold text-blue-600">
            CareerPilot
          </h1>

          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-blue-600">
              Login
            </button>

            <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-8 py-24 text-center">
        <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
          Land More Interviews
          <br />
          Faster With AI
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-600">
          Optimize resumes, generate cover letters, prepare for
          interviews, and manage your career—all in one place.
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

      {/* Features */}
      <section className="mx-auto grid max-w-6xl gap-8 px-8 pb-24 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border p-8 shadow-sm transition hover:shadow-lg"
          >
            <h3 className="text-xl font-bold">{feature.title}</h3>

            <p className="mt-4 text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}