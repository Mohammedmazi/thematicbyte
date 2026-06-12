export default function NeuralBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />

      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
    </>
  );
}