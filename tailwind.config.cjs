/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#172B4D",
          pDark: "#0C1628", // Darker shade of primary
          pLight: "#586D88", // Lighter shade of primary
          secondary: "#36393F", // Gray tone for secondary (similar to ChatGPT's gray)
          sDark: "#2F3337", // Darker shade of secondary
          sLight: "#7C8085", // Lighter shade of secondary
          opposite: "#D9DCE1",
          oDark: "#D8DDDF",
          oLight: "#F7F8FA",
        },
        light: {
          primary: "#E4F1FF",
          pDark: "#C9E1FF", // Darker shade of primary
          pLight: "#F0F7FF", // Lighter shade of primary
          secondary: "#F4F8FF", // Use sLight as secondary color
          sDark: "#D2E0F4", // Darker shade of secondary
          sLight: "#F9FBFF", // Lighter shade of secondary
          opposite: "#2D3748", // Text color
          oDark: "#4A5568", // Darker shade for text
          oLight: "#9FB3C3", // Lighter shade for text
        },
      },
    },
  },
  plugins: [],
};
