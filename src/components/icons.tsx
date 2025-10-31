import { cn } from "@/lib/utils";

export const KunleLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 24"
    className={cn("fill-current", className)}
    aria-label="Kunle Couture Logo"
  >
    <text
      x="0"
      y="18"
      fontFamily="'Sofia Pro', sans-serif"
      fontSize="24"
      fontWeight="700"
      letterSpacing="1"
    >
      KUNLE
    </text>
    <text
      x="95"
      y="18"
      fontFamily="'Sofia Pro', sans-serif"
      fontSize="24"
      fontWeight="300"
      letterSpacing="1"
    >
      COUTURE
    </text>
  </svg>
);
