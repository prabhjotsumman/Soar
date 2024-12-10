/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      "1xl": "1.375rem",
      xxl: "1.75rem",
    },
    extend: {
      lineHeight: {
        "8x": "2.118",
      },
      margin: {
        19: "4.875rem",
      },
      colors: {
        "roar-cream": "#f5f7fa",
        "light-gray": "#B1B1B1",
        "card-gray": "#5B5A6F",
        purple: "#718EBF",
        'purple-light': "#E7EDFF",
        "purple-dark": "#396AFF",
        carrot: "#FF4B4A",
        "amber-light": "#FFF5D9",
        "amber-dark": "#FFBB38",
        green: "#41D4A8",
        "green-light": '#DCFAF8',
        "green-dark": '#16DBCC',
      },
      height: {
        58: "14.68rem",
      },
      width: {
        78: "21.875rem",
      },
    },
  },
  plugins: [],
};
