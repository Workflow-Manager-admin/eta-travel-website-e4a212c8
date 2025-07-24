import type { Metadata } from "next";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about ETA’s mission, vision, and leadership team.",
};

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 md:py-20">
      <h1 className="text-3xl font-bold text-cyan-800 mb-6">About Us</h1>
      <p className="mb-8 text-lg">
        Endurance Travel Adventures (ETA) was founded by experienced athletes and guides, united by a love for adventure and a belief in the power of challenges to transform lives.
      </p>
      <h2 className="text-xl font-semibold text-sky-800 mt-8 mb-4">Our Mission</h2>
      <p className="mb-4">
        To enable extraordinary endurance journeys that foster growth, connection, and awe.
      </p>
      <h2 className="text-xl font-semibold text-sky-800 mt-8 mb-4">Our Team</h2>
      <p>
        Our guides, coaches, and logistics experts bring decades of experience from across the globe—committed to your safety, wellbeing, and adventure.
      </p>
    </section>
  );
}
