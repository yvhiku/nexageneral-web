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
  parent: { width: 900, height: 900 },
  go: { width: 937, height: 1000 },
  fresh: { width: 882, height: 1000 },
  pay: { width: 1076, height: 1200 },
  market: { width: 1743, height: 1200 },
  stays: { width: 1348, height: 1200 },
  jobs: { width: 1382, height: 1200 },
  family: { width: 1748, height: 818 },
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
      src={`/mascots/${name}.webp`}
      width={size.width}
      height={size.height}
      alt={
        name === "family"
          ? "Nexa family of product mascots"
          : `Nexa ${name === "parent" ? "Parent" : name} mascot`
      }
      className={`mascot ${className}`}
      priority={priority}
      quality={100}
    />
  );
}
