export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/30 pb-28">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">RESONANT EXCHANGE</p>
        <p className="font-jp text-xs text-muted-foreground">
          安心・丁寧・高価買取！査定は無料
        </p>
        <p className="font-mono text-xs text-muted-foreground/50 mt-6">
          © {new Date().getFullYear()} Resonant Exchange. All rights reserved.
        </p>
      </div>
    </footer>
  );
}