import type { Metadata } from "next";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "Upcoming Adventures",
  description: "Explore upcoming endurance adventures with ETA.",
};

export default function UpcomingAdventures() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <h1 className="text-3xl font-bold text-cyan-800 mb-6">Upcoming Adventures</h1>
      <p className="mb-8 text-lg">
        Join one of our expertly crafted endurance adventures. Find details below and reserve your spot!
      </p>
      {/* Replace with dynamic trip cards in the future */}
      <div className="space-y-8">
        <div className="bg-white shadow rounded-lg p-5 border-l-4 border-cyan-700">
          <h2 className="text-xl font-semibold mb-1">Alpine Trail Epic — July 2024</h2>
          <p className="text-gray-700">8 days trail running and hiking in the French Alps. Fully guided. For intermediate/experienced runners.</p>
        </div>
        <div className="bg-white shadow rounded-lg p-5 border-l-4 border-cyan-700">
          <h2 className="text-xl font-semibold mb-1">New Zealand South Adventure — Oct 2024</h2>
          <p className="text-gray-700">A multi-sport trip with biking, kayaking, and hiking in South Island’s rugged wilderness. Open for all adventure levels.</p>
        </div>
        {/* If none, display: <p>No adventures available right now. Check back soon!</p> */}
      </div>
    </section>
  );
}
