declare global {
  interface Window {
    dataLayer: any[];
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: {
        send_to?: string;
        value?: number;
        currency?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

export {};