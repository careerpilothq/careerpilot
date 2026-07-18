"use client";

import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col bg-slate-900 p-6 text-white">
        <div>
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
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-auto rounded-lg bg-red-600 px-4 py-3 font-semibold hover:bg-red-700"
        >
          🚪 Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}