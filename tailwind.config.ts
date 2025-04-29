
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				invisaBlue: '#33C3F0',
				invisaPurple: '#8B5CF6',
				invisaDark: '#1A1F2C',
				invisaLight: '#E5DEFF',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" }
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"pulse-subtle": {
					"0%, 100%": {
						opacity: "1"
					},
					"50%": {
						opacity: "0.85"
					}
				},
				"shield-rotate": {
					"0%": {
						transform: "rotate(0deg) scale(1)"
					},
					"25%": {
						transform: "rotate(3deg) scale(1.05)"
					},
					"75%": {
						transform: "rotate(-3deg) scale(0.95)"
					},
					"100%": {
						transform: "rotate(0deg) scale(1)"
					}
				},
				"scanning": {
					"0%": {
						transform: "translateY(-100%)",
						opacity: "0.5"
					},
					"50%": {
						transform: "translateY(100%)",
						opacity: "1"
					},
					"100%": {
						transform: "translateY(-100%)",
						opacity: "0.5"
					}
				},
				"float": {
					"0%, 100%": {
						transform: "translateY(0)"
					},
					"50%": {
						transform: "translateY(-10px)"
					}
				},
				"ripple": {
					"0%": {
						transform: "scale(0.95)",
						opacity: "0.8"
					},
					"50%": {
						transform: "scale(1.05)",
						opacity: "0.5"
					},
					"100%": {
						transform: "scale(0.95)",
						opacity: "0.8"
					}
				},
				"glow": {
					"0%, 100%": {
						boxShadow: "0 0 15px 2px rgba(51, 195, 240, 0.3)"
					},
					"50%": {
						boxShadow: "0 0 25px 5px rgba(139, 92, 246, 0.5)"
					}
				},
				"gradient-shift": {
					"0%": {
						backgroundPosition: "0% 50%"
					},
					"50%": {
						backgroundPosition: "100% 50%"
					},
					"100%": {
						backgroundPosition: "0% 50%"
					}
				},
				"reveal-right": {
					"0%": {
						transform: "translateX(-20px)",
						opacity: "0"
					},
					"100%": {
						transform: "translateX(0)",
						opacity: "1"
					}
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
				"shield-rotate": "shield-rotate 3s ease-in-out infinite",
				"scanning": "scanning 3s linear infinite",
				"float": "float 6s ease-in-out infinite",
				"ripple": "ripple 3s ease-in-out infinite",
				"glow": "glow 3s ease-in-out infinite",
				"gradient-shift": "gradient-shift 10s ease infinite",
				"reveal-right": "reveal-right 0.7s ease-out forwards"
			},
			backgroundImage: {
				"grid-pattern": "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
				"radial-gradient": "radial-gradient(circle at center, rgba(51, 195, 240, 0.15), transparent 50%)",
				"conic-gradient": "conic-gradient(from 225deg, #33C3F0, #8B5CF6, #33C3F0)",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
