import React from "react";

export default function Resume() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full h-full max-w-5xl mx-auto p-4">
        <embed
          src="/resume.pdf"
          type="application/pdf"
          className="w-full h-full"
          style={{
            border: "none",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </div>
  );
}
