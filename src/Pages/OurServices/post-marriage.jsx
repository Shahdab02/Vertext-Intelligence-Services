import postInvestigation from '../../assets/post.jpg'
import { Link } from 'react-router-dom'
import WhyChooseUs from './WhyChooseUs'

// Keep this service's content and page layout together in this file.
const service = {
  id: 'post-matrimonial-investigation',
  title: 'Post-Matrimonial Investigation',
  image: postInvestigation,
  description:
    'Sensitive enquiries approached with care, professionalism, and discretion.',
  overview:
    'Concerns within a marriage can be difficult to talk about. We offer a private conversation to understand what is troubling you and to discuss whether an investigation may help clarify the situation.',
  focusAreas: [
    'Understanding the concern and the questions you want answered',
    'Agreeing on suitable boundaries and a clear scope',
    'Sharing relevant findings and explaining any limitations',
  ],
  approach:
    'We listen without making assumptions, explain possible approaches, and agree on the next steps before any work begins. Our role is to provide information within the agreed scope, not to promise a particular conclusion.',
  suitableFor:
    'People who would like to discuss a sensitive concern affecting their marriage.',
}

// This page has its own layout so its design can be changed independently.
const PostMarriage = () => (
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
          Private. Thoughtful. Discreet.
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
          Sensitive matters deserve a careful approach
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
        alt="A couple discussing an important matter"
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
            A respectful, clearly defined scope
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
            Listen first, then agree on next steps
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
            Would you like to talk privately?
          </h2>
          <p className="mt-2 max-w-2xl leading-6 text-slate-300">
            Discuss your concerns and learn about possible next steps.
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

export default PostMarriage
