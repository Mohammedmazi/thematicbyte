import Container from "../shared/Container";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-15 w-15 items-center justify-center rounded-lg overflow-hidden">
  <div className="relative h-10 w-10">
  <Image
    src="/logo.png"
    alt="Thematic Byte"
    fill
    className="object-contain"
  />
</div>
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

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a
  href="#home"
  className="transition hover:text-white"
>
  Home
</a>

<a
  href="#services"
  className="transition hover:text-white"
>
Services
</a>



<a
  href="#solutions"
  className="transition hover:text-white"
>
  Solutions
           
</a>


<a
  href="#about"
  className="transition hover:text-white"
>
  
  About

           
</a>



<a
  href="#contact"
  className="transition hover:text-white"
>
  Contact
</a>


          </nav>

    <Link
  href="/contact"
  className="rounded-full bg-indigo-600 px-5 py-2 text-white"
>
  Book Consultation
</Link>
        </div>
      </Container>
    </header>
  );
}