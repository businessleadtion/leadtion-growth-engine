import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Database, Headphones, Rocket, Trophy } from "lucide-react";

import { GrowthChart } from "@/components/site/GrowthChart";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/why-leadtion")({
  head: () => ({
    meta: [
      { title: "Why Choose LEADTION | Genuine Leads, Real Growth" },
      {
        name: "description",
        content:
          "Genuine leads, data-driven strategy, business growth focus, professional support and a result-oriented approach.",
      },
      { property: "og:title", content: "Why Choose LEADTION" },
      {
        property: "og:description",
        content:
          "Five reasons growing companies trust LEADTION with their lead generation and revenue growth.",
      },
    ],
  }),
  component: WhyPage,
});

const reasons = [
  {
    Icon: BadgeCheck,
    title: "Genuine Leads",
    body: "Verified contacts with real buying intent — never scraped or resold lists.",
  },
  {
    Icon: Database,
    title: "Data Driven Strategy",
    body: "Decisions come from campaign data, market testing and pipeline analytics.",
  },
  {
    Icon: Rocket,
    title: "Business Growth Focus",
    body: "We optimise for revenue and qualified meetings, not clicks and impressions.",
  },
  {
    Icon: Headphones,
    title: "Professional Support",
    body: "A dedicated growth manager, clear reporting and fast communication across time zones.",
  },
  {
    Icon: Trophy,
    title: "Result Oriented Approach",
    body: "Targets agreed upfront, performance reviewed openly, campaigns scaled on proof.",
  },
];

function WhyPage() {
  return (
    <>
      <Section className="halo pt-32 sm:pt-40">
        <SectionHeading
          eyebrow="Why LEADTION"
          title="Chosen by companies that want"
          highlight="real results"
          description="We are measured by the pipeline we create and the revenue our clients close."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 100}>
              <article className="glass-card hover-lift h-full rounded-2xl p-7">
                <span className="inline-flex rounded-xl bg-brand-gradient p-3">
                  <r.Icon className="size-5 text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/40">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Performance"
              title="Growth you can"
              highlight="measure"
              description="Transparent dashboards show leads generated, meetings booked, deals won and cost per acquisition — updated continuously."
            />
            <Reveal delay={200}>
              <Button asChild variant="hero" size="xl" className="mt-9">
                <Link to="/contact">Start Growing</Link>
              </Button>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <GrowthChart />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
