module.exports = {
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#3644d0",
          secondary: '#272a30',
          accent: '#e13434',
          neutral: "#1a1c1e",
          "base-100": "#111111",
        },
      },
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [require("daisyui")],
};
