export default function PageHero({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <section className="relative bg-wash-gradient pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-spray-radial" />
      <div className="container-max relative px-6 md:px-10 lg:px-16 text-center max-w-3xl mx-auto">
        <span className="eyebrow text-electric-400 bg-white/10 px-3 py-1 rounded-full">{eyebrow}</span>
        <h1 className="font-display font-bold text-4xl md:text-5xl text-white mt-6">{title}</h1>
        <p className="text-white/70 mt-5">{desc}</p>
      </div>
    </section>
  );
}
