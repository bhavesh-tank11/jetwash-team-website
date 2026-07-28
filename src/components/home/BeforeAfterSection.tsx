import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const pairs = [
  {
    label: "Driveway Restoration",
    before: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=40&sat=-100",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    label: "Roof Moss Removal",
    before: "https://images.unsplash.com/photo-1632759145355-6d4b23e5b4e6?w=800&q=40&sat=-100",
    after: "https://images.unsplash.com/photo-1632759145355-6d4b23e5b4e6?w=800&q=80",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="section-pad">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">See The Transformation</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-900 mt-4">Before &amp; After</h2>
          <p className="text-navy-800/60 mt-4">Drag the slider to see the difference our cleaning makes.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {pairs.map((p) => (
            <BeforeAfterSlider key={p.label} before={p.before} after={p.after} label={p.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
