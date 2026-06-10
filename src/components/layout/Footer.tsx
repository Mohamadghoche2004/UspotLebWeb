import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { siteConfig, navLinks } from '@/data/site.config'
import { homeServices } from '@/data/services'
import { Logo } from '@/components/ui/Logo'

const socialIcons = [
  { href: siteConfig.social.instagram, icon: FaInstagram, label: 'Instagram' },
  { href: siteConfig.social.facebook, icon: FaFacebookF, label: 'Facebook' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle bg-surface/50">
      <div className="container-custom section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">{siteConfig.description}</p>
            <div className="mt-6 flex gap-3">
              {socialIcons.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-colors hover:bg-violet-500/20 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              {homeServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={service.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-foreground transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground/70">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground/70">
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
