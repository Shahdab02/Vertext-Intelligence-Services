import surveillanceImage from '../../assets/recogination.jpg'
import { Link } from 'react-router-dom'
import WhyChooseUs from './WhyChooseUs'

// Keep this service's content and page layout together in this file.
const service = {
  id: 'surveillance-reconnaissance',
  title: 'Surveillance & Reconnaissance',
  image: surveillanceImage,
  description:
    'Professional field investigations to help clarify specific concerns.',
  overview:
    'When you need to understand a particular situation, carefully planned observations may help fill in important details. We discuss the purpose, scope, and practical limitations with you before deciding whether this service is suitable.',
  focusAreas: [
    'Planning observations around the question you want answered',
    'Documenting relevant information within the agreed scope',
    'Providing a factual summary of observations and limitations',
  ],
  approach:
    'We first discuss what you need to understand and whether this service is appropriate. If we agree to proceed, we set clear expectations and scope, then share relevant observations in a straightforward report.',
  suitableFor:
    'Individuals or organizations seeking factual observations to clarify a specific concern.',
}

// This page has its own layout so its design can be changed independently.
const SurveillanceReconnaissance = () => (
  <>
    <section className="bg-slate-950 px-5 py-14 text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-300">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-2 text-blue-400" aria-hidden="true">/</span>
          <Link to="/our-services" className="hover:text-white">Our Services</Link>
          <span className="mx-2 text-blue-400" aria-hidden="true">/</span>
          <span className="text-white">{service.title}</span>
        </nav>

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
          Professional. Purposeful. Discreet.
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          {service.description}
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
        >
          Discuss your enquiry
        </Link>
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_.9fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
          Service overview
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
          Focused observations for a clear purpose
        </h2>
        <p className="mt-5 leading-7 text-slate-600">{service.overview}</p>

        <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5">
          <h3 className="font-semibold text-slate-900">Who this service may help</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            {service.suitableFor}
          </p>
        </div>
      </div>

      <img
        src={service.image}
        alt="Investigation team reviewing case information"
        className="h-72 w-full rounded-2xl object-cover shadow-lg sm:h-96"
      />
    </section>

    <section className="bg-slate-50 px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            What we focus on
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900">
            Relevant facts and observations
          </h2>
          <ul className="mt-7 space-y-4">
            {service.focusAreas.map((area) => (
              <li key={area} className="flex gap-3 leading-6 text-slate-700">
                <span className="text-blue-700" aria-hidden="true">✓</span>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Our approach
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900">
            Scope and purpose come first
          </h2>
          <p className="mt-5 leading-7 text-slate-600">{service.approach}</p>
        </div>
      </div>
    </section>

    <WhyChooseUs serviceId={service.id} />

    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-slate-900 px-6 py-9 text-white sm:flex-row sm:items-center sm:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
            Private and confidential
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
            Need to clarify a specific concern?
          </h2>
          <p className="mt-2 max-w-2xl leading-6 text-slate-300">
            Talk with our team about your situation and a suitable approach.
          </p>
        </div>
        <Link
          to="/contact"
          className="shrink-0 rounded-full bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
        >
          Contact our team
        </Link>
      </div>
    </section>
  </>
)

export default SurveillanceReconnaissance
