export default function NeuralBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/20" />

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
    </div>
  );
}