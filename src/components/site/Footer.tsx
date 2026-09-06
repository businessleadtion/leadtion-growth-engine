import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";

import logo from "@/assets/leadtion-logo-white.png";
import { CONTACT } from "@/lib/contact";

const social = [
  { href: CONTACT.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: CONTACT.twitter, label: "X (Twitter)", Icon: Twitter },
  { href: CONTACT.instagram, label: "Instagram", Icon: Instagram },
  { href: CONTACT.facebook, label: "Facebook", Icon: Facebook },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <img
            src={logo}
            alt="LEADTION logo"
            width={1256}
            height={176}
            loading="lazy"
            className="h-7 w-auto"
          />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            LEADTION is a B2B lead generation and business growth agency helping companies connect
            with genuine customers and achieve sustainable revenue growth across the USA, UK and
            India.
          </p>
          <div className="mt-6 flex gap-3">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="rounded-lg border border-border bg-surface-2 p-2.5 text-muted-foreground transition-all duration-300 hover:border-brand hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Company
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/about" className="text-foreground/80 transition-colors hover:text-brand">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-foreground/80 transition-colors hover:text-brand">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/how-we-work"
                className="text-foreground/80 transition-colors hover:text-brand"
              >
                How We Work
              </Link>
            </li>
            <li>
              <Link
                to="/why-leadtion"
                className="text-foreground/80 transition-colors hover:text-brand"
              >
                Why LEADTION
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Get in touch
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-brand"
              >
                <Mail className="size-4" /> {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-brand"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </li>
            <li className="text-muted-foreground">{CONTACT.phoneDisplay}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} LEADTION. All rights reserved.</p>
          <p>Lead Generation · Sales Growth · Digital Marketing</p>
        </div>
      </div>
    </footer>
  );
}
