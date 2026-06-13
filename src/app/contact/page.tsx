import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] py-32">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-cyan-400">
            Contact Thematic Byte
          </p>

          <h1 className="mb-6 text-5xl font-bold text-white">
            Let&apos;s Discuss Your Project
          </h1>

          <p className="text-lg text-zinc-400">
            Tell us about your project, goals, and requirements.
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <ContactForm />

      </div>
    </main>
  );
}