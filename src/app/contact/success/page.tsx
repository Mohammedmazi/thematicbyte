import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-6 text-6xl">✅</div>

        <h1 className="mb-6 text-5xl font-bold text-white">
          Request Successfully Submitted
        </h1>

        <p className="mb-8 text-lg text-zinc-400">
          Thank you for contacting Thematic Byte.
          We have received your consultation request and
          will review it shortly.
        </p>

        <p className="mb-10 text-zinc-500">
          Our team will contact you within 24 hours using
          the email address you provided.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-500"
          >
            Return Home
          </Link>

         
        </div>
      </div>
    </main>
  );
}