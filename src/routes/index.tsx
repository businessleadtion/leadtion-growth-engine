import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  Database,
  Headphones,
  Megaphone,
  Rocket,
  Target,
  Trophy,
  Users,
} from "lucide-react";

import heroImage from "@/assets/hero-growth.jpg";
import teamImage from "@/assets/team-meeting.jpg";
import { GrowthChart } from "@/components/site/GrowthChart";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow, Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LEADTION | B2B Lead Generation & Business Growth Agency" },
      {
        name: "description",
        content:
          "LEADTION generates genuine B2B leads, increases sales and grows revenue for companies in the USA, UK and India. Book a free consultation.",
      },
      { property: "og:title", content: "LEADTION | Generate Genuine Leads. Grow Revenue." },
      {
        property: "og:description",
        content:
          "A premium B2B lead generation and business growth agency helping companies connect with genuine customers and scale faster.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    Icon: Target,
    title: "Lead Generation",
    body: "Generate high-quality targeted leads for businesses.",
  },
  {
    Icon: BarChart3,
    title: "Sales Growth Strategy",
    body: "Help companies improve conversions and increase revenue.",
  },
  {
    Icon: Megaphone,
    title: "Digital Marketing",
    body: "Build online presence and attract potential customers.",
  },
  {
    Icon: Users,
    title: "Customer Acquisition",
    body: "Connect businesses with the right audience.",
  },
];

const steps = [
  { title: "Understand Business Goals", body: "Targets, margins and markets define the strategy." },
  { title: "Identify Target Customers", body: "We map who buys, why and where to reach them." },
  { title: "Generate Genuine Leads", body: "Verified, intent-qualified leads — never cold lists." },
  { title: "Convert Leads Into Sales", body: "Follow-up systems that turn interest into revenue." },
];

const reasons = [
  { Icon: BadgeCheck, title: "Genuine Leads" },
  { Icon: Database, title: "Data Driven Strategy" },
  { Icon: Rocket, title: "Business Growth Focus" },
  { Icon: Headphones, title: "Professional Support" },
  { Icon: Trophy, title: "Result Oriented Approach" },
];

const marquee = [
  "SaaS",
  "Manufacturing",
  "Real Estate",
  "IT Services",
  "Healthcare",
  "Fintech",
  "Logistics",
  "Consulting",
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:pb-28 sm:pt-40 lg:px-8">
        <img
          src={heroImage}
          alt="Glowing blue growth chart representing rising business revenue"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div aria-hidden className="grid-lines absolute inset-0" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>B2B Lead Generation &amp; Growth Agency</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-7 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                Generate Genuine Leads.{" "}
                <span className="text-gradient">Grow Your Business.</span> Increase Revenue.
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                LEADTION helps ambitious companies connect with genuine customers, increase sales
                and scale faster with data-driven lead generation and growth strategy.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
                <Button asChild variant="outlineBrand" size="xl">
                  <Link to="/services">
                    Start Growing <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={330}>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  { k: "Leads delivered", v: "12k+" },
                  { k: "Client retention", v: "94%" },
                  { k: "Markets served", v: "3" },
                ].map((s) => (
                  <div key={s.k}>
                    <dt className="sr-only">{s.k}</dt>
                    <dd>
                      <span className="block font-display text-2xl font-bold sm:text-3xl">
                        {s.v}
                      </span>
                      <span className="mt-1 block text-xs uppercase tracking-wider text-muted-foreground">
                        {s.k}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200} className="animate-float-slow">
            <GrowthChart />
          </Reveal>
        </div>
      </section>

      {/* Industry marquee */}
      <div className="overflow-hidden border-y border-border bg-surface/40 py-5">
        <div className="flex w-max animate-marquee gap-12 pr-12">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card overflow-hidden rounded-3xl p-2">
              <img
                src={teamImage}
                alt="Business growth team analysing sales performance dashboards"
                width={1440}
                height={960}
                loading="lazy"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="About LEADTION"
              title="A growth partner, not just an"
              highlight="agency"
              description="LEADTION is a lead generation and business growth agency helping companies connect with genuine customers and achieve sustainable revenue growth."
            />
            <Reveal delay={220}>
              <Button asChild variant="outlineBrand" size="xl" className="mt-9">
                <Link to="/about">
                  More About Us <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to"
          highlight="win customers"
          description="Four connected services covering demand, conversion and retention."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <article className="glass-card hover-lift h-full rounded-2xl p-7">
                <span className="inline-flex rounded-xl bg-brand-gradient p-3">
                  <s.Icon className="size-5 text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-12 text-center">
          <Button asChild variant="hero" size="xl">
            <Link to="/services">Explore All Services</Link>
          </Button>
        </Reveal>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeading
          eyebrow="How We Work"
          title="Four steps from goals to"
          highlight="closed deals"
        />
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 110}>
              <div className="glass-card hover-lift h-full rounded-2xl p-7">
                <span className="font-display text-4xl font-bold text-gradient">0{i + 1}</span>
                <h3 className="mt-4 text-base font-semibold sm:text-lg">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Why choose */}
      <Section className="bg-surface/40">
        <SectionHeading eyebrow="Why LEADTION" title="Why growing companies" highlight="choose us" />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 90}>
              <div className="glass-card hover-lift flex h-full flex-col items-center gap-4 rounded-2xl p-7 text-center">
                <span className="inline-flex rounded-xl bg-brand-gradient p-3">
                  <r.Icon className="size-5 text-primary-foreground" />
                </span>
                <h3 className="text-sm font-semibold sm:text-base">{r.title}</h3>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={200} className="mt-12 text-center">
          <Button asChild variant="outlineBrand" size="xl">
            <Link to="/why-leadtion">See the Full Picture</Link>
          </Button>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal>
          <div className="glass-card halo relative overflow-hidden rounded-3xl px-7 py-14 text-center sm:px-14">
            <div aria-hidden className="grid-lines absolute inset-0 opacity-60" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                Ready to fill your pipeline with{" "}
                <span className="text-gradient">genuine leads?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                Book a free consultation and get a tailored growth plan for your business — no
                obligation, no jargon.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
                <Button asChild variant="outlineBrand" size="xl">
                  <Link to="/contact">Start Growing</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
