"use client";

import { useState } from "react";

type LoginFormProps = {
  redirectTo: string;
};

export function LoginForm({ redirectTo }: LoginFormProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password.trim() }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "كلمة المرور غير صحيحة");
        setLoading(false);
        return;
      }

      window.location.href = redirectTo;
    } catch {
      setError("حدث خطأ. حاول مرة أخرى.");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
    >
      <label className="block">
        <span className="mb-2 block text-sm text-white/70">كلمة المرور</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition-colors focus:border-[var(--brand-gold)]"
          placeholder="••••••••"
          autoFocus
          disabled={loading}
        />
      </label>

      {error ? <p className="mt-3 text-sm text-red-400">{error}</p> : null}

      <button
        type="submit"
        disabled={loading || !password}
        className="mt-6 w-full rounded-lg bg-[var(--brand-gold)] py-3.5 text-sm font-medium tracking-widest text-[var(--brand-navy)] uppercase transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "جاري الدخول..." : "دخول"}
      </button>
    </form>
  );
}
