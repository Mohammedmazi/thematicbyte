export default function InventoryPreview() {
  return (
    <div className="h-56 bg-linear-to-br from-indigo-500/20 to-cyan-500/20 p-4">
      <div className="h-full rounded-2xl border border-white/10 bg-black/40 p-4">

        <div className="mb-4 text-sm text-white">
          Inventory Overview
        </div>

        <div className="space-y-3">

          <div className="flex justify-between rounded bg-white/5 p-2">
            <span className="text-xs text-zinc-300">
              Product A
            </span>
            <span className="text-xs text-green-400">
              145
            </span>
          </div>

          <div className="flex justify-between rounded bg-white/5 p-2">
            <span className="text-xs text-zinc-300">
              Product B
            </span>
            <span className="text-xs text-yellow-400">
              42
            </span>
          </div>

          <div className="flex justify-between rounded bg-white/5 p-2">
            <span className="text-xs text-zinc-300">
              Product C
            </span>
            <span className="text-xs text-red-400">
              8
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}