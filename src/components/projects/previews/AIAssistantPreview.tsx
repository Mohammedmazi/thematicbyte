export default function AIAssistantPreview() {
  return (
    <div className="h-56 bg-linear-to-br from-indigo-500/20 to-cyan-500/20 p-4">
      <div className="h-full rounded-2xl border border-white/10 bg-black/40 p-4">

        <div className="mb-4 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-400" />
          <span className="text-xs text-zinc-400">
            AI Assistant Online
          </span>
        </div>

        <div className="space-y-3">
          <div className="ml-auto max-w-[70%] rounded-xl bg-indigo-500/30 p-2 text-xs text-white">
            Show monthly sales report
          </div>

          <div className="max-w-[80%] rounded-xl bg-white/10 p-2 text-xs text-zinc-300">
            Revenue increased 18% compared to last month.
          </div>

          <div className="max-w-[65%] rounded-xl bg-white/10 p-2 text-xs text-zinc-300">
            Top product: Premium Plan
          </div>
        </div>

      </div>
    </div>
  );
}