export const contact = {
  phone: '(423) 506-2380',
  phoneHref: 'tel:+14235062380',
  phoneRaw: '+1-423-506-2380',
  email: 'zack@mapleridgedev.com',
  emailHref: 'mailto:zack@mapleridgedev.com',
  address: {
    street: '138 County Road 502',
    locality: 'Etowah',
    region: 'TN',
    regionFull: 'Tennessee',
    postalCode: '37331',
    country: 'US',
    full: '138 County Road 502, Etowah, TN 37331',
  },
  hours: 'Mon–Fri: 8AM – 5PM',
  hoursShort: '8AM–5PM',
  hoursStructured: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const,
    opens: '08:00',
    closes: '17:00',
  },
  googleBusinessUrl: 'https://share.google/nQlj2SOz2xrKhZWZv',
  // Page is titled "Maple Ridge Construction and Development | Etowah TN" — confirm with Zack it's his
  facebookUrl: 'https://www.facebook.com/caltenncustoms/',
  url: 'https://www.mapleridgedev.com',
  owner: 'Zack Newman',
} as const
