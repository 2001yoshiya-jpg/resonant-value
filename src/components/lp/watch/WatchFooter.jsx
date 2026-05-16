import { Phone, Mail } from "lucide-react";

export default function WatchFooter() {
  return (
    <footer className="bg-foreground text-white py-10 px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-amber rounded flex items-center justify-center">
                <span className="text-navy font-black text-xs">時</span>
              </div>
              <span className="font-jp font-black text-white text-base">時計買取センター</span>
            </div>
            <p className="font-jp text-white/60 text-xs">安心・丁寧・高価買取！査定は無料</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber" />
              <span className="font-mono font-bold">0120-XXX-XXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber" />
              <span className="font-jp text-white/70 text-xs">24時間受付中</span>
            </div>
          </div>
        </div>
        <p className="font-jp text-white/40 text-xs text-center">
          © {new Date().getFullYear()} 時計買取センター All rights Reserved.
        </p>
      </div>
    </footer>
  );
}