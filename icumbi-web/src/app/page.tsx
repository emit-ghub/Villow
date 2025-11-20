import Link from 'next/link';

const highlights = [
  { label: 'Live map search', value: 'Mapbox GL + Algolia geosearch' },
  { label: 'Instant results', value: 'React Server Components & streaming UI' },
  { label: 'Collaboration', value: 'Favorites, shared boards, alerts' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950">
      <section className="relative isolate flex flex-1 flex-col gap-10 px-6 py-24 text-white sm:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-300">Icumbi Platform</p>
          <h1 className="mt-6 font-semibold text-4xl leading-tight text-white sm:text-5xl">
            Zillow-grade discovery with modern Next.js infrastructure.
          </h1>
          <p className="mt-6 text-lg text-slate-200">
            We pair Next.js 15, Prisma, and Algolia so buyers can jump from search to favorite to tour
            request in milliseconds. Server Actions keep data fresh, while UploadThing and Mapbox power
            immersive listing pages.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-slate-300">{item.label}</p>
              <p className="mt-2 text-base font-medium text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/getting-started"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            View build steps
          </Link>
          <Link
            href="/docs/architecture"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
          >
            Architecture notes
          </Link>
        </div>
      </section>
    </main>
  );
}
