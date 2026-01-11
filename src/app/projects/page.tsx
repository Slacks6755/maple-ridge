import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, MapPin, Home, Hammer, TreePine } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Projects | Portfolio | Maple Ridge Construction',
  description: 'View our portfolio of completed construction projects in Southeast Tennessee. Custom homes, renovations, and land development in McMinn, Bradley, Polk, and Monroe Counties.',
  keywords: [
    'construction projects Tennessee',
    'home builder portfolio',
    'custom home gallery',
    'renovation projects Southeast TN',
    'construction company work samples',
  ],
}

const projects = [
  {
    title: 'Modern Farmhouse',
    location: 'Athens, TN',
    category: 'New Construction',
    icon: Home,
    description: 'A 2,800 sq ft custom home featuring open floor plan, vaulted ceilings, and a wrap-around porch. Built on a 3-acre lot with mountain views.',
    features: ['4 bedrooms', '3 bathrooms', 'Open concept', 'Energy efficient'],
  },
  {
    title: 'Historic Home Renovation',
    location: 'Etowah, TN',
    category: 'Remodeling',
    icon: Hammer,
    description: 'Complete renovation of a 1920s craftsman home. Updated electrical, plumbing, and HVAC while preserving original character.',
    features: ['Full restoration', 'Modern systems', 'Period details', 'Kitchen update'],
  },
  {
    title: 'Riverside Property Development',
    location: 'Tellico Plains, TN',
    category: 'Land Development',
    icon: TreePine,
    description: '5-acre lot development along the Tellico River. Site clearing, driveway construction, utilities, and build pad preparation.',
    features: ['Site clearing', 'Gravel driveway', 'Septic system', 'Well installation'],
  },
  {
    title: 'Kitchen & Bath Remodel',
    location: 'Cleveland, TN',
    category: 'Remodeling',
    icon: Hammer,
    description: 'Complete kitchen renovation with custom cabinets and quartz countertops, plus master bath update with walk-in shower.',
    features: ['Custom cabinets', 'Quartz counters', 'Walk-in shower', 'New flooring'],
  },
  {
    title: 'Mountain Cabin Build',
    location: 'Benton, TN',
    category: 'New Construction',
    icon: Home,
    description: '1,600 sq ft cabin on a challenging hillside lot. Timber frame construction with stunning views of the Cherokee National Forest.',
    features: ['Timber frame', 'Hillside build', 'Custom design', 'Off-grid ready'],
  },
  {
    title: 'Multi-Lot Development',
    location: 'Madisonville, TN',
    category: 'Land Development',
    icon: TreePine,
    description: 'Development of 12-acre parcel into 4 build-ready residential lots with shared driveway and utilities.',
    features: ['4 lots', 'Road construction', 'Utility routing', 'Drainage design'],
  },
]

const categories = [
  { name: 'All Projects', value: 'all' },
  { name: 'New Construction', value: 'new-construction' },
  { name: 'Remodeling', value: 'remodeling' },
  { name: 'Land Development', value: 'land-development' },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-stone-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-ridge-500" />

        <div className="container-wide section-padding relative">
          <div className="max-w-3xl">
            <span className="inline-block text-ridge-400 font-medium text-sm uppercase tracking-wider mb-4">
              Our Work
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Projects Across Southeast Tennessee
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Browse examples of our work in custom home construction, renovations, and land
              development throughout McMinn, Bradley, Polk, and Monroe Counties.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container-wide section-padding">
          {/* Filter tabs - for visual purposes, functionality would need JS */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat, index) => (
              <button
                key={cat.value}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-ridge-600 text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card-hover overflow-hidden">
                {/* Placeholder image area */}
                <div className="aspect-[4/3] bg-ridge-100 relative flex items-center justify-center">
                  <project.icon className="h-16 w-16 text-ridge-300" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-ridge-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-stone-500 mb-2">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-stone-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-block bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note about more projects */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-earth-100 rounded-xl p-8 max-w-2xl">
              <h3 className="font-display text-xl font-semibold text-stone-900 mb-3">
                More Projects in Progress
              </h3>
              <p className="text-stone-600 mb-6">
                We&apos;re always working on new builds and renovations across Southeast Tennessee.
                Contact us to discuss your project and see additional examples of our work.
              </p>
              <Link href="/contact" className="btn-primary">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="h-12 w-12 text-ridge-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-2xl text-stone-700 leading-relaxed mb-6 font-display">
              &ldquo;From the first meeting to move-in day, Maple Ridge exceeded every expectation.
              They built our forever home with care and craftsmanship that&apos;s rare to find.&rdquo;
            </blockquote>
            <div>
              <div className="font-semibold text-stone-900">The Thompson Family</div>
              <div className="text-stone-500">Custom Home Build • Athens, TN</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-ridge-700 text-white">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Your Project Could Be Next
            </h2>
            <p className="text-xl text-ridge-200 mb-10">
              Ready to start planning your new home, renovation, or land development project?
              We&apos;d love to hear about your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-ridge-700 hover:bg-earth-50">
                Request Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="tel:+14235551234" className="btn bg-ridge-600 text-white hover:bg-ridge-500 border border-ridge-500">
                <Phone className="mr-2 h-5 w-5" />
                (423) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
