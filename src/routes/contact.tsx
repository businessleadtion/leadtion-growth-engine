import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact LEADTION | Book a Free Growth Consultation" },
      {
        name: "description",
        content:
          "Tell us your business requirement and get a free consultation. Reach LEADTION by form, WhatsApp or email.",
      },
      { property: "og:title", content: "Contact LEADTION" },
      {
        property: "og:description",
        content: "Book a free lead generation consultation with the LEADTION growth team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  return (
    <>
      <Section className="halo pt-32 sm:pt-40">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build your"
          highlight="growth engine"
          description="Share a few details about your business and we'll come back with a tailored lead generation plan."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form
              className="glass-card rounded-3xl p-7 sm:p-9"
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                setSending(true);
                window.setTimeout(() => {
                  setSending(false);
                  form.reset();
                  toast.success("Thanks! Your enquiry has been received.", {
                    description: "A LEADTION growth specialist will reply within one business day.",
                  });
                }, 700);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required autoComplete="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    required
                    autoComplete="organization"
                    placeholder="Company Pvt. Ltd."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+1 555 000 1234"
                  />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="requirement">Business Requirement</Label>
                <Textarea
                  id="requirement"
                  name="requirement"
                  required
                  rows={5}
                  placeholder="Tell us about your product, target market and monthly lead goal."
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="mt-7 w-full" disabled={sending}>
                <Send className="size-4" />
                {sending ? "Sending..." : "Send Enquiry"}
              </Button>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                We reply within one business day. Your details stay confidential.
              </p>
            </form>
          </Reveal>

          <div className="space-y-6 lg:col-span-2">
            <Reveal delay={120}>
              <div className="glass-card rounded-3xl p-7">
                <h3 className="text-lg font-semibold">Talk to us directly</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer a quick conversation? Message us and we'll respond fast.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button asChild variant="hero" size="lg">
                    <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer noopener">
                      <MessageCircle className="size-4" /> Chat on WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outlineBrand" size="lg">
                    <a href={`mailto:${CONTACT.email}`}>
                      <Mail className="size-4" /> Email Us
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <ul className="glass-card space-y-5 rounded-3xl p-7 text-sm">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span className="text-muted-foreground">{CONTACT.email}</span>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span className="text-muted-foreground">{CONTACT.phoneDisplay}</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span className="text-muted-foreground">
                    Serving clients across the USA, UK and India
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span className="text-muted-foreground">Mon – Sat, 9:00 – 19:00 (IST)</span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
