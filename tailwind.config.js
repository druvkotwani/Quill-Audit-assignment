/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      boxShadow: {
        'beforeafter-shadow': '0px 3px 12px 1px #5580DB36',
      },
      colors: {
        'custom-black': '#000000',
        'custom-green': '#046202',
      },
      gradientColorStops: {
        'custom-black': '4.97%',
        'custom-green': '83.69%',
      },
      gradientColorStops: theme => theme('colors'),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'testimonial-gradient': 'linear-gradient(90.3deg, #2B4D93 -10.68%, #0E205B 27.98%, #162867 55.94%, #323A87 103.52%)',

      },
    },
  },
  plugins: [],
};
