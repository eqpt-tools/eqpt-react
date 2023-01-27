export const currencies = [
  'USD',
  'AUD',
  'CAD',
  'EUR',
  'GBP',
  'HKD',
  'JPY',
  'KRW',
  'SGD',
] as const;

export type Currency = typeof currencies[number];
