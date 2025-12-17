'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LeadGateContextType {
  isUnlocked: boolean;
  unlockGate: () => void;
}

const LeadGateContext = createContext<LeadGateContextType | undefined>(undefined);

export function LeadGateProvider({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Persist unlock state in localStorage
  useEffect(() => {
    const stored = localStorage.getItem('aivi_lead_gate_unlocked');
    if (stored === 'true') setIsUnlocked(true);
  }, []);

  const unlockGate = () => {
    setIsUnlocked(true);
    localStorage.setItem('aivi_lead_gate_unlocked', 'true');
  };

  return (
    <LeadGateContext.Provider value={{ isUnlocked, unlockGate }}>
      {children}
    </LeadGateContext.Provider>
  );
}

export function useLeadGate() {
  const context = useContext(LeadGateContext);
  if (!context) {
    throw new Error('useLeadGate must be used within LeadGateProvider');
  }
  return context;
}

export function useLeadGateSafe() {
  return useContext(LeadGateContext);
}
