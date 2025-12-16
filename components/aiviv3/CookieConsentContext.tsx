'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ConsentStatus = 'accepted' | 'rejected' | null;

interface CookieConsentContextType {
  consent: ConsentStatus;
  acceptCookies: () => void;
  rejectCookies: () => void;
  openPreferences: () => void;
  hasConsent: boolean;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const STORAGE_KEY = 'aivi_cookie_consent';

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentStatus>(null);
  const [isClient, setIsClient] = useState(false);

  // Load consent from localStorage on mount
  useEffect(() => {
    setIsClient(true);

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        setConsent(data.accepted ? 'accepted' : 'rejected');
      }
    } catch (error) {
      console.error('Failed to load cookie consent from localStorage:', error);
    }
  }, []);

  const acceptCookies = () => {
    const consentData = {
      accepted: true,
      timestamp: Date.now(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData));
      setConsent('accepted');
    } catch (error) {
      console.error('Failed to save cookie consent to localStorage:', error);
      // Still update state even if localStorage fails
      setConsent('accepted');
    }
  };

  const rejectCookies = () => {
    const consentData = {
      accepted: false,
      timestamp: Date.now(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData));
      setConsent('rejected');
    } catch (error) {
      console.error('Failed to save cookie consent to localStorage:', error);
      // Still update state even if localStorage fails
      setConsent('rejected');
    }
  };

  const openPreferences = () => {
    // Navigate to privacy page
    window.location.href = '/privacy';
  };

  const hasConsent = consent === 'accepted';

  return (
    <CookieConsentContext.Provider
      value={{
        consent: isClient ? consent : null,
        acceptCookies,
        rejectCookies,
        openPreferences,
        hasConsent,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
