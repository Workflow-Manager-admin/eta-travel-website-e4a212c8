import type { Metadata } from "next";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  title: "FAQ",
  description: "Your top ETA questions answered.",
};

const faqs = [
  {
    q: "Who can join an ETA adventure?",
    a: "We welcome enthusiasts of all experience levels. Each adventure will list recommended skills or experience for comfort and safety."
  },
  {
    q: "What does the trip fee cover?",
    a: "Fees usually include guide support, logistics, accommodation, and some meals; see individual trip details."
  },
  {
    q: "Is custom planning more expensive?",
    a: "Custom designed adventures vary by scope. Contact us and we’ll collaborate for a fair, transparent quote."
  },
  {
    q: "How big are the groups?",
    a: "We aim for small groups (~6-12 people) to preserve safety, camaraderie, and memory-making."
  }
];

// PUBLIC_INTERFACE
export default function FAQ() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 md:py-20">
      <h1 className="text-3xl font-bold text-cyan-800 mb-6">FAQ</h1>
      <ul className="space-y-8">
        {faqs.map((f) => (
          <li key={f.q}>
            <details>
              <summary className="text-lg font-medium text-sky-800 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-2 py-1">{f.q}</summary>
              <div className="mt-2 ml-4 text-gray-800">{f.a}</div>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
