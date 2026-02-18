export default function ErpLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen">
      <main className="flex-1 p-6">{children}</main>
    </section>
  );
}
