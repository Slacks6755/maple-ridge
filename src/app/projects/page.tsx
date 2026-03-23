import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Home, Hammer, TreePine, MapPin } from 'lucide-react'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Construction projects by Maple Ridge Construction in Southeast Tennessee. Custom homes, renovations, and land development in McMinn, Bradley, Polk, and Monroe Counties.',
  robots: {
    index: false,
  },
  alternates: {
    canonical: '/projects',
  },
}

const projects = [
  {
    title: 'Custom Farmhouse Build',
    location: 'Athens, TN',
    category: 'New Construction',
    icon: Home,
    description: 'Custom home build with open floor plan, covered porch, and mountain views on a rural McMinn County lot.',
  },
  {
    title: 'Historic Home Renovation',
    location: 'Etowah, TN',
    category: 'Remodeling',
    icon: Hammer,
    description: 'Full renovation of a craftsman home — updated systems throughout while preserving the original character.',
  },
  {
    title: 'Riverside Land Development',
    location: 'Tellico Plains, TN',
    category: 'Land Development',
    icon: TreePine,
    description: 'Multi-acre site development including clearing, driveway, utilities, and build pad preparation.',
  },
  {
    title: 'Kitchen & Bath Remodel',
    location: 'Cleveland, TN',
    category: 'Remodeling',
    icon: Hammer,
    description: 'Complete kitchen and master bath renovation with custom finishes in a Bradley County home.',
  },
  {
    title: 'Mountain Cabin Build',
    location: 'Benton, TN',
    category: 'New Construction',
    icon: Home,
    description: 'New cabin on a challenging hillside lot with views of the Cherokee National Forest.',
  },
  {
    title: 'Residential Lot Development',
    location: 'Madisonville, TN',
    category: 'Land Development',
    icon: TreePine,
    description: 'Multi-lot residential development with road construction, utility routing, and drainage work.',
  },
]

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="Projects Across Southeast Tennessee"
        description="Examples of our work in custom home construction, renovations, and land development throughout McMinn, Bradley, Polk, and Monroe Counties."
        showCTA={false}
      />

      {/* Projects Grid */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container-wide section-padding">
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
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
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

      <CTASection
        heading="Your Project Could Be Next"
        description="Ready to start planning your new home, renovation, or land development project? We'd love to hear about what you have in mind."
      />
    </>
  )
}
