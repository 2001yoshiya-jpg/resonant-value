import { useState } from "react";
import { ExternalLink, Pencil, Copy, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const pages = [
  { id: 1, title: "楽器買取センター", status: "公開中", area: "全国", slug: "/", phone: "0120-XXX-XXX", seo: "楽器の出張買取なら｜査定無料・即日対応", href: "/" },
  { id: 2, title: "時計買取センター", status: "公開中", area: "全国", slug: "/watch", phone: "0120-XXX-XXX", seo: "高級時計の出張買取｜査定無料・高価買取", href: "/watch" },
  { id: 3, title: "ブランド品買取センター", status: "公開中", area: "全国", slug: "/brand", phone: "0120-XXX-XXX", seo: "ブランド品の出張買取｜査定無料・高価買取", href: "/brand" },
  { id: 4, title: "金・プラチナ買取センター", status: "公開中", area: "全国", slug: "/gold", phone: "0120-XXX-XXX", seo: "金・プラチナの出張買取｜相場連動・高価買取", href: "/gold" },
  { id: 5, title: "ジュエリー買取センター", status: "公開中", area: "全国", slug: "/jewelry", phone: "0120-XXX-XXX", seo: "ジュエリーの出張買取｜宝石鑑定士による査定", href: "/jewelry" },
  { id: 6, title: "カメラ買取センター", status: "公開中", area: "全国", slug: "/camera", phone: "0120-XXX-XXX", seo: "カメラ・レンズの出張買取｜査定無料・高価買取", href: "/camera" },
  { id: 7, title: "家電買取センター", status: "公開中", area: "全国", slug: "/appliance", phone: "0120-XXX-XXX", seo: "家電の出張買取｜査定無料・即日対応", href: "/appliance" },
  { id: 8, title: "骨董品買取センター", status: "公開中", area: "全国", slug: "/antiques", phone: "0120-XXX-XXX", seo: "骨董品・古美術の出張買取｜専門鑑定士による査定", href: "/antiques" },
  { id: 9, title: "切手・古銭買取センター", status: "公開中", area: "全国", slug: "/stamps", phone: "0120-XXX-XXX", seo: "切手・古銭の出張買取｜コレクション買取専門", href: "/stamps" },
  { id: 10, title: "お酒買取センター", status: "公開中", area: "全国", slug: "/sake", phone: "0120-XXX-XXX", seo: "ウイスキー・ワインの出張買取｜高価買取", href: "/sake" },
  { id: 11, title: "食器買取センター", status: "公開中", area: "全国", slug: "/dishes", phone: "0120-XXX-XXX", seo: "高級食器の出張買取｜マイセン・ウェッジウッド買取", href: "/dishes" },
  { id: 12, title: "家具買取センター", status: "公開中", area: "全国", slug: "/furniture", phone: "0120-XXX-XXX", seo: "高級家具の出張買取｜ブランド家具買取専門", href: "/furniture" },
];

export default function Dashboard() {
  const [items, setItems] = useState(pages);

  const handleDelete = (id) => {
    if (confirm("このLPを削除しますか？")) {
      setItems((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleDuplicate = (item) => {
    const newItem = { ...item, id: Date.now(), title: item.title + " (コピー)", status: "下書き" };
    setItems((prev) => [...prev, newItem]);
  };

  const total = items.length;
  const published = items.filter((p) => p.status === "公開中").length;
  const draft = items.filter((p) => p.status === "下書き").length;

  return (
    <div className="min-h-screen bg-muted/40 font-jp">
      {/* Header */}
      <div className="bg-white border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-navy rounded flex items-center justify-center">
            <span className="text-amber font-black text-xs">楽</span>
          </div>
          <span className="font-black text-navy text-base">LP管理ダッシュボード</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="text-sm text-muted-foreground mb-5 flex items-center gap-4">
          <span>全{total}件</span>
          <span className="text-green-600 font-bold">公開中: {published}件</span>
          <span className="text-muted-foreground">下書き: {draft}件</span>
        </div>

        {/* List */}
        <div className="space-y-3">
          {items.map((page) => (
            <div key={page.id} className="bg-white rounded-xl border border-border px-6 py-4 flex items-center justify-between shadow-sm">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-navy text-base">{page.title}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${page.status === "公開中" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                    {page.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {page.area}　{page.slug}　{page.phone}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  SEO: {page.seo}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 ml-4 flex-shrink-0">
                <Link to={page.href} target="_blank" className="w-8 h-8 flex items-center justify-center rounded hover:bg-muted text-muted-foreground hover:text-navy transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-muted text-muted-foreground hover:text-navy transition-colors">
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => handleDuplicate(page)} className="w-8 h-8 flex items-center justify-center rounded hover:bg-muted text-muted-foreground hover:text-navy transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(page.id)} className="w-8 h-8 flex items-center justify-center rounded hover:bg-red-50 text-muted-foreground hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}