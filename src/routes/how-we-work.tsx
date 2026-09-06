import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: "How We Work | Our 4-Step Growth Process — LEADTION" },
      {
        name: "description",
        content:
          "Our 4-step process: understand business goals, identify target customers, generate genuine leads and convert leads into sales.",
      },
      { property: "og:title", content: "How LEADTION Works — A 4-Step Growth Process" },
      {
        property: "og:description",
        content:
          "From goals and audience research to genuine leads and closed sales — a transparent process built for B2B growth.",
      },
    ],
  }),
  component: HowWeWorkPage,
});

const steps = [
  {
    title: "Understand Business Goals",
    body: "We start with your revenue targets, margins, sales capacity and the markets you want to win. Strategy is written around your numbers, not templates.",
  },
  {
    title: "Identify Target Customers",
    body: "We define who buys, why they buy and where they can be reached — industry, company size, role, geography and buying triggers.",
  },
  {
    title: "Generate Genuine Leads",
    body: "Campaigns go live across outbound, paid and organic channels. Every lead is verified and intent-qualified before it reaches your team.",
  },
  {
    title: "Convert Leads Into Sales",
    body: "Follow-up sequences, sales scripts and reporting turn conversations into contracts, then we scale what already works.",
  },
];

function HowWeWorkPage() {
  return (
    <>
      <Section className="halo pt-32 sm:pt-40">
        <SectionHeading
          eyebrow="How We Work"
          title="A clear, four-step path to"
          highlight="revenue"
          description="No black boxes. You always know what stage your growth engine is in and what happens next."
        />

        <ol className="relative mt-16 space-y-6">
          <span
            aria-hidden
            className="absolute left-[27px] top-4 hidden h-[calc(100%-2rem)] w-px bg-brand-gradient opacity-40 sm:block"
          />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="relative">
              <div className="glass-card hover-lift flex flex-col gap-5 rounded-2xl p-7 sm:flex-row sm:items-start sm:gap-7 sm:pl-7">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-display text-base font-bold text-primary-foreground glow-ring">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold sm:text-xl">{step.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200} className="mt-14 text-center">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
