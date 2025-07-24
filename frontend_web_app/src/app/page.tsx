import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center" aria-label="Hero">
        {/* NOTE: You must add /public/IMG_9926.JPG to your project for this to work */}
        <Image
          src="/IMG_9926.JPG"
          alt="Mountain scene - Endurance Adventure"
          fill
          priority
          className="object-cover object-center brightness-90"
          sizes="100vw"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <h1 className="absolute w-full text-center text-white font-bold text-4xl sm:text-6xl tracking-tight drop-shadow-2xl z-10" style={{ fontFamily: 'var(--font-geist-sans, sans-serif)' }}>
          Endurance Travel Adventures
        </h1>
      </section>

      {/* What We Do Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-24" aria-labelledby="what-we-do-heading">
        <h2 id="what-we-do-heading" className="text-2xl sm:text-3xl font-bold text-center text-sky-800 mb-8">What We Do</h2>
        <div className="grid sm:grid-cols-2 gap-8 text-gray-800">

          <div>
            <h3 className="font-semibold text-lg mb-2 text-cyan-700">Adventure Travel Experiences</h3>
            <p>
              Guided endurance trips that challenge and inspire—whether it&apos;s mountain biking, trail running, or multisport expeditions.
              Each adventure is designed for personal growth, camaraderie, and breathtaking exploration.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-cyan-700">Custom &amp; Supported Journeys</h3>
            <p>
              Collaborate with us to design your own adventure, or access coaching support. We provide expertise and personalized guidance for solo, team, or company retreats.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-cyan-700">Coaching &amp; Logistics Support</h3>
            <p>
              Our team offers endurance coaching, logistics, and support to ensure every journey is successful, safe, and memorable for all skill and experience levels.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-cyan-700">Community &amp; Lifelong Memories</h3>
            <p>
              Become part of the ETA community—adventurers who seek challenge, connection, and stories that last a lifetime. Join our upcoming or past trips to meet kindred spirits.
            </p>
          </div>

        </div>
        <div className="flex flex-col sm:flex-row gap-6 mt-10 justify-center">
          <Link href="/upcoming-adventures">
            <span className="inline-block bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">See Upcoming Adventures</span>
          </Link>
          <Link href="/design-your-adventure">
            <span className="inline-block bg-white border border-cyan-700 text-cyan-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">Design Your Own</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
