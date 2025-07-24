import type { Metadata } from "next";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "Past Adventures",
  description: "Discover stories and recaps of past endurance journeys with ETA.",
};

export default function PastAdventures() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <h1 className="text-3xl font-bold text-cyan-800 mb-6">Past Adventures</h1>
      <p className="mb-8 text-lg">
        Take a look at our previous adventures and the community’s inspiring accomplishments:
      </p>
      <ul className="space-y-2 list-disc list-inside text-gray-700">
        <li>
          <span className="font-semibold">Patagonia Traverse 2023:</span> Hiked and biked across Patagonia’s varied landscapes.
        </li>
        <li>
          <span className="font-semibold">Rocky Mountains Multi-sport 2022:</span> Team-building, multi-day endurance event with coaching support.
        </li>
        <li>
          <span className="font-semibold">Sahara Run 2021:</span> Supported group endurance running in spectacular conditions.
        </li>
        <li>
          <span className="font-semibold">And more!</span> Discover new adventures by joining ETA.
        </li>
      </ul>
    </section>
  );
}
