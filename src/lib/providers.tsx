'use client';

import { PrimeReactProvider } from 'primereact/api';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <PrimeReactProvider
      value={{
        pt: {
          // Custom theme options for yoga vibe
          card: {
            root: {
              className: 'yoga-card',
            },
          },
          button: {
            root: {
              className: 'transition-all duration-300',
            },
          },
          carousel: {
            root: {
              className: 'custom-carousel',
            },
          },
        },
        ripple: true,
        inputStyle: 'filled',
        zIndex: {
          modal: 1100,
          overlay: 1000,
          menu: 1000,
          tooltip: 1100,
          toast: 1200,
        },
      }}
    >
      {children}
    </PrimeReactProvider>
  );
}
