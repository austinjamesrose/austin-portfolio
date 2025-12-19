import { Metadata } from "next";
import { Container } from "@/components/layout";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Austin Rose for People Analytics opportunities.",
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/austinrose",
    description: "Connect professionally",
  },
  {
    name: "GitHub",
    href: "https://github.com/austinrose",
    description: "View my code",
  },
  {
    name: "Email",
    href: "mailto:austin@austinrose.io",
    description: "Send me a message",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-32">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-display text-[2.5rem] leading-[1.2] text-text-primary mb-6">
              Let&apos;s Connect
            </h1>
            <p className="text-text-secondary text-lg mb-12">
              I&apos;m always interested in discussing People Analytics, data
              visualization, or new opportunities. Feel free to reach out.
            </p>

            {/* Email CTA */}
            <a
              href="mailto:austin@austinrose.io"
              className="bg-accent-coral text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all duration-[var(--transition-base)] inline-block text-lg"
            >
              austin@austinrose.io
            </a>
          </div>
        </Container>
      </section>

      {/* Social Links */}
      <section className="pb-32">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-[1.75rem] leading-[1.3] text-text-primary mb-8 text-center">
              Other Ways to Connect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="bg-bg-secondary border border-border-subtle rounded-xl p-6 text-center hover:border-accent-coral/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="font-display text-[1.25rem] leading-[1.4] text-text-primary mb-2">
                    {link.name}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {link.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Resume Download */}
      <section className="py-32 bg-bg-secondary">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-[1.75rem] leading-[1.3] text-text-primary mb-4">
              Download Resume
            </h2>
            <p className="text-text-secondary mb-8">
              Get a PDF copy of my full resume with additional details.
            </p>
            <a
              href="/resume.pdf"
              download
              className="border border-text-tertiary text-text-primary px-6 py-3 rounded-lg font-medium hover:border-accent-coral hover:text-accent-coral transition-all duration-[var(--transition-base)] inline-block"
            >
              Download PDF
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
