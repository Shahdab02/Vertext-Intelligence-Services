import { ArrowRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import founderImage from '../../assets/summit_sir.jpeg'

const FounderMessage = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
          <img
            src={founderImage}
            alt="Founder with award trophy"
            className="h-[420px] w-full object-cover sm:h-[520px]"
            loading="lazy"
          />
        </div>

        <div>
          <p className="text-lg font-medium italic text-blue-700 sm:text-xl">
            Founder&apos;s Message
          </p>

          <h2 className="mt-4 max-w-[40rem] font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-[3rem]">
            A LEGACY BUILT ON TRUTH,
            <span className="mt-2 block">DISCRETION &amp; RESULTS</span>
          </h2>

          <div className="mt-5 h-1 w-28 rounded-full bg-blue-600" />

          <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-blue-900 shadow-sm">
            <Quote className="h-8 w-8 text-blue-600/80" />
            <p className="mt-3 text-base leading-8 text-slate-700 sm:text-lg">
              At Vertex Intelligence Services, we believe every case deserves
              thoughtful investigation, ethical judgment, and actionable clarity.
              Our mission is to protect our clients&apos; trust through confidential,
              professional, and result-driven intelligence support.
            </p>
          </div>

          <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
            With years of experience in private investigation and corporate
            intelligence, we help individuals, families, businesses, and legal
            teams uncover facts with integrity, precision, and empathy.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/founder"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Read Full Message
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderMessage
