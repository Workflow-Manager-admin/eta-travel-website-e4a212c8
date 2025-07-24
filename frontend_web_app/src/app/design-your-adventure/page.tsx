import type { Metadata } from "next";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "Design Your Adventure",
  description: "Work with ETA to create a custom, supported adventure with coaching and guidance.",
};

export default function DesignYourAdventure() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 md:py-20">
      <h1 className="text-3xl font-bold text-cyan-800 mb-6">Design Your Adventure</h1>
      <p className="mb-8 text-lg">
        Dreaming of a special trip or corporate retreat? Our team collaborates with you to craft a unique, supported endurance experience anywhere in the world.
      </p>
      <ul className="mb-6 space-y-2 list-disc list-inside text-gray-700">
        <li>Bespoke route planning and logistics</li>
        <li>Options for solo, group, or company adventures</li>
        <li>Expert coaching and preparation</li>
        <li>On-trip support and local guidance</li>
        <li>Focus on safety, challenge, and fun</li>
      </ul>
      <p>Contact <a href="mailto:info@etatravel.com" className="text-cyan-700 underline">info@etatravel.com</a> to start your journey!</p>
    </section>
  );
}
