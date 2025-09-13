const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config; 

const noFunciona={
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },

  plugins: {
    tailwindcss: {},
  },
};