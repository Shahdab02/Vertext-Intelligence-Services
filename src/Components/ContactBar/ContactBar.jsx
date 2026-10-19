import { FaWhatsapp } from 'react-icons/fa'
import { socialLinks } from '../../data/socialLinks'

const ContactBar = () => {
  return (
    <div className="bg-blue-50 text-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 text-xs sm:flex-row sm:px-6 sm:text-sm lg:px-8">
        <p className="text-center font-medium uppercase tracking-wide sm:text-left">
          Private detective agency | ISO certified company
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <a
            className="whitespace-nowrap hover:text-blue-700"
            href="tel:+919891915550"
          >
            <strong> +91-9891915550</strong>
          </a>
          <span
            className="hidden h-5 border-l border-blue-200 sm:block"
            aria-hidden="true"
          />
          <a
            className="whitespace-nowrap hover:text-blue-700"
            href="mailto:detectiveservice7@gmail.com"
          >
            <strong>detectiveservice7@gmail.com</strong>
          </a>
          <a
            className="inline-flex items-center gap-1 whitespace-nowrap font-semibold text-green-700 hover:text-green-800"
            href="https://wa.me/919891915550?text=Hello%2C%20I%20would%20like%20to%20talk%20to%20an%20investigator."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message an investigator on WhatsApp (opens in a new tab)"
          >
            <FaWhatsapp className="size-4" aria-hidden="true" />
            WhatsApp
          </a>
          <span
            className="hidden h-5 border-l border-blue-200 sm:block"
            aria-hidden="true"
          />
          <nav className="flex items-center gap-2" aria-label="Social media">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.label} page (opens in a new tab)`}
                title={social.label}
                className={`flex size-7 items-center justify-center rounded-full text-xs font-bold text-white transition-opacity hover:opacity-80 ${social.className}`}
              >
                <social.icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default ContactBar
