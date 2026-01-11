export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: 'Maple Ridge Construction & Development',
    description: 'Licensed General Contractor serving Southeast Tennessee. Specializing in new construction homes, complete home remodels, and land development.',
    url: 'https://mapleridgeconstruction.com',
    telephone: '+1-423-555-1234',
    email: 'info@mapleridgeconstruction.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Etowah',
      addressRegion: 'TN',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.3237,
      longitude: -84.5252,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Etowah',
        addressRegion: 'TN',
      },
      {
        '@type': 'City',
        name: 'Athens',
        addressRegion: 'TN',
      },
      {
        '@type': 'City',
        name: 'Cleveland',
        addressRegion: 'TN',
      },
      {
        '@type': 'City',
        name: 'Benton',
        addressRegion: 'TN',
      },
      {
        '@type': 'City',
        name: 'Madisonville',
        addressRegion: 'TN',
      },
      {
        '@type': 'City',
        name: 'Tellico Plains',
        addressRegion: 'TN',
      },
      {
        '@type': 'City',
        name: 'Sweetwater',
        addressRegion: 'TN',
      },
      {
        '@type': 'City',
        name: 'Englewood',
        addressRegion: 'TN',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Check',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'New Home Construction',
            description: 'Custom home building from foundation to finishing touches.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Remodeling',
            description: 'Kitchen renovations, bathroom remodels, room additions, and whole-home renovations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Land Development',
            description: 'Site clearing, grading, utility installation, and driveway construction.',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
