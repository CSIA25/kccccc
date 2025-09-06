import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: ["./src/**/*.{ts,tsx}"],
	prefix: "",
	theme: {
		container: { center: true, padding: '2rem', screens: { '2xl': '1400px' } },
		extend: {
			fontFamily: {
        glamore: ["'Glamore'", "serif"],
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
				secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
				destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
				muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
				accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
				popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
				card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        cream: '#f8f5f2', 
        charcoal: '#212121',
        slate: '#6B7280',
        alpenglow: '#ff8c00', 
        pine: '#3a4a44',
			},
			borderRadius: { lg: 'var(--radius)', md: 'calc(var(--radius) - 2px)', sm: 'calc(var(--radius) - 4px)' },
			keyframes: {
				'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in-up': { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'stars': { 
          '0%': { transform: 'translateY(0px)' }, 
          '100%': { transform: 'translateY(-2000px)' } 
        },
			},
			animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'stars': 'stars 120s linear infinite',
			},
      backgroundImage: {
        // CORRECTED to use .webp extensions as you specified
        'stars-sm': "url('/src/assets/stars-sm.webp')",
        'stars-md': "url('/src/assets/stars-md.webp')",
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;