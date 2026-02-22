export const designTokens = {
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem'
  },
  radius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem'
  },
  typography: {
    display: 'clamp(2rem, 4vw, 4rem)',
    heading: 'clamp(1.5rem, 2.4vw, 2.5rem)',
    body: '1rem'
  },
  colors: {
    brandFrom: '#06b6d4',
    brandTo: '#4f46e5',
    accent: '#14b8a6'
  }
} as const;
