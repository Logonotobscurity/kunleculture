import { cn } from "@/lib/utils";

export const KunleLogo = ({ className }: { className?: string }) => (
    <svg
    viewBox="0 0 180 24"
    className={cn("fill-current", className)}
    aria-label="Kunle Couture Logo"
  >
    <text
      x="0"
      y="18"
      fontFamily="'Sofia Pro', sans-serif"
      fontSize="20"
      fontWeight="700"
      letterSpacing="1"
    >
      KUNLE COUTURE
    </text>
  </svg>
);
