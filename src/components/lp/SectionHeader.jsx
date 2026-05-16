export default function SectionHeader({ en, ja, sub }) {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-3">
        <div className="h-px w-12 bg-navy" />
        <span className="text-navy text-xs font-bold tracking-widest uppercase">{en}</span>
        <div className="h-px w-12 bg-navy" />
      </div>
      <h2 className="font-jp text-2xl md:text-3xl font-black text-navy leading-snug">
        {ja}
      </h2>
      {sub && <p className="text-muted-foreground text-sm mt-3 font-jp">{sub}</p>}
    </div>
  );
}