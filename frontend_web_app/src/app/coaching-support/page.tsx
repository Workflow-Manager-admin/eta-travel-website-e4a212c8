import type { Metadata } from "next";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "Coaching & Support",
  description: "Expert coaching and logistical support for your endurance travel adventures.",
};

export default function CoachingSupport() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 md:py-20">
      <h1 className="text-3xl font-bold text-cyan-800 mb-6">Coaching &amp; Support</h1>
      <p className="mb-8 text-lg">
        Whether training for an ETA adventure or designing your own, our coaches and logistics team are here to help.
      </p>
      <ul className="mb-6 space-y-2 list-disc list-inside text-gray-700">
        <li>Personalized endurance coaching programs</li>
        <li>Preparation for new terrain or conditions</li>
        <li>Travel &amp; equipment consulting</li>
        <li>On-the-ground support during trips</li>
        <li>Holistic wellbeing &amp; mental resilience guidance</li>
      </ul>
      <p>
        Interested in learning more? Email <a href="mailto:coaching@etatravel.com" className="text-cyan-700 underline">coaching@etatravel.com</a>.
      </p>
    </section>
  );
}
