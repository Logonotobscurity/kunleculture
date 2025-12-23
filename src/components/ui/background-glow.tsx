
'use client';

export const BackgroundGlow = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at center, #FFF991 0%, transparent 70%)
        `,
        opacity: 0.8,
        mixBlendMode: "multiply",
        pointerEvents: "none",
      }}
    />
  );
};
