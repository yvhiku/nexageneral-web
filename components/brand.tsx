import Image from "next/image";
import { Compass, Cloud, ArrowUpRight, ArrowRight } from "lucide-react";
export function Brand({
  product = "nexa",
  size = 36,
}: {
  product?: string;
  size?: number;
}) {
  return product === "maps" ? (
    <Compass size={size} strokeWidth={1.4} />
  ) : product === "cloud" ? (
    <Cloud size={size} strokeWidth={1.4} />
  ) : (
    <Image
      src={`/brand/${product}.webp`}
      width={size}
      height={size}
      alt=""
      className="brand-icon"
    />
  );
}
export function Arrow({ external = false }: { external?: boolean }) {
  return external ? (
    <ArrowUpRight size={19} strokeWidth={1.6} />
  ) : (
    <ArrowRight size={19} strokeWidth={1.6} />
  );
}
export function Status({
  status,
  live,
}: {
  status: string;
  live?: boolean;
}) {
  const isLive =
    live ??
    (status === "Live" ||
      status === "Launching" ||
      status === "En ligne" ||
      status === "Lancement" ||
      status === "متاح" ||
      status === "قيد الإطلاق");
  return (
    <span className={`status ${isLive ? "live" : ""}`}>
      <span />
      {status}
    </span>
  );
}
const mascotSize: Record<string, { width: number; height: number }> = {
  parent: { width: 890, height: 1162 },
  go: { width: 1214, height: 1295 },
  nexagoriding: { width: 1375, height: 1144 },
  nexafreshriding: { width: 1374, height: 1145 },
  nexastaysbanner: { width: 1374, height: 1145 },
  nexapaybanner: { width: 1374, height: 1145 },
  nexamarketbanner: { width: 1374, height: 1145 },
  nexajobsbanner: { width: 1374, height: 1145 },
  fresh: { width: 1178, height: 1335 },
  pay: { width: 1230, height: 1278 },
  market: { width: 1254, height: 1254 },
  stays: { width: 1254, height: 1254 },
  jobs: { width: 1254, height: 1254 },
  family: { width: 1748, height: 818 },
};

const mascotAlt: Record<string, string> = {
  family: "Nexa family of product mascots",
  parent: "Nexa Parent mascot",
  nexagoriding: "Nexa Go mascot",
  nexafreshriding: "Nexa Fresh mascot",
  nexastaysbanner: "Nexa Stays mascot",
  nexapaybanner: "Nexa Pay mascot",
  nexamarketbanner: "Nexa Market mascot",
  nexajobsbanner: "Nexa Jobs mascot",
};

export function Mascot({
  name,
  className = "",
  priority = false,
}: {
  name: string;
  className?: string;
  priority?: boolean;
}) {
  const size = mascotSize[name] ?? { width: 1000, height: 1000 };
  return (
    <Image
      src={`/mascots/${name}.png`}
      width={size.width}
      height={size.height}
      alt={mascotAlt[name] ?? `Nexa ${name} mascot`}
      className={`mascot ${className}`}
      priority={priority}
      quality={100}
    />
  );
}
