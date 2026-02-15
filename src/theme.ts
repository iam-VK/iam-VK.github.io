import { extendTheme, type StyleFunctionProps } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#fafafa',    // Clean near-white
      100: '#f5f5f4',   // Subtle warm gray
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
      950: '#121110',
      980: '#0a0a09',
      990: '#050504',
    },
    // Arc-style vibrant electric blue
    accent: {
      50: '#eef8ff',
      100: '#d8efff',
      200: '#b9e3ff',
      300: '#89d3ff',
      400: '#51b8ff',
      500: '#2898ff',
      600: '#1177ff',
      700: '#0a5fef',
      800: '#0f4cc1',
      900: '#134498',
    },
    // Warm violet for secondary accents
    violet: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
    // Arc warm orange for highlights
    warm: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    // Emerald for success
    emerald: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },
    text: {
      primary: '#1c1917',
      secondary: '#57534e',
      tertiary: '#a8a29e',
      inverse: '#fafafa',
      muted: 'rgba(250, 250, 250, 0.6)',
    },
  },
  fonts: {
    heading: '"Playfair Display", "Georgia", "Times New Roman", serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
    mono: '"JetBrains Mono", "SF Mono", Monaco, Consolas, monospace',
  },
  fontWeights: {
    thin: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fontSizes: {
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
    sm: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
    md: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
    lg: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
    xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
    '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',
    '3xl': 'clamp(1.875rem, 1.5rem + 1.375vw, 2.25rem)',
    '4xl': 'clamp(2.25rem, 1.8rem + 1.75vw, 3rem)',
    '5xl': 'clamp(3rem, 2.2rem + 2.25vw, 4rem)',
    '6xl': 'clamp(4rem, 2.8rem + 3.1vw, 5.5rem)',
    '7xl': 'clamp(5rem, 3.5rem + 4vw, 7rem)',
  },
  radii: {
    none: '0',
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px',
  },
  space: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },
  sizes: {
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  breakpoints: {
    base: '0em',
    sm: '36em',
    md: '48em',
    lg: '64em',
    xl: '80em',
    '2xl': '96em',
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      '*': {
        transition: 'color 0.2s ease, background-color 0.3s ease, border-color 0.2s ease, box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      'html, body': {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        lineHeight: 1.6,
      },
      body: {
        bg: props.colorMode === 'dark' ? 'brand.950' : 'brand.50',
        color: props.colorMode === 'dark' ? 'text.inverse' : 'text.primary',
        overflowX: 'hidden',
        position: 'relative',
      },

      // Noise texture overlay – the Arc signature look
      'body::after': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: props.colorMode === 'dark' ? 0.04 : 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      },

      '::selection': {
        bg: props.colorMode === 'dark' ? 'accent.700' : 'accent.200',
        color: props.colorMode === 'dark' ? 'white' : 'text.primary',
      },
    }),
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  components: {
    Container: {
      baseStyle: {
        maxW: 'container.xl',
        px: { base: 5, sm: 6, md: 8, lg: 12 },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 'bold',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
      },
      sizes: {
        '4xl': {
          fontSize: { base: '3rem', md: '4rem', lg: '5.5rem' },
          lineHeight: 0.95,
          fontWeight: 'black',
          letterSpacing: '-0.03em',
        },
        '3xl': {
          fontSize: { base: '2rem', md: '2.75rem', lg: '3.5rem' },
          lineHeight: 1,
          fontWeight: 'bold',
        },
        '2xl': {
          fontSize: { base: '1.75rem', md: '2.25rem', lg: '2.75rem' },
          lineHeight: 1.1,
        },
        xl: {
          fontSize: { base: '1.5rem', md: '1.75rem', lg: '2rem' },
          lineHeight: 1.2,
        },
        lg: {
          fontSize: { base: '1.25rem', md: '1.5rem' },
          lineHeight: 1.25,
        },
      },
    },
    Text: {
      baseStyle: (props: StyleFunctionProps) => ({
        fontSize: 'md',
        lineHeight: 'tall',
        color: props.colorMode === 'dark' ? 'text.inverse' : 'text.secondary',
      }),
    },
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'full',
        fontFamily: 'body',
        letterSpacing: '-0.01em',
      },
      sizes: {
        lg: {
          px: 10,
          py: 4,
          minH: 14,
          fontSize: 'md',
        },
        md: {
          px: 7,
          py: 3,
          minH: 12,
          fontSize: 'sm',
        },
        sm: {
          px: 5,
          py: 2,
          minH: 9,
          fontSize: 'xs',
        },
      },
      variants: {
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'dark' ? 'white' : 'brand.900',
          color: props.colorMode === 'dark' ? 'brand.900' : 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.200' : 'brand.800',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        }),
        outline: (props: StyleFunctionProps) => ({
          border: '2px solid',
          borderColor: props.colorMode === 'dark' ? 'whiteAlpha.300' : 'brand.300',
          color: props.colorMode === 'dark' ? 'text.inverse' : 'text.primary',
          bg: 'transparent',
          _hover: {
            bg: props.colorMode === 'dark' ? 'whiteAlpha.100' : 'brand.100',
            borderColor: props.colorMode === 'dark' ? 'whiteAlpha.500' : 'brand.500',
            transform: 'translateY(-2px)',
          },
        }),
        ghost: (props: StyleFunctionProps) => ({
          bg: 'transparent',
          color: props.colorMode === 'dark' ? 'text.inverse' : 'text.secondary',
          _hover: {
            bg: props.colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.50',
          },
        }),
        accent: {
          bg: 'accent.600',
          color: 'white',
          _hover: {
            bg: 'accent.700',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(17, 119, 255, 0.3)',
          },
        },
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: 'full',
        fontWeight: 'medium',
        fontFamily: 'body',
        px: 3,
        py: 1,
        fontSize: 'xs',
        textTransform: 'none',
      },
    },
    Link: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: props.colorMode === 'dark' ? 'accent.400' : 'accent.600',
        _hover: {
          color: props.colorMode === 'dark' ? 'accent.300' : 'accent.700',
          textDecoration: 'none',
        },
      }),
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'accent.500',
      },
      variants: {
        outline: (props: StyleFunctionProps) => ({
          field: {
            borderRadius: 'xl',
            borderColor: props.colorMode === 'dark' ? 'whiteAlpha.200' : 'brand.300',
            bg: props.colorMode === 'dark' ? 'whiteAlpha.50' : 'white',
            _hover: { borderColor: props.colorMode === 'dark' ? 'whiteAlpha.400' : 'brand.400' },
          },
        }),
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: 'accent.500',
      },
      variants: {
        outline: (props: StyleFunctionProps) => ({
          borderRadius: 'xl',
          borderColor: props.colorMode === 'dark' ? 'whiteAlpha.200' : 'brand.300',
          bg: props.colorMode === 'dark' ? 'whiteAlpha.50' : 'white',
          _hover: { borderColor: props.colorMode === 'dark' ? 'whiteAlpha.400' : 'brand.400' },
        }),
      },
    },
  },
});

export default theme;