import {
  HeartPulse,
  Package,
  Plane,
  PlaneTakeoff,
  Settings2,
  ShieldPlus,
  Sprout,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  plane: Plane,
  helicopter: HelicopterGlyph,
  heartPulse: HeartPulse,
  shieldPlus: ShieldPlus,
  sprout: Sprout,
  package: Package,
  settings2: Settings2,
  planeTakeoff: PlaneTakeoff,
  users: Users
};

type ServiceIconProps = {
  name: keyof typeof icons;
  className?: string;
};

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = icons[name];

  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-500/30 bg-gold-500/10 text-gold-500",
        className
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.8} />
    </span>
  );
}

type CustomIconProps = {
  className?: string;
  strokeWidth?: number;
};

function HelicopterGlyph({
  className,
  strokeWidth = 1.8
}: CustomIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 10h13a3 3 0 0 1 3 3v1H9a4 4 0 0 1-4-4Z" />
      <path d="M11 14v3" />
      <path d="M8 17h9" />
      <path d="M18 17a2 2 0 0 0 2-2v-1" />
      <path d="M12 10V7a2 2 0 0 1 2-2h4l2 3" />
      <path d="M2 7h18" />
      <path d="M5 19h5" />
    </svg>
  );
}
