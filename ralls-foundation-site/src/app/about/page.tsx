import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <section className="relative">
        <div className="container pt-20 pb-12 grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="inline-block h-2 w-24 rounded-full bg-[var(--brand-yellow)] mb-3" />
            <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">About Us</h1>
            <p className="text-xl text-zinc-700 max-w-prose">Advancing nutrition education for children in underserved communities.</p>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image src="https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Kids learning about food" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <div className="container pb-20">
        <div className="prose prose-zinc max-w-none">
        <h2>Mission</h2>
        <p>
          We invest in organizations that deliver nutrition education to children and their caregivers in underserved communities, advancing health equity and lifelong well-being.
        </p>
        <h2>Vision</h2>
        <p>
          Inclusive and connected communities where every child understands the foundations of healthy eating and has the opportunity to thrive.
        </p>
        <h2>Values</h2>
        <ul>
          <li>Equity and inclusion</li>
          <li>Evidence and impact</li>
          <li>Partnership and community</li>
          <li>Stewardship and transparency</li>
        </ul>
        <h2>Founders</h2>
        <p>
          The Ralls family created the Foundation to honor a commitment to community, education, and practical, measurable impact.
        </p>
      </div>
      </div>
    </div>
  );
}


