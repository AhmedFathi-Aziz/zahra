import { LoginForm } from "@/components/admin/login-form";

type PageProps = {
  searchParams: Promise<{ from?: string }>;
};

export default async function AdminLoginPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const redirectTo = params.from?.startsWith("/admin") ? params.from : "/admin";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-bl from-[var(--brand-navy)] via-[#0a2540] to-[var(--brand-navy)] px-6">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm tracking-[0.4em] text-[var(--brand-gold)]">ZAHRA</p>
          <h1 className="font-arabic-display text-3xl text-white">لوحة التحكم</h1>
          <p className="mt-2 text-sm text-white/50">إدارة تحف زهرة الفنية</p>
        </div>
        <LoginForm redirectTo={redirectTo} />
      </div>
    </div>
  );
}
