import type {Config} from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      fontFamily: {
        "sans": ["Figtree", 'sans-serif']
      },
      colors: {
        background: "hsl(var(--background))",
        app: {
          DEFAULT: "#162031",
          foreground: "#0F1729",
        },
        'main': {
          DEFAULT: '#007EFC',
          50: '#8CC5FF',
          100: '#77BBFF',
          200: '#4FA7FF',
          300: '#2692FF',
          400: '#007EFC',
          500: '#0062C4',
          600: '#00468C',
          700: '#002A54',
          800: '#000E1C',
          900: '#000000',
          950: '#000000'
        },

      },
      screens: {
        xs: "450px",
      }
    }
  },
  content: [
    'docs/content/**/*.md'
  ]
}
