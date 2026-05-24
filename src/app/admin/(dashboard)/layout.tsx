import { AdminNav } from "@/components/admin/admin-nav";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--surface-container-low)]">
      <AdminNav />
      <main className="mx-auto max-w-[1400px] px-6 py-10">{children}</main>
    </div>
  );
}
