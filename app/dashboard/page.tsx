export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">History</h1>
      <p className="mt-2 text-ink/70">
        Past dumps with completion % will live here.
      </p>

      {/* Placeholder history shell */}
      <div className="mt-8 rounded-2xl border border-lavender/40 bg-header/40 p-8 text-center">
        <p className="text-lg text-white">No past dumps. A clean slate.</p>
        <p className="mt-2 text-sm text-ink/60">
          Finish something (anything) and it will show up here for future-you
          to admire.
        </p>
      </div>
    </div>
  );
}
