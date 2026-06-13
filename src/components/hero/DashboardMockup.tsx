export default function DashboardMockup() {
  return (
    <div className="relative w-full">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-white">
            Thematic Byte Platform
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            Intelligent business solutions powered by software and AI
          </p>
        </div>

        {/* KPI Cards */}
        <div className="mb-6 grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-indigo-500/20 p-4">
            <p className="text-xs text-zinc-400">Projects</p>
            <p className="mt-1 text-2xl font-bold text-white">24</p>
          </div>

          <div className="rounded-xl bg-cyan-500/20 p-4">
            <p className="text-xs text-zinc-400">
              Solutions
            </p>
            <p className="mt-1 text-2xl font-bold text-white">
              18
            </p>
          </div>

          <div className="rounded-xl bg-emerald-500/20 p-4">
            <p className="text-xs text-zinc-400">
              Growth
            </p>
            <p className="mt-1 text-2xl font-bold text-white">
              +63%
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="rounded-2xl bg-white/10 p-4">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="text-sm font-medium text-white">
              Solution Performance
            </h4>

            <span className="text-xs text-green-400">
              +28%
            </span>
          </div>

          <div className="flex h-40 items-end gap-2">
            <div className="h-[25%] w-full rounded bg-indigo-500" />
            <div className="h-[40%] w-full rounded bg-indigo-500" />
            <div className="h-[35%] w-full rounded bg-indigo-500" />
            <div className="h-[60%] w-full rounded bg-indigo-500" />
            <div className="h-[50%] w-full rounded bg-indigo-500" />
            <div className="h-[85%] w-full rounded bg-indigo-500" />
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
            AI
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
            Automation
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
            Web Apps
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
            Mobile
          </span>
        </div>
      </div>
    </div>
  );
}