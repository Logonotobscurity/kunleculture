import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ["'Sofia Pro'", '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'sans-serif'],
      },
      fontSize: {
        'hero-mobile': ['25px', '24.75px'],
        'hero-desktop': ['40.8023px', '40.3943px'],
        'h1-mobile': ['32px', '36.07px'],
        'h1-desktop': ['58.33px', '65.63px'],
        'h3-mobile': ['22px', '22px'],
        'h3-desktop': ['50px', '48.6px'],
        'small': ['12px', '15.6px'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "calc(var(--radius-lg) - 8px)", // sm
        sm: "calc(var(--radius-lg) - 12px)", // xs
        xl: "var(--radius-xl)",
        '2xl': "var(--radius-2xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        subtle: 'rgba(0,0,0,0.05) 0px 2px 10px 0, rgba(0,0,0,0.05) 0px 2px 16px 0px',
        large: 'rgba(0,0,0,0.1) 0px 4px 8px 0px',
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(rgba(0,0,0,0) 19%, rgba(0,0,0,0.5) 100%, rgb(0,0,0) 112%)',
        'editorial-section': 'linear-gradient(167deg, rgb(244,241,230) 0%, rgb(250,248,242) 38%, rgb(250,248,242) 84%, rgb(244,241,230) 100%)',
        'tailoring-process': 'linear-gradient(rgb(215,227,235) 0%, rgb(250,234,171) 100%)',
        'background-texture': "url('https://www.ofi.com/background-texture.webp')",
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
