export default function Stats() {
  return (
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
  );
}