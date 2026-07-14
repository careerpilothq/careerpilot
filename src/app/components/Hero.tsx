export default function Hero() {
  return (
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
  );
}