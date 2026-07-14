"use client";

import { useState } from "react";

export default function ResumeUpload() {
  const [file, setFile] = useState<File | null>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  }

  function removeFile() {
    setFile(null);
  }

  return (
    <div className="mt-10 rounded-2xl bg-white p-8 shadow">
      <h2 className="text-2xl font-bold">Upload Resume</h2>

      <p className="mt-2 text-gray-500">
        Upload your resume in PDF or DOCX format.
      </p>

      <label className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-300 p-16 transition hover:border-blue-500 hover:bg-blue-50">
        <div className="text-5xl">📄</div>

        <p className="mt-4 text-lg font-semibold">
          Click to Choose Resume
        </p>

        <p className="text-gray-500">
          PDF or DOCX (Max 5MB)
        </p>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {file && (
        <div className="mt-6 rounded-xl bg-gray-100 p-4">
          <p className="font-semibold">
            Selected File:
          </p>

          <p className="mt-1">{file.name}</p>

          <button
            onClick={removeFile}
            className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Remove File
          </button>
        </div>
      )}
    </div>
  );
}