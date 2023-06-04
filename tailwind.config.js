/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        }
      },
      fontFamily: {
        Poppins: ["Inter", "sans-serif"]
      },
      animation: {
        pulse2: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 5) infinite',
        wave: 'wave 2s linear infinite'
      }
    },
  },
  plugins: [],
}

