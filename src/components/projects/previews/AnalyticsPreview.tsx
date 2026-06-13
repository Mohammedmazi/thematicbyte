export default function AnalyticsPreview() {
  return (
    <div className="h-56 bg-linear-to-br from-indigo-500/20 to-cyan-500/20 p-4">
      <div className="h-full rounded-2xl border border-white/10 bg-black/40 p-4">

        <div className="mb-4 flex justify-between">
          <div>
            <p className="text-xs text-zinc-400">
              Revenue
            </p>

            <p className="text-lg font-bold text-white">
              £42K
            </p>
          </div>

          <div className="text-green-400">
            +28%
          </div>
        </div>

        <div className="flex h-28 items-end gap-2">
          <div className="h-[30%] w-full rounded bg-indigo-500" />
          <div className="h-[55%] w-full rounded bg-indigo-500" />
          <div className="h-[45%] w-full rounded bg-indigo-500" />
          <div className="h-[75%] w-full rounded bg-indigo-500" />
          <div className="h-[90%] w-full rounded bg-indigo-500" />
        </div>

      </div>
    </div>
  );
}