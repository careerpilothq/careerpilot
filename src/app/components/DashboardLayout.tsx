export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 p-6 text-white">
        <h1 className="text-2xl font-bold text-blue-400">
          CareerPilot
        </h1>

        <nav className="mt-10 space-y-4">
          <button className="block w-full rounded-lg px-4 py-3 text-left hover:bg-slate-800">
            📄 Resume Analyzer
          </button>

          <button className="block w-full rounded-lg px-4 py-3 text-left hover:bg-slate-800">
            ✍️ Cover Letters
          </button>

          <button className="block w-full rounded-lg px-4 py-3 text-left hover:bg-slate-800">
            🎯 Interview Coach
          </button>

          <button className="block w-full rounded-lg px-4 py-3 text-left hover:bg-slate-800">
            ⚙️ Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}