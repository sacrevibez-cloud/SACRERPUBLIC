module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF006E',
        secondary: '#00D9FF',
        accent: '#FFD60A',
        dark: '#1a1a2e',
      },
      animation: {
        'pulse-glow': 'pulse 1s infinite',
        'slide-in': 'slide-in 0.5s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
};