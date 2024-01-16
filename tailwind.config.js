/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'sm': '4px',
        'md': '8px'
      },
      colors: {
        'gray-50': '#F9FAFB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-300': '#D1D5DB',
        'gray-500': '#6B7280',
        'gray-600': '#4B5563',
        'gray-900': '#111928'
      },
      fontFamily: {
        inter: ['Inter']
      },
    },
  },
  plugins: [],
}

