import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, Megaphone, Target, Users } from "lucide-react";

import funnelImage from "@/assets/funnel.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Lead Generation & Sales Growth — LEADTION" },
      {
        name: "description",
        content:
          "Lead generation, sales growth strategy, digital marketing and customer acquisition services built to grow B2B revenue.",
      },
      { property: "og:title", content: "LEADTION Services — Leads, Sales & Growth" },
      {
        property: "og:description",
        content:
          "High-quality targeted leads, conversion strategy, digital marketing and customer acquisition for scaling businesses.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    Icon: Target,
    title: "Lead Generation",
    tagline: "Generate high-quality targeted leads for businesses.",
    points: [
      "Ideal customer profile and market research",
      "Verified, intent-qualified contact lists",
      "Multi-channel outbound campaigns",
    ],
  },
  {
    Icon: BarChart3,
    title: "Sales Growth Strategy",
    tagline: "Help companies improve conversions and increase revenue.",
    points: [
      "Funnel and objection analysis",
      "Sales scripts, sequences and follow-up systems",
      "Pipeline forecasting and reporting",
    ],
  },
  {
    Icon: Megaphone,
    title: "Digital Marketing",
    tagline: "Build online presence and attract potential customers.",
    points: [
      "Performance ads on Google, Meta and LinkedIn",
      "SEO and content that ranks and converts",
      "Landing pages engineered for enquiries",
    ],
  },
  {
    Icon: Users,
    title: "Customer Acquisition",
    tagline: "Connect businesses with the right audience.",
    points: [
      "Audience segmentation and offer positioning",
      "Appointment setting with decision makers",
      "Retention and referral loops",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <Section className="halo pt-32 sm:pt-40">
        <SectionHeading
          eyebrow="Services"
          title="Growth systems that fill your"
          highlight="sales pipeline"
          description="Four connected services that take a business from unknown to in-demand — and from enquiry to closed revenue."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 110}>
              <article className="glass-card hover-lift h-full rounded-3xl p-8">
                <div className="flex items-center gap-4">
                  <span className="inline-flex rounded-xl bg-brand-gradient p-3">
                    <s.Icon className="size-5 text-primary-foreground" />
                  </span>
                  <h3 className="text-xl font-semibold sm:text-2xl">{s.title}</h3>
                </div>
                <p className="mt-5 text-base text-foreground/85">{s.tagline}</p>
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-gradient" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/40">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card overflow-hidden rounded-3xl p-2">
              <img
                src={funnelImage}
                alt="Illustration of a sales funnel converting leads into customers"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="One connected engine"
              title="Every service feeds the"
              highlight="same funnel"
              description="Traffic, leads, follow-up and closing are handled as one system, so nothing leaks between marketing and sales."
            />
            <Reveal delay={220}>
              <Button asChild variant="hero" size="xl" className="mt-9">
                <Link to="/contact">Start Growing</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
