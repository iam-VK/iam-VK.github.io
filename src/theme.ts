import { extendTheme, type StyleFunctionProps } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    // Black gradient-focused monochrome palette
    brand: {
      50: '#ffffff',
      100: '#fafbfc',
      200: '#f1f5f9',
      300: '#e2e8f0',
      400: '#cbd5e1',
      500: '#94a3b8',
      600: '#64748b',
      700: '#475569',
      800: '#334155',
      900: '#1e293b',
      950: '#0f172a',
      980: '#020617',
      990: '#000000',
      995: '#000000',
    },
    // Minimal accent for subtle highlights only
    accent: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
      tertiary: '#64748b',
      inverse: '#f8fafc',
      accent: '#64748b',
    },
    // Sophisticated grays with black focus
    gray: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    },
  },
  fonts: {
    heading: '"Poppins", Inter, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
    body: 'Inter, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", Monaco, "Cascadia Code", Consolas, "Courier New", monospace',
    accent: '"Crimson Text", "Times New Roman", serif',
  },
  fontWeights: {
    thin: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
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
    '6xl': 'clamp(4rem, 2.8rem + 3.1vw, 5rem)',
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
    base: '0em',   // 0px
    sm: '36em',    // 576px
    md: '48em',    // 768px
    lg: '64em',    // 1024px
    xl: '80em',    // 1280px
    '2xl': '96em', // 1536px
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      '*': {
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      'html, body': {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontFeatureSettings: '"tnum"',
        fontVariantNumeric: 'tabular-nums',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        lineHeight: 1.6,
      },
      body: {
        bg: props.colorMode === 'dark' ? 'brand.990' : 'brand.50',
        color: props.colorMode === 'dark' ? 'text.inverse' : 'text.primary',
        overflowX: 'hidden',
        position: 'relative',
        backgroundImage: `
          radial-gradient(circle at 20% 80%, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.03)' : 'rgba(234, 179, 8, 0.02)'} 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.02)' : 'rgba(234, 179, 8, 0.01)'} 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, ${props.colorMode === 'dark' ? 'rgba(15, 23, 42, 0.8)' : 'rgba(15, 23, 42, 0.1)'} 0%, transparent 50%)
        `,
        backgroundAttachment: 'fixed',
        backgroundSize: '100% 100%, 80% 80%, 60% 60%',
        backgroundPosition: '0% 0%, 100% 100%, 50% 50%',
      },
      // Animated floating particles
      '@keyframes float1': {
        '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0.1' },
        '33%': { transform: 'translate(30px, -30px) rotate(120deg)', opacity: '0.3' },
        '66%': { transform: 'translate(-20px, -60px) rotate(240deg)', opacity: '0.2' },
        '100%': { transform: 'translate(0, 0) rotate(360deg)', opacity: '0.1' },
      },
      '@keyframes float2': {
        '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.15' },
        '50%': { transform: 'translate(-40px, 40px) scale(1.2)', opacity: '0.25' },
        '100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.15' },
      },
      '@keyframes float3': {
        '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0.05' },
        '50%': { transform: 'translate(50px, 50px) rotate(180deg)', opacity: '0.2' },
        '100%': { transform: 'translate(0, 0) rotate(360deg)', opacity: '0.05' },
      },
      '@keyframes drift': {
        '0%': { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: '0.1' },
        '25%': { transform: 'translate(-30px, 20px) scale(1.1) rotate(90deg)', opacity: '0.25' },
        '50%': { transform: 'translate(40px, -40px) scale(0.9) rotate(180deg)', opacity: '0.15' },
        '75%': { transform: 'translate(-20px, 60px) scale(1.05) rotate(270deg)', opacity: '0.3' },
        '100%': { transform: 'translate(0, 0) scale(1) rotate(360deg)', opacity: '0.1' },
      },

      'body::after': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        opacity: 0.4,
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.45' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E"),
          radial-gradient(circle at 20% 20%, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.12)' : 'rgba(234, 179, 8, 0.06)'} 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.10)' : 'rgba(234, 179, 8, 0.05)'} 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, ${props.colorMode === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.15)'} 0%, transparent 50%)
        `,
        backdropFilter: props.colorMode === 'dark' ? 'blur(1px) brightness(1.1) contrast(1.1)' : 'blur(0.8px) brightness(0.98) contrast(1.05)',
      },

      // Floating geometric shapes
      'body::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        background: `
          radial-gradient(circle at 15% 15%, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.08)' : 'rgba(234, 179, 8, 0.05)'} 0%, transparent 30%),
          radial-gradient(circle at 85% 85%, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.06)' : 'rgba(234, 179, 8, 0.04)'} 0%, transparent 30%),
          radial-gradient(circle at 45% 75%, ${props.colorMode === 'dark' ? 'rgba(15, 23, 42, 0.8)' : 'rgba(15, 23, 42, 0.08)'} 0%, transparent 40%)
        `,
      },

      // Floating spheres/bokeh
      // Dramatic floating circles - highly visible bokeh effects
      '& .bg-floating-circle': {
        position: 'fixed',
        top: '10%',
        left: '10%',
        width: '280px',
        height: '280px',
        borderRadius: '50%',
        background: `radial-gradient(circle at 30% 30%, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.35)' : 'rgba(234, 179, 8, 0.20)'} 0%, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.15)' : 'rgba(234, 179, 8, 0.08)'} 40%, transparent 70%)`,
        filter: 'blur(80px)',
        animation: 'drift 25s infinite ease-in-out',
        zIndex: -1,
        opacity: 0.9,
      },

      '& .bg-floating-circle-2': {
        position: 'fixed',
        top: '60%',
        right: '15%',
        width: '240px',
        height: '240px',
        borderRadius: '50%',
        background: `radial-gradient(circle at 70% 70%, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.30)' : 'rgba(234, 179, 8, 0.18)'} 0%, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.12)' : 'rgba(234, 179, 8, 0.06)'} 50%, transparent 70%)`,
        filter: 'blur(65px)',
        animation: 'float1 30s infinite ease-in-out reverse',
        animationDelay: '8s',
        zIndex: -1,
        opacity: 0.8,
      },

      '& .bg-floating-circle-3': {
        position: 'fixed',
        bottom: '25%',
        left: '70%',
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        background: `radial-gradient(circle at 20% 80%, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.28)' : 'rgba(234, 179, 8, 0.16)'} 0%, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.10)' : 'rgba(234, 179, 8, 0.05)'} 45%, transparent 70%)`,
        filter: 'blur(90px)',
        animation: 'float2 35s infinite ease-in-out',
        animationDelay: '15s',
        zIndex: -1,
        opacity: 0.7,
      },

      '& .bg-floating-circle-4': {
        position: 'fixed',
        top: '40%',
        left: '50%',
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        background: `radial-gradient(circle at 50% 50%, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.25)' : 'rgba(234, 179, 8, 0.14)'} 0%, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.08)' : 'rgba(234, 179, 8, 0.04)'} 60%, transparent 70%)`,
        filter: 'blur(50px)',
        animation: 'drift 20s infinite ease-in-out reverse',
        animationDelay: '5s',
        zIndex: -1,
        opacity: 0.85,
      },

      // Geometric floating shapes
      '& .bg-floating-hexagon': {
        position: 'fixed',
        top: '20%',
        right: '30%',
        width: '120px',
        height: '120px',
        clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
        background: `linear-gradient(45deg, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.22)' : 'rgba(234, 179, 8, 0.12)'}, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.08)' : 'rgba(234, 179, 8, 0.04)'})`,
        filter: 'blur(30px)',
        animation: 'float3 28s infinite ease-in-out',
        animationDelay: '12s',
        zIndex: -1,
        opacity: 0.6,
      },

      '& .bg-floating-triangle': {
        position: 'fixed',
        bottom: '40%',
        right: '20%',
        width: '100px',
        height: '100px',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        background: `linear-gradient(135deg, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.25)' : 'rgba(234, 179, 8, 0.15)'}, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.06)' : 'rgba(234, 179, 8, 0.03)'})`,
        filter: 'blur(25px)',
        animation: 'drift 24s infinite ease-in-out reverse',
        animationDelay: '18s',
        zIndex: -1,
        opacity: 0.75,
      },

      '& .bg-floating-diamond': {
        position: 'fixed',
        bottom: '60%',
        left: '25%',
        width: '80px',
        height: '80px',
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        background: `linear-gradient(45deg, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.20)' : 'rgba(234, 179, 8, 0.11)'}, ${props.colorMode === 'dark' ? 'rgba(234, 179, 8, 0.05)' : 'rgba(234, 179, 8, 0.02)'})`,
        filter: 'blur(20px)',
        animation: 'float1 22s infinite ease-in-out',
        animationDelay: '3s',
        zIndex: -1,
        opacity: 0.8,
      },
      '::selection': {
        bg: props.colorMode === 'dark' ? 'accent.700' : 'accent.200',
        color: props.colorMode === 'dark' ? 'text.inverse' : 'text.primary',
        textShadow: props.colorMode === 'dark'
          ? '0 1px 2px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.5)'
          : '0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(15, 23, 42, 0.15), 0 4px 8px rgba(15, 23, 42, 0.1)',
        filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1))',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    }),
  },
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  components: {
    Container: {
      baseStyle: (props: StyleFunctionProps) => ({
        maxW: 'container.xl',
        px: { base: 4, sm: 6, md: 8, lg: 12 },
      }),
    },
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 'semibold',
        letterSpacing: '-0.025em',
        lineHeight: 'heading',
        color: 'text.primary',
      },
      sizes: {
        '4xl': {
          fontSize: { base: '2.5rem', md: '3rem', lg: '4rem' },
          lineHeight: '0.875',
          fontWeight: 'bold',
        },
        '3xl': {
          fontSize: { base: '2rem', md: '2.5rem', lg: '3rem' },
          lineHeight: '1',
          fontWeight: 'bold',
        },
        '2xl': {
          fontSize: { base: '1.75rem', md: '2rem', lg: '2.5rem' },
          lineHeight: '1.1',
          fontWeight: 'bold',
        },
        xl: {
          fontSize: { base: '1.5rem', md: '1.75rem', lg: '2rem' },
          lineHeight: '1.2',
          fontWeight: 'semibold',
        },
        lg: {
          fontSize: { base: '1.25rem', md: '1.5rem' },
          lineHeight: '1.25',
          fontWeight: 'semibold',
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
      baseStyle: (props: StyleFunctionProps) => ({
        fontWeight: 'medium',
        borderRadius: 'xl',
        fontFamily: 'heading',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.800',
        color: props.colorMode === 'dark' ? 'text.inverse' : 'white',
        _hover: {
          bg: props.colorMode === 'dark' ? 'gray.600' : 'gray.900',
          transform: 'translateY(-1px)',
          boxShadow: props.colorMode === 'dark' ? '0 4px 6px rgba(0,0,0,0.3)' : 'md',
        },
      }),
      sizes: {
        lg: {
          px: 8,
          py: 4,
          minH: 14,
          fontSize: 'lg',
          fontWeight: 'semibold',
        },
        md: {
          px: 6,
          py: 3,
          minH: 12,
          fontSize: 'md',
        },
      },
      variants: {
        solid: {
          bg: 'accent.600',
          color: 'white',
          _hover: {
            bg: 'accent.700',
            transform: 'translateY(-1px)',
            boxShadow: 'md',
          },
        },
        outline: (props: StyleFunctionProps) => ({
          border: '1px solid',
          borderColor: props.colorMode === 'dark' ? 'gray.600' : 'gray.400',
          color: props.colorMode === 'dark' ? 'text.inverse' : 'text.primary',
          bg: 'transparent',
          _hover: {
            bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.100',
            borderColor: 'accent.600',
            transform: 'translateY(-1px)',
          },
        }),
        ghost: (props: StyleFunctionProps) => ({
          bg: 'transparent',
          color: props.colorMode === 'dark' ? 'text.inverse' : 'text.secondary',
          _hover: {
            bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.100',
          },
        }),
      },
    },
    Badge: {
      baseStyle: (props: StyleFunctionProps) => ({
        borderRadius: 'full',
        fontWeight: 'medium',
        px: 3,
        py: 1,
        bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.200',
        color: props.colorMode === 'dark' ? 'text.inverse' : 'text.primary',
        fontSize: 'xs',
      }),
      variants: {
        accent: {
          bg: 'accent.600',
          color: 'white',
        },
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
  },
});

export default theme;