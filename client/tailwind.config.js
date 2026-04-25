/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Makes Inter the default font globally
      },
      colors: {
        // Backgrounds
        primary: '#0B1120',      // Deep Navy Hero/Nav
        background: '#F8FAFF',   // Tech tinted white
        surface: '#FFFFFF',      // Card white
        
        // Brand Blues
        secondary: '#2563EB',    // Primary Blue
        secondaryHover: '#1D4ED8', 
        
        // Text Colors
        textMain: '#0F172A',     // Light sections headings
        textBody: '#475569',     // Paragraphs
        textMuted: '#94A3B8',    // Dates, locations, subtext
        
        // Accents
        success: '#16A34A',      // Express Interest
        whatsapp: '#25D366',
        
        // Borders & Tags
        borderLight: '#E2E8F0',
        tagBg: '#EFF6FF',
        tagBorder: '#BFDBFE'
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.10)',
        'btn': '0 4px 12px rgba(37, 99, 235, 0.3)',
      }
    },
  },
  plugins: [],
}