import Container from "../shared/Container";
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="contact"className="py-32">
      <Container>
        <div
          className="
            rounded-[40px]
            border
            border-white/10
            bg-linear-to-r
            from-indigo-500/20
            to-cyan-500/20
            p-16
            text-center
          "
        >
          <h2 className="mb-6 text-5xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-300">
            Build faster, automate smarter, and unlock
            new opportunities through modern software,
            AI, and digital transformation.
          </p>

          <Link href="/contact" className="rounded-full bg-white px-8 py-4 font-semibold text-black">
            Schedule a Consultation
          </Link>

      


        </div>
      </Container>
    </section>
  );
}