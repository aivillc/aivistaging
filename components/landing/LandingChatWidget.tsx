'use client';

import { useEffect } from 'react';

interface Props {
  embedKey: string;
}

/**
 * Embeds the AIVI crm_chat-widget via the loader.js script.
 * This is the same widget used on customer websites — production-ready
 * with A2P compliance, rate limiting, and automatic contact creation.
 */
export default function LandingChatWidget({ embedKey }: Props) {
  useEffect(() => {
    // Check if widget is already loaded
    if (document.querySelector('script[data-widget-key]')) return;

    const script = document.createElement('script');
    script.src = 'https://app.aivi.io/widget/loader.js';
    script.dataset.widgetKey = embedKey;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      script.remove();
      // Remove the widget iframe and bubble if present
      const bubble = document.getElementById('aivi-widget-bubble');
      const iframe = document.getElementById('aivi-widget-iframe');
      bubble?.remove();
      iframe?.remove();
    };
  }, [embedKey]);

  return null;
}
