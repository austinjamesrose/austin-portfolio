import { Metadata } from "next";
import { Container } from "@/components/layout";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Austin Rose's career timeline from recruiting to People Analytics leadership.",
};

const experiences = [
  {
    period: "2023 - Present",
    title: "Head of People Analytics",
    company: "The Aspen Group",
    location: "Chicago, IL",
    highlights: [
      "Lead People Analytics function supporting 23,000+ employees across multiple brands",
      "Built 950+ custom Workday reports and 20+ executive dashboards",
      "Delivered $55M incremental revenue through data-driven onboarding initiative",
      "Established Report Writing Committee to standardize practices for 80+ analysts",
    ],
  },
  {
    period: "2021 - 2023",
    title: "Senior Recruiter",
    company: "Chime",
    location: "San Francisco, CA",
    highlights: [
      "Led full-cycle recruiting for engineering and product roles",
      "Developed data-driven sourcing strategies improving pipeline quality",
      "Created recruiting analytics dashboards for leadership visibility",
      "Mentored junior recruiters on data analysis and reporting",
    ],
  },
  {
    period: "2019 - 2021",
    title: "Technical Recruiter",
    company: "Various Companies",
    location: "San Francisco Bay Area",
    highlights: [
      "Specialized in engineering and data science recruiting",
      "Built custom tracking systems for candidate pipeline management",
      "Introduced analytics practices to recruiting operations",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science",
    field: "Business Administration",
    school: "University of Example",
    year: "2018",
  },
];

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-[2.5rem] leading-[1.2] text-text-primary mb-6">
              Experience
            </h1>
            <p className="text-text-secondary text-lg">
              My journey from recruiting to People Analytics leadership.
            </p>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="pb-32">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border-subtle transform md:-translate-x-1/2" />

              {experiences.map((exp, index) => (
                <div
                  key={exp.period}
                  className={`relative mb-12 md:mb-16 ${
                    index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute top-2 w-3 h-3 rounded-full bg-accent-coral left-0 md:left-1/2 transform md:-translate-x-1/2`}
                  />

                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <span className="text-accent-coral text-sm font-medium">
                      {exp.period}
                    </span>
                    <h3 className="font-display text-[1.25rem] leading-[1.4] text-text-primary mt-1">
                      {exp.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      {exp.company} &bull; {exp.location}
                    </p>
                    <ul
                      className={`space-y-2 text-text-secondary text-sm ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Education */}
      <section className="py-32 bg-bg-secondary">
        <Container>
          <h2 className="font-display text-[1.75rem] leading-[1.3] text-text-primary mb-12 text-center">
            Education
          </h2>
          <div className="max-w-xl mx-auto">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="bg-bg-tertiary rounded-xl p-6 text-center"
              >
                <h3 className="font-display text-[1.25rem] leading-[1.4] text-text-primary">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-text-secondary mt-2">
                  {edu.school} &bull; {edu.year}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
