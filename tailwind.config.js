/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 'sun': "url(./public/sun.svg)",
        // 'moon': "url(./public/moon.svg)",
      },
      animation: {
        blob: "blob 7s infinite"
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)"},
          "33%": { transform: "translate(30px, -50px) scale(1.1)"},
          "66%": { transform: "translate(-20px, 20px) scale(.9)"},
          "100%": { transform: "translate(0px, 0px) scale(1)"},
        }
      }
    },
  },
  plugins: [],
}
