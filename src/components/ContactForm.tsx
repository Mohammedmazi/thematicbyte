"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        project: formData.get("project"),
      }),
    });

    setLoading(false);

    if (response.ok) {
      window.location.href = "/contact/success";
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8"
    >
      <input
        name="name"
        placeholder="Full Name"
        required
        className="w-full rounded-xl bg-black/40 p-4 text-white"
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="w-full rounded-xl bg-black/40 p-4 text-white"
      />

      <input
        name="company"
        placeholder="Company Name"
        className="w-full rounded-xl bg-black/40 p-4 text-white"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        className="w-full rounded-xl bg-black/40 p-4 text-white"
      />

      <select
        name="service"
        className="w-full rounded-xl bg-black/40 p-4 text-white"
      >
        <option>Web Development</option>
        <option>Mobile Applications</option>
        <option>AI Solutions</option>
        <option>Automation</option>
        <option>Custom Software</option>
      </select>

      <textarea
        name="project"
        rows={6}
        placeholder="Tell us about your project..."
        required
        className="w-full rounded-xl bg-black/40 p-4 text-white"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-indigo-600 px-8 py-4 font-semibold text-white"
      >
        {loading ? "Sending..." : "Submit Request"}
      </button>
    </form>
  );
}