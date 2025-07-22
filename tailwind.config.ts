import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal - Verdes orgánicos
        nyanza: {
          DEFAULT: '#e9f5db',
          100: '#304914',
          200: '#609228',
          300: '#90cd49',
          400: '#bce192',
          500: '#e9f5db',
          600: '#edf7e2',
          700: '#f2f9e9',
          800: '#f6fbf1',
          900: '#fbfdf8'
        },
        tea_green: {
          DEFAULT: '#cedbbf',
          100: '#2a341d',
          200: '#53683b',
          300: '#7d9d58',
          400: '#a5bd89',
          500: '#cedbbf',
          600: '#d7e2cb',
          700: '#e1e9d8',
          800: '#ebf0e5',
          900: '#f5f8f2'
        },
        sage: {
          DEFAULT: '#b3c1a2',
          100: '#242b1d',
          200: '#495639',
          300: '#6d8156',
          400: '#91a578',
          500: '#b3c1a2',
          600: '#c3ceb6',
          700: '#d2dac8',
          800: '#e1e7da',
          900: '#f0f3ed'
        },
        sage_alt: {
          DEFAULT: '#a2ae92',
          100: '#21251b',
          200: '#424a37',
          300: '#626f52',
          400: '#83936e',
          500: '#a2ae92',
          600: '#b5bfa8',
          700: '#c8cfbe',
          800: '#dadfd4',
          900: '#edefe9'
        },
        moss_green: {
          DEFAULT: '#909b82',
          100: '#1d2019',
          200: '#3a3f33',
          300: '#575f4c',
          400: '#747f66',
          500: '#909b82',
          600: '#a7af9b',
          700: '#bdc3b4',
          800: '#d3d7cd',
          900: '#e9ebe6'
        },
        moss_green_alt: {
          DEFAULT: '#94a27f',
          100: '#1e2218',
          200: '#3c4331',
          300: '#5a6549',
          400: '#788762',
          500: '#94a27f',
          600: '#aab599',
          700: '#bfc8b3',
          800: '#d5dacc',
          900: '#eaede6'
        },
        moss_green_alt2: {
          DEFAULT: '#8e9d75',
          100: '#1d2017',
          200: '#39402e',
          300: '#566145',
          400: '#73815b',
          500: '#8e9d75',
          600: '#a5b191',
          700: '#bbc5ad',
          800: '#d2d8c8',
          900: '#e8ece4'
        },
        moss_green_alt3: {
          DEFAULT: '#87986a',
          100: '#1b1f15',
          200: '#373d2b',
          300: '#525c40',
          400: '#6d7b55',
          500: '#87986a',
          600: '#a0ad89',
          700: '#b8c2a7',
          800: '#cfd6c4',
          900: '#e7ebe2'
        },
        moss_green_alt4: {
          DEFAULT: '#7c8e60',
          100: '#191d13',
          200: '#323927',
          300: '#4b563a',
          400: '#64724e',
          500: '#7c8e60',
          600: '#98a77e',
          700: '#b2bd9f',
          800: '#cbd3bf',
          900: '#e5e9df'
        },
        reseda_green: {
          DEFAULT: '#718355',
          100: '#161a11',
          200: '#2d3422',
          300: '#434e33',
          400: '#5a6844',
          500: '#718355',
          600: '#8ea270',
          700: '#abb994',
          800: '#c7d0b7',
          900: '#e3e8db'
        },
        // Paleta de contraste - Beavers/Tierras
        beaver: {
          DEFAULT: '#a8836d',
          100: '#221a15',
          200: '#453329',
          300: '#674d3e',
          400: '#8a6753',
          500: '#a8836d',
          600: '#b99b8a',
          700: '#cab4a7',
          800: '#dccdc4',
          900: '#ede6e2'
        },
        beaver_alt: {
          DEFAULT: '#ab8773',
          100: '#241a15',
          200: '#47352b',
          300: '#6b4f40',
          400: '#8f6a56',
          500: '#ab8773',
          600: '#bc9f8f',
          700: '#cdb7ab',
          800: '#ddcfc7',
          900: '#eee7e3'
        },
        beaver_alt2: {
          DEFAULT: '#ae8b77',
          100: '#241b16',
          200: '#49362c',
          300: '#6d5141',
          400: '#916d57',
          500: '#ae8b77',
          600: '#bda191',
          700: '#ceb9ad',
          800: '#ded0c8',
          900: '#efe8e4'
        },
        beaver_alt3: {
          DEFAULT: '#b18f7c',
          100: '#261c17',
          200: '#4b382d',
          300: '#715444',
          400: '#96705a',
          500: '#b18f7c',
          600: '#c0a696',
          700: '#d0bcb1',
          800: '#e0d2cb',
          900: '#efe9e5'
        },
        beaver_alt4: {
          DEFAULT: '#b2917e',
          100: '#261d17',
          200: '#4d392e',
          300: '#735645',
          400: '#99725c',
          500: '#b2917e',
          600: '#c2a899',
          700: '#d1beb3',
          800: '#e0d3cc',
          900: '#f0e9e6'
        },
        beaver_alt5: {
          DEFAULT: '#b3927f',
          100: '#261d17',
          200: '#4d392e',
          300: '#735645',
          400: '#99725c',
          500: '#b3927f',
          600: '#c2a899',
          700: '#d1beb3',
          800: '#e0d3cc',
          900: '#f0e9e6'
        },
        beaver_alt6: {
          DEFAULT: '#b59582',
          100: '#271d17',
          200: '#4e3a2e',
          300: '#765745',
          400: '#9d745c',
          500: '#b59582',
          600: '#c4aa9b',
          700: '#d3bfb4',
          800: '#e2d4cd',
          900: '#f0eae6'
        },
        beaver_alt7: {
          DEFAULT: '#b69785',
          100: '#281e18',
          200: '#4f3b2f',
          300: '#775947',
          400: '#9e765f',
          500: '#b69785',
          600: '#c5ac9e',
          700: '#d3c1b6',
          800: '#e2d6cf',
          900: '#f0eae7'
        },
        beaver_alt8: {
          DEFAULT: '#b99b89',
          100: '#281e18',
          200: '#513c30',
          300: '#795a47',
          400: '#a17860',
          500: '#b99b89',
          600: '#c7aea0',
          700: '#d5c2b8',
          800: '#e3d7cf',
          900: '#f1ebe7'
        },
        warm_white: {
          DEFAULT: '#fefcfb',
          100: '#512814',
          200: '#a25128',
          300: '#d68359',
          400: '#eabfaa',
          500: '#fefcfb',
          600: '#fefdfc',
          700: '#fefdfd',
          800: '#fffefd',
          900: '#fffefe'
        },
        // Keep existing colors for compatibility
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Consolas", "monospace"],
      },
      translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      }
    },
  },
  plugins: [],
};

export default config; 