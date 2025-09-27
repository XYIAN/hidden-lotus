// Styled-components theme configuration
export const theme = {
  colors: {
    // Primary colors
    background: '#f6d6a2',
    foreground: '#2d3748',
    sageGreen: '#6b8e5a',
    brownGold: '#d69e2e',
    pastelPink: '#fbb6ce',
    lightTan: '#f1e2bb',
    primaryGreen: '#4a7c59',
    secondaryBrown: '#a95a35',
    earthBrown: '#8b7355',
    softSage: '#8baa7a',
    oliveGreen: '#9caa7a',
    
    // Sage green variations
    sageGreen200: '#c8d5b9',
    sageGreen300: '#a8c095',
    sageGreen400: '#8baa7a',
    sageGreen600: '#6b8e5a',
    
    // Additional colors
    tan: '#d2b48c',
    brown: '#904b19',
    yellowGold: '#ffd700',
    
    // Semantic colors
    white: '#ffffff',
    black: '#000000',
    success: '#4a7c59',
    warning: '#d69e2e',
    error: '#dc2626',
    info: '#3b82f6',
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '50%',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
  
  breakpoints: {
    mobile: '768px',
    tablet: '975px',
    desktop: '1024px',
    wide: '1200px',
  },
  
  typography: {
    fontFamily: {
      sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.6,
    },
  },
  
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
} as const

export type Theme = typeof theme
