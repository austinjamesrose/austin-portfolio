import { Metadata } from "next";
import { Container } from "@/components/layout";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Austin Rose's journey from recruiting to People Analytics leadership.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <Container>
          <h1 className="font-display text-[3rem] md:text-[4rem] leading-[1.1] text-text-primary mb-12">
            About Me
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-6">
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                I&apos;m Austin Rose, Head of People Analytics at The Aspen Group. My
                journey into analytics started in an unexpected place: recruiting.
              </p>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                Working as a recruiter, I became fascinated by the patterns in
                hiring data. Why did some roles fill quickly while others
                languished? What made candidates succeed? These questions led me
                to dive deeper into data, eventually transitioning fully into
                People Analytics.
              </p>
            </div>
            <div>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                Today, I lead analytics initiatives that impact 23,000+ employees,
                building the data infrastructure and visualizations that help
                executives make better talent decisions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills & Tools */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <Container>
          <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.2] text-text-primary mb-16">
            Skills & Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Data & Analytics */}
            <div className="bg-bg-tertiary rounded-2xl p-8">
              <h3 className="font-display text-[1.5rem] leading-[1.3] text-text-primary mb-6">
                Data & Analytics
              </h3>
              <ul className="space-y-3 text-text-secondary text-base md:text-lg">
                <li>Workday Report Writer</li>
                <li>Tableau</li>
                <li>SQL</li>
                <li>Python (pandas)</li>
                <li>Excel / Google Sheets</li>
              </ul>
            </div>

            {/* Strategy */}
            <div className="bg-bg-tertiary rounded-2xl p-8">
              <h3 className="font-display text-[1.5rem] leading-[1.3] text-text-primary mb-6">
                Strategy
              </h3>
              <ul className="space-y-3 text-text-secondary text-base md:text-lg">
                <li>Executive Reporting</li>
                <li>Workforce Planning</li>
                <li>Talent Acquisition Analytics</li>
                <li>Data Governance</li>
                <li>Process Optimization</li>
              </ul>
            </div>

            {/* Leadership */}
            <div className="bg-bg-tertiary rounded-2xl p-8">
              <h3 className="font-display text-[1.5rem] leading-[1.3] text-text-primary mb-6">
                Leadership
              </h3>
              <ul className="space-y-3 text-text-secondary text-base md:text-lg">
                <li>Team Management</li>
                <li>Stakeholder Communication</li>
                <li>Cross-functional Collaboration</li>
                <li>Training & Development</li>
                <li>Change Management</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32">
        <Container>
          <h2 className="font-display text-[2rem] md:text-[2.5rem] leading-[1.2] text-text-primary mb-16">
            My Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <h3 className="font-display text-[1.5rem] leading-[1.3] text-accent-coral mb-4">
                Data tells a story
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Numbers alone don&apos;t drive change—narratives do. I focus on
                translating complex data into clear, compelling stories that
                resonate with stakeholders at every level.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[1.5rem] leading-[1.3] text-accent-coral mb-4">
                Build for scale
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Every report and dashboard I create is designed to grow with
                the organization. Sustainable solutions over quick fixes.
              </p>
            </div>
            <div>
              <h3 className="font-display text-[1.5rem] leading-[1.3] text-accent-coral mb-4">
                Empower others
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                The best analytics teams make themselves less indispensable,
                not more. I prioritize training and documentation so others
                can self-serve.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
