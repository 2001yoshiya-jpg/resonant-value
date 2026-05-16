import { motion } from "framer-motion";
import { Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 px-6 bg-navy" id="contact">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-amber" />
            <span className="text-amber text-xs font-bold tracking-widest uppercase">Free Consultation</span>
            <div className="h-px w-12 bg-amber" />
          </div>
          <h2 className="font-jp text-2xl md:text-3xl font-black text-white">
            「これ売れる？」だけでも<span className="text-amber">大丈夫です。</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: contact info */}
          <div className="space-y-6">
            <div className="bg-white/10 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-jp text-xs text-white/60">お電話でのお問い合わせ</p>
                  <p className="font-mono text-xl font-black text-white tracking-tight">0120-XXX-XXX</p>
                </div>
              </div>
              <p className="font-jp text-xs text-white/60">営業時間 9:00〜19:00（年中無休）</p>
              <Button className="w-full mt-4 h-12 bg-red-500 hover:bg-red-600 text-white font-jp font-bold rounded">
                <Phone className="w-4 h-4 mr-2" />
                今すぐ電話する
              </Button>
            </div>

            <div className="bg-white/10 rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-jp text-xs text-white/60">メールでのお問い合わせ</p>
                  <p className="font-jp text-sm font-bold text-white">24時間受付中</p>
                </div>
              </div>
              <Button className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-jp font-bold rounded">
                <Mail className="w-4 h-4 mr-2" />
                メールで相談する
              </Button>
            </div>
          </div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 bg-amber/20 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-7 h-7 text-amber" />
                </div>
                <p className="font-jp text-navy font-bold text-lg">お問い合わせありがとうございます</p>
                <p className="font-jp text-sm text-muted-foreground mt-2">担当者よりご連絡いたします</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <h3 className="font-jp font-black text-navy text-base mb-4">無料査定を申し込む</h3>
                <div className="space-y-1">
                  <Label className="font-jp text-xs text-foreground">お名前 <span className="text-red-500">*</span></Label>
                  <Input className="h-10 font-jp text-sm" placeholder="山田 太郎" required />
                </div>
                <div className="space-y-1">
                  <Label className="font-jp text-xs text-foreground">電話番号 <span className="text-red-500">*</span></Label>
                  <Input className="h-10 font-jp text-sm" placeholder="090-XXXX-XXXX" required />
                </div>
                <div className="space-y-1">
                  <Label className="font-jp text-xs text-foreground">メールアドレス <span className="text-red-500">*</span></Label>
                  <Input type="email" className="h-10 font-jp text-sm" placeholder="example@mail.com" required />
                </div>
                <div className="space-y-1">
                  <Label className="font-jp text-xs text-foreground">査定希望品</Label>
                  <Input className="h-10 font-jp text-sm" placeholder="例：YAMAHAのアップライトピアノ" />
                </div>
                <div className="space-y-1">
                  <Label className="font-jp text-xs text-foreground">メッセージ</Label>
                  <Textarea className="font-jp text-sm resize-none" rows={3} placeholder="状態や詳細をご記入ください" />
                </div>
                <Button type="submit" className="w-full h-12 bg-amber hover:bg-amber/90 text-navy font-jp font-black rounded text-base">
                  無料査定を申し込む
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}