import { Quote } from 'lucide-react'
import founderImage from '../../assets/summit_sir.jpeg'

const FounderPage = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
        <div className="grid items-center gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-slate-50 p-5 sm:p-8">
            <img
              src={founderImage}
              alt="Founder portrait"
              className="h-[430px] w-full rounded-[24px] object-cover sm:h-[560px]"
              loading="lazy"
            />
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <p className="text-lg font-medium italic text-blue-700 sm:text-xl">
              Founder&apos;s Message
            </p>

            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-[3.2rem]">
              BUILT ON TRUST,
              <span className="mt-2 block">INTEGRITY AND RESULTS</span>
            </h1>

            <div className="mt-5 h-1 w-28 rounded-full bg-blue-600" />

            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
              <Quote className="h-9 w-9 text-blue-600/80" />
              <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
                I founded Vertex Intelligence Services with one clear purpose: to
                provide discreet, dependable, and ethical investigation support to
                every client who seeks truth, clarity, and protection. We work with
                sensitivity, professionalism, and a high commitment to accuracy.
              </p>
            </div>

            <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
              In our work, we understand that behind every case is a person,
              family, business, or legal matter that deserves respect, privacy,
              and reliable guidance. Whether it is surveillance, background
              verification, corporate investigation, or personal intelligence,
              our mission remains the same: uncover facts, uphold confidentiality,
              and deliver results that clients can trust.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
              We believe intelligence should never be reckless or intrusive—it
              should be strategic, lawful, and driven by truth. That philosophy is
              at the heart of everything we do at Vertex.
            </p>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-xl font-semibold text-slate-900">— Founder</p>
              <p className="mt-1 text-base text-slate-600">
                Sumit Agarwal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderPage
