'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type FAQStyle = 'constellation' | 'timeline' | 'carousel' | 'search' | 'accordion';

interface FAQStyleContextType {
  style: FAQStyle;
  setStyle: (style: FAQStyle) => void;
}

const FAQStyleContext = createContext<FAQStyleContextType | undefined>(undefined);

export function FAQStyleProvider({ children }: { children: ReactNode }) {
  const [style, setStyle] = useState<FAQStyle>('constellation');

  // Check for URL parameter or localStorage on mount
  useEffect(() => {
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const faqStyleParam = urlParams.get('faqStyle') as FAQStyle;

    const validStyles: FAQStyle[] = ['constellation', 'timeline', 'carousel', 'search', 'accordion'];

    if (faqStyleParam && validStyles.includes(faqStyleParam)) {
      setStyle(faqStyleParam);
      // Save to localStorage
      localStorage.setItem('aivi-faq-style', faqStyleParam);
    } else {
      // Fall back to localStorage
      const savedStyle = localStorage.getItem('aivi-faq-style') as FAQStyle;
      if (savedStyle && validStyles.includes(savedStyle)) {
        setStyle(savedStyle);
      }
    }
  }, []);

  return (
    <FAQStyleContext.Provider value={{ style, setStyle }}>
      {children}
    </FAQStyleContext.Provider>
  );
}

export function useFAQStyle() {
  const context = useContext(FAQStyleContext);
  if (context === undefined) {
    throw new Error('useFAQStyle must be used within a FAQStyleProvider');
  }
  return context;
}
