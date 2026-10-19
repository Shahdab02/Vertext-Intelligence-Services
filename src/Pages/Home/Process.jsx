const Process = () => {
  return (
    <section className="mx-auto grid max-w-6xl gap-4 px-5 pt-24 sm:px-8 sm:grid-cols-2 lg:grid-cols-4 xl:pt-20">
      {[
        ['01', 'Private & discreet', 'Sensitive matters handled with care.'],
        ['02', 'Ethical approach', 'Professional, responsible fact-finding.'],
        ['03', 'Clear communication', 'Know what to expect at each step.'],
        ['04', 'Tailored support', 'An approach shaped around your needs.'],
      ].map(([number, title, text]) => (
        <article
          key={number}
          className="rounded-xl border border-slate-100 bg-white p-5 shadow-lg shadow-slate-900/5"
        >
          <span className="text-sm font-bold tracking-widest text-blue-600">
            {number}
          </span>
          <h2 className="mt-3 font-semibold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
        </article>
      ))}
    </section>
  )
}

export default Process