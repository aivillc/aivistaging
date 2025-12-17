'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type ROIButtonStyle = 'A' | 'B' | 'C' | 'D';

interface ROIButtonStyleContextType {
  style: ROIButtonStyle;
  setStyle: (style: ROIButtonStyle) => void;
}

const ROIButtonStyleContext = createContext<ROIButtonStyleContextType | undefined>(undefined);

export function ROIButtonStyleProvider({ children }: { children: ReactNode }) {
  const [style, setStyle] = useState<ROIButtonStyle>('D');

  return (
    <ROIButtonStyleContext.Provider value={{ style, setStyle }}>
      {children}
    </ROIButtonStyleContext.Provider>
  );
}

export function useROIButtonStyle() {
  const context = useContext(ROIButtonStyleContext);
  if (context === undefined) {
    throw new Error('useROIButtonStyle must be used within a ROIButtonStyleProvider');
  }
  return context;
}
