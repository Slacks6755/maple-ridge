export const contact = {
  phone: '(423) 506-2380',
  phoneHref: 'tel:+14235062380',
  phoneRaw: '+1-423-506-2380',
  email: 'zack@mapleridgedev.com',
  emailHref: 'mailto:zack@mapleridgedev.com',
  address: {
    street: '632 County Road 875',
    locality: 'Etowah',
    region: 'TN',
    regionFull: 'Tennessee',
    postalCode: '37331',
    country: 'US',
    full: '632 County Road 875, Etowah, TN 37331',
  },
  hours: 'Mon–Fri: 8AM – 5PM',
  hoursShort: '8AM–5PM',
  hoursStructured: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const,
    opens: '08:00',
    closes: '17:00',
  },
  geo: {
    latitude: 35.3237,
    longitude: -84.5252,
  },
  url: 'https://www.mapleridgedev.com',
  owner: 'Zack Newman',
} as const
