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
export function Status({ status }: { status: string }) {
  return (
    <span className={`status ${status === "Live" ? "live" : ""}`}>
      <span />
      {status}
    </span>
  );
}
export function Mascot({
  name,
  className = "",
  priority = false,
}: {
  name: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={`/mascots/${name}.webp`}
      width={800}
      height={900}
      alt={`Nexa ${name === "parent" ? "Parent" : name} mascot`}
      className={`mascot ${className}`}
      priority={priority}
    />
  );
}
