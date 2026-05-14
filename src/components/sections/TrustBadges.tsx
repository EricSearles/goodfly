import { Clock3, MapPinned, ShieldCheck, Zap } from "lucide-react";

const badges = [
  { label: "Atendimento 24 horas", icon: Clock3 },
  { label: "Cotação rápida", icon: Zap },
  { label: "Operadores homologados", icon: ShieldCheck },
  { label: "Soluções em todo o Brasil", icon: MapPinned }
];

export function TrustBadges() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {badges.map((badge) => {
        const Icon = badge.icon;

        return (
          <div
            key={badge.label}
            className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white/88 backdrop-blur-sm"
          >
            <Icon className="h-4 w-4 text-gold-500" />
            <span>{badge.label}</span>
          </div>
        );
      })}
    </div>
  );
}
