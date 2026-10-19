import cyberInvestigation from '../../assets/cyber_investigation.jpg'
import { Link } from 'react-router-dom'
import WhyChooseUs from './WhyChooseUs'

// Keep this service's content and page layout together in this file.
const service = {
  id: 'cyber-investigation',
  title: 'Cyber Investigation',
  image: cyberInvestigation,
  description:
    'Get support in understanding online fraud, digital threats, and suspicious online activity.',
  overview:
    'If something online does not feel right, it can be difficult to know what to do next. We can review the information you have, help clarify your concerns, and discuss practical next steps.',
  focusAreas: [
    'Reviewing the timeline of suspicious online activity',
    'Organizing relevant messages, links, and other information you provide',
    'Identifying useful questions and possible next steps',
  ],
  approach:
    'We begin by listening to what happened and reviewing any information you have kept. We will explain what can reasonably be assessed, share our observations, and discuss the next steps with you.',
  suitableFor:
    'Individuals and organizations concerned about online impersonation, suspicious contact, or possible digital fraud.',
}

// This page has its own layout so its design can be changed independently.
const CyberInvestigation = () => (
  <>
    <section className="bg-slate-950 px-5 py-14 text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-300">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2 text-blue-400" aria-hidden="true">
            /
          </span>
          <Link to="/our-services" className="hover:text-white">
            Our Services
          </Link>
          <span className="mx-2 text-blue-400" aria-hidden="true">
            /
          </span>
          <span className="text-white">{service.title}</span>
        </nav>

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
          Confidential. Ethical. Professional.
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
          Make sense of suspicious online activity
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
        alt="Cyber investigation workspace"
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
            A clear review of the information available
          </h2>
          <ul className="mt-7 space-y-4">
            {service.focusAreas.map((area) => (
              <li key={area} className="flex gap-3 leading-6 text-slate-700">
                <span className="text-blue-700" aria-hidden="true">
                  ✓
                </span>
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
            Preserve, review, and clarify
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
            Need help with an online concern?
          </h2>
          <p className="mt-2 max-w-2xl leading-6 text-slate-300">
            Tell us what happened, and we can discuss possible next steps.
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

export default CyberInvestigation
