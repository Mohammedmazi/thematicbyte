export default function PortalPreview() {
  return (
    <div className="h-56 bg-linear-to-br from-indigo-500/20 to-cyan-500/20 p-4">
      <div className="h-full rounded-2xl border border-white/10 bg-black/40 p-4">

        <div className="mb-4 text-sm text-white">
          Customer Portal
        </div>

        <div className="grid grid-cols-2 gap-3">

          <div className="rounded bg-white/5 p-3">
            <p className="text-xs text-zinc-400">
              Projects
            </p>

            <p className="mt-2 text-white">
              4
            </p>
          </div>

          <div className="rounded bg-white/5 p-3">
            <p className="text-xs text-zinc-400">
              Tickets
            </p>

            <p className="mt-2 text-white">
              2
            </p>
          </div>

          <div className="rounded bg-white/5 p-3">
            <p className="text-xs text-zinc-400">
              Files
            </p>

            <p className="mt-2 text-white">
              18
            </p>
          </div>

          <div className="rounded bg-white/5 p-3">
            <p className="text-xs text-zinc-400">
              Invoices
            </p>

            <p className="mt-2 text-white">
              3
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}