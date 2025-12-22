"use client";

import { useState } from "react";

export default function UserGrid({ users = [] }) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(null);
  const [perUser, setPerUser] = useState(() => ({}));

  async function sendEmails() {
    const ok = confirm(
      "Are you sure you want to send emails to ALL users? This action will email every user in the database."
    );
    if (!ok) return;

    setStatus("processing");
    setMessage("");
    setCount(0);

    // send sequentially so we can show per-user progress
    let successCount = 0;
    let errorCount = 0;

    for (const u of users) {
      const id = u._id ?? u.email;
      setPerUser((p) => ({ ...p, [id]: { status: "processing" } }));

      try {
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ user: { name: u.name, email: u.email } }),
        });
        const data = await res.json();

        if (!res.ok || !data.success) {
          errorCount++;
          setPerUser((p) => ({ ...p, [id]: { status: "error", message: data?.error || "failed" } }));
        } else {
          successCount++;
          setPerUser((p) => ({ ...p, [id]: { status: "done" } }));
        }
      } catch (err) {
        errorCount++;
        setPerUser((p) => ({ ...p, [id]: { status: "error", message: err?.message || String(err) } }));
      }

      setCount(successCount);
    }

    setStatus(errorCount > 0 ? "error" : "done");
    setMessage(errorCount > 0 ? `${errorCount} failed, ${successCount} sent` : `All done — ${successCount} sent`);
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Users</h2>

        <div className="flex items-center gap-3">
          <button
            onClick={sendEmails}
            disabled={status === "processing"}
            className={`px-4 py-2 rounded-md font-semibold text-white transition-colors ${
              status === "processing" ? "bg-gray-400" : "bg-emerald-600 hover:bg-emerald-700"
            }`}
          >
            Send email
          </button>

          <div className="text-sm">
            {status === "idle" && <span className="text-gray-500">Idle</span>}
            {status === "processing" && <span className="text-blue-600">Processing…</span>}
            {status === "done" && <span className="text-green-600">Done — {message}</span>}
            {status === "error" && <span className="text-red-600">Error — {message}</span>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {users.map((u) => {
          const id = u._id ?? u.email;
          const st = perUser[id]?.status ?? "idle";

          return (
            <div
              key={id}
              className="flex items-center gap-3 p-2 bg-white border rounded-md shadow-sm text-sm"
            >
              <div className="relative">
                {u.image ? (
                  <img
                    src={u.image}
                    alt={u.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-medium">
                    {getInitials(u.name)}
                  </div>
                )}

                {/* small status dot */}
                <span
                  title={
                    st === "idle"
                      ? "Idle"
                      : st === "processing"
                      ? "Processing"
                      : st === "done"
                      ? "Sent"
                      : perUser[id]?.message || "Error"
                  }
                  className={`absolute -bottom-0 -right-0 w-3 h-3 rounded-full border-2 border-white ${
                    st === "idle"
                      ? "bg-gray-300"
                      : st === "processing"
                      ? "bg-blue-500 animate-pulse"
                      : st === "done"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{u.name}</div>
                <div className="text-xs text-gray-500 truncate">{u.email}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  function getInitials(name) {
    if (!name) return "?";
    return name
      .split(" ")
      .map((s) => s[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }
}
