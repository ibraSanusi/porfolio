import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#A6FF00',
        secondary: '#F2E8CF',
        ternary: '#859c58',
      },
      borderColor: {
        primary: '#A6FF00',
        secondary: '#F2E8CF',
        ternary: '#859c58',
      },
      backgroundColor: {
        principal: '#386641',
        primary: '#A6FF00',
        secondary: '#F2E8CF',
        ternary: '#859c58',
      },
    },
  },
  plugins: [],
}
export default config
