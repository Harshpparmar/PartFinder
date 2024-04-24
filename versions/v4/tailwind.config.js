/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'comet': {
          '50': '#f5f6f9',
          '100': '#e8eaf1',
          '200': '#d7dbe6',
          '300': '#bbc2d5',
          '400': '#9aa3c0',
          '500': '#8189b0',
          '600': '#6f75a1',
          '700': '#636592',
          '800': '#545578',
          '900': '#474961',
          '950': '#2e2e3d',
      },
      
      }
    },
  },
  plugins: [],
}

