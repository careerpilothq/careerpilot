"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

import DashboardLayout from "../components/DashboardLayout";
import ResumeUpload from "../components/ResumeUpload";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    async function checkUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
      }
    }

    checkUser();
  }, [router]);

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold">
        Welcome Back 👋
      </h1>

      <p className="mt-2 text-gray-600">
        Manage your career with AI.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-8 shadow">
          <h2 className="text-xl font-bold">Resume Score</h2>

          <p className="mt-3 text-5xl font-bold text-blue-600">82</p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow">
          <h2 className="text-xl font-bold">Cover Letters</h2>

          <p className="mt-3 text-5xl font-bold text-green-600">5</p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow">
          <h2 className="text-xl font-bold">Interviews</h2>

          <p className="mt-3 text-5xl font-bold text-purple-600">2</p>
        </div>
      </div>

      <ResumeUpload />
    </DashboardLayout>
  );
}