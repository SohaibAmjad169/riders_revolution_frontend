import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {colors: {
      "glow-color": "hsl(186 100% 69%)",
    },
    fontFamily: {
      raleway: ['"Raleway"', "sans-serif"],
    },
    boxShadow: {
      "glow-btn": "inset 0 0 8px hsl(186 100% 69%), 0 0 8px hsl(186 100% 69%)",
      "glow-hover": "0 0 20px 4px hsl(186 100% 69%)",
    },
    animation: {
      "text-flicker": "text-flicker 3s linear infinite",
      "border-flicker": "border-flicker 2s linear infinite",
      "faulty-flicker": "faulty-flicker 2s linear infinite",
    },
    keyframes: {
      "faulty-flicker": {
        "0%, 2%": { opacity: "0.1" },
        "4%": { opacity: "0.5" },
        "19%": { opacity: "0.5" },
        "21%": { opacity: "0.1" },
        "23%": { opacity: "1" },
        "80%": { opacity: "0.5" },
        "83%": { opacity: "0.4" },
        "87%": { opacity: "1" },
      },
      "text-flicker": {
        "0%": { opacity: "0.1" },
        "2%": { opacity: "1" },
        "8%": { opacity: "0.1" },
        "9%": { opacity: "1" },
        "12%": { opacity: "0.1" },
        "20%": { opacity: "1" },
        "25%": { opacity: "0.3" },
        "30%": { opacity: "1" },
        "70%": { opacity: "0.7" },
        "72%": { opacity: "0.2" },
        "77%": { opacity: "0.9" },
        "100%": { opacity: "0.9" },
      },
      "border-flicker": {
        "0%": { opacity: "0.1" },
        "2%": { opacity: "1" },
        "4%": { opacity: "0.1" },
        "8%": { opacity: "1" },
        "70%": { opacity: "0.7" },
        "100%": { opacity: "1" },
      },
    },},
    fontFamily: {
      myFont: ['American Captain'],
      myFont2: ['Gidole Regular'],
      roboto: ['Roboto'],
      Popins: ['Poppins'],
    },
  },
  plugins: [daisyui],
}
