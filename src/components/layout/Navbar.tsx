import Container from "../shared/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white">
              TB
            </div>

            <div>
              <h1 className="font-bold text-white">
                Thematic Byte
              </h1>

              <p className="text-xs text-zinc-400">
                Software & AI Solutions
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Solutions</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>

          <button className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-500">
            Book Consultation
          </button>
        </div>
      </Container>
    </header>
  );
}