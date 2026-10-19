import { Link } from 'react-router-dom'
import aboutImage from '../../assets/about.jpg'
import analysisImage from '../../assets/image-why.webp'
import VideoBackground from '../../Components/VideoBackground/VideoBackground'

const About = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-28">
        <VideoBackground className="object-[65%_center] opacity-70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/10" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Who we are</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Professional insight. <span className="text-blue-400">A personal approach.</span>
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            A private investigation and intelligence agency offering discreet support to individuals,
            corporates, legal firms, and organizations.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Vertex Intelligence Services</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">Clarity starts with listening.</h2>
          <p className="mt-5 leading-7 text-slate-600">
            Every enquiry is different. We take time to understand the situation, discuss an appropriate
            investigative approach, and communicate clearly about the next steps. Discretion and respect
            guide our work from the first conversation.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            Our services cover personal investigations, background checks, corporate verification, cyber
            investigations, and missing-person enquiries. We aim to provide useful information while
            treating each matter with care.
          </p>
          <Link to="/our-services" className="mt-7 inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800">
            Explore our services
          </Link>
        </div>
        <img src={aboutImage} alt="Investigator carefully reviewing information" className="h-80 w-full rounded-2xl object-cover shadow-xl sm:h-[440px]" />
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <img src={analysisImage} alt="Team reviewing intelligence and case information" className="h-72 w-full rounded-2xl object-cover sm:h-[380px]" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Our principles</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">Trust is earned through the details.</h2>
            <div className="mt-7 space-y-5">
              {[
                ['Discretion', 'Sensitive conversations and enquiries deserve a thoughtful, private response.'],
                ['Professionalism', 'We approach each matter with care, clear communication, and respect.'],
                ['Purposeful work', 'We focus on information relevant to the questions you need answered.'],
              ].map(([title, text]) => (
                <div key={title} className="border-l-2 border-blue-600 pl-4">
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8">
        <h2 className="font-serif text-2xl font-semibold text-slate-900 sm:text-3xl">Have a sensitive matter to discuss?</h2>
        <Link to="/contact" className="mt-5 inline-flex rounded-full border border-blue-700 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-700 hover:text-white">
          Contact our team
        </Link>
      </section>
    </>
  )
}

export default About
