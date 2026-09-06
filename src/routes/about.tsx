import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe2, ShieldCheck, Target, TrendingUp } from "lucide-react";

import teamImage from "@/assets/team-meeting.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LEADTION | B2B Lead Generation & Growth Agency" },
      {
        name: "description",
        content:
          "LEADTION is a lead generation and business growth agency helping companies connect with genuine customers and achieve sustainable revenue growth.",
      },
      { property: "og:title", content: "About LEADTION | B2B Growth Agency" },
      {
        property: "og:description",
        content:
          "Meet the team behind LEADTION — data-driven lead generation for clients in the USA, UK and India.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    Icon: Target,
    title: "Precision Targeting",
    body: "We build ideal customer profiles first, so every lead matches the business you actually want.",
  },
  {
    Icon: ShieldCheck,
    title: "Genuine Leads Only",
    body: "No recycled lists or bot traffic. Every contact is verified and intent-qualified before handover.",
  },
  {
    Icon: TrendingUp,
    title: "Revenue Accountability",
    body: "We report on pipeline and closed revenue, not vanity impressions.",
  },
  {
    Icon: Globe2,
    title: "Global Coverage",
    body: "Campaigns running across the USA, UK and India with local market nuance built in.",
  },
];

function AboutPage() {
  return (
    <>
      <Section className="halo pt-32 sm:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative z-10">
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="Built to make growth"
              highlight="predictable."
              description="LEADTION is a lead generation and business growth agency helping companies connect with genuine customers and achieve sustainable revenue growth."
            />
            <Reveal delay={220}>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                We work as an extension of your sales team. From market research and audience
                targeting to outbound campaigns, paid acquisition and conversion strategy, our team
                builds a pipeline that keeps producing long after the first campaign ends. Founders,
                sales leaders and marketing teams partner with us when guesswork stops working.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
                <Button asChild variant="outlineBrand" size="xl">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative z-10">
            <div className="glass-card overflow-hidden rounded-3xl p-2">
              <img
                src={teamImage}
                alt="LEADTION strategists reviewing campaign performance dashboards"
                width={1440}
                height={960}
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Our Principles"
          title="What guides"
          highlight="every campaign"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <article className="glass-card hover-lift h-full rounded-2xl p-7">
                <span className="inline-flex rounded-xl bg-brand-gradient p-3">
                  <v.Icon className="size-5 text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
