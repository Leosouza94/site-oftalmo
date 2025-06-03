/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
            // Cores principais da clínica odontológica
            primary: {
                DEFAULT: '#2E8B57', // Verde médio
                light: '#3CB371',   // Verde mais claro
                dark: '#006400',    // Verde mais escuro
                50: '#F0FFF0',      // Verde muito claro (quase branco)
                100: '#E0EEE0',     // Verde muito claro
                200: '#C1FFC1',     // Verde claro
                300: '#9ACD32',     // Verde amarelado
                400: '#7CFC00',     // Verde brilhante
                500: '#2E8B57',     // Verde médio (principal)
                600: '#228B22',     // Verde floresta
                700: '#006400',     // Verde escuro
                800: '#004D00',     // Verde muito escuro
                900: '#003300',     // Verde quase preto
            },
            secondary: {
                DEFAULT: '#FFFFFF', // Branco
                50: '#FFFFFF',      // Branco puro
                100: '#F8F8F8',     // Branco quase puro
                200: '#F0F0F0',     // Branco acinzentado muito claro
                300: '#E8E8E8',     // Branco acinzentado claro
                400: '#D0D0D0',     // Cinza muito claro
            },
            accent: {
                DEFAULT: '#4CAF50', // Verde accent
                light: '#81C784',   // Verde accent claro
                dark: '#388E3C',    // Verde accent escuro
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
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
