/// <reference types="astro/client" />

type PlausibleOptions = {
  props?: Record<string, string | number | boolean | null>;

  revenue?: {
    currency: string;

    amount: number;
  };

  callback?: () => void;
};

interface PlausibleFn {
  (eventName: string, options?: PlausibleOptions): void;

  q?: IArguments[];
}

interface Window {
  plausible: PlausibleFn;
}
