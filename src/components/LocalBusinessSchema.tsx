import { contact } from '@/data/contact'
import { serviceAreas } from '@/data/service-areas'

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: 'Maple Ridge Construction & Development',
    description: 'Licensed General Contractor serving Southeast Tennessee. New construction homes, complete home remodels, and land development.',
    url: contact.url,
    telephone: contact.phoneRaw,
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.region,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contact.geo.latitude,
      longitude: contact.geo.longitude,
    },
    areaServed: serviceAreas.map((area) => ({
      '@type': 'City',
      name: area.name,
      addressRegion: 'TN',
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [...contact.hoursStructured.days],
        opens: contact.hoursStructured.opens,
        closes: contact.hoursStructured.closes,
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
