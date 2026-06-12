export default function DashboardMockup() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="mb-6 h-10 rounded-lg bg-white/10" />

      <div className="grid grid-cols-2 gap-4">
        <div className="h-32 rounded-xl bg-indigo-500/20" />

        <div className="h-32 rounded-xl bg-cyan-500/20" />

        <div className="col-span-2 h-48 rounded-xl bg-white/10" />
      </div>

      <div className="absolute right-6 top-6 h-3 w-3 rounded-full bg-green-400" />
    </div>
  );
}