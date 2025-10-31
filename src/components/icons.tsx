import { cn } from "@/lib/utils";

export const KunleLogo = ({ className }: { className?: string }) => (
    <svg
    viewBox="0 0 120 24"
    className={cn("fill-current", className)}
    aria-label="Logo"
  >
    <text
      x="0"
      y="18"
      fontFamily="sans-serif"
      fontSize="24"
      fontWeight="700"
      letterSpacing="1"
    >
      ACME
    </text>
  </svg>
);
