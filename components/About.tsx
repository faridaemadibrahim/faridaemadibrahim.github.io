const experience = [
  {
    role: "Software Developer",
    company: "Royal Wells Alliance (RWA) for Petroleum Services",
    period: "Present",
    color: "teal",
    points: [
      "Developing and maintaining full stack internal web applications using React.js / Next.js on the front end and Node.js / Express.js on the back end.",
      "Designing and implementing RESTful APIs and relational database schemas (PostgreSQL / MySQL) to digitize and streamline operational workflows.",
      "Building secure authentication and role-based access control (JWT) for internal users and departments.",
      "Writing optimized SQL queries, handling data validation and error handling, and improving application performance and reliability.",
      "Collaborating with stakeholders to gather requirements and translate business needs into practical technical solutions.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "Infinity X Solutions",
    period: "Present",
    color: "purple",
    points: [
      "Collaborating with cross-functional engineering teams to build scalable, high-performance web apps.",
      "Developing responsive UI with modular, maintainable React component structures.",
      "Gaining hands-on experience with Next.js in production-grade workflows.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "National Telecommunication Institute (NTI)",
    period: "Jun 2025 — Aug 2025",
    color: "pink",
    points: [
      "Built responsive, interactive interfaces using HTML5, CSS3, JavaScript, and React.js.",
      "Worked with RESTful APIs to fetch and display dynamic data.",
      "Used Git & GitHub for version control and team collaboration.",
    ],
  },
];

const colorMap = {
  teal: { dot: "bg-teal", text: "text-teal" },
  purple: { dot: "bg-purple", text: "text-purple" },
  pink: { dot: "bg-pink", text: "text-pink" },
};

export default function About() {
  return (
    <section id="about" className="max-w-[1040px] mx-auto px-8 py-20">
      <div className="font-mono text-xs text-purple mb-2.5">
         01. the profile
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink max-w-lg mb-11">
        Core Philosophy &amp; Mission
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mb-16 text-[15px] text-ink-soft leading-relaxed">
        <p>
          I am a Full Stack Developer with 1+ years of hands-on experience
          designing, building, and shipping end-to-end web applications. On the
          front end, I build fast, responsive, and accessible interfaces with
          React.js, Next.js, JavaScript (ES6+), TypeScript, and Tailwind CSS. On
          the back end, I develop secure and scalable RESTful APIs with Node.js
          and Express.js, implement JWT-based authentication and role-based
          access control, and design relational databases in PostgreSQL and
          MySQL.
        </p>
        <p>
          Comfortable owning a feature across the full stack, from database
          schema and API design to UI implementation, testing, and deployment.
          A collaborative team player experienced in Agile/Scrum environments,
          code reviews, and Git-based workflows, with a strong focus on clean
          architecture, performance, and maintainable code.
        </p>
      </div>

      <div className="font-mono text-xs text-pink mb-2.5">
         03. career milestones
      </div>
      <h3 className="text-2xl font-bold tracking-tight text-ink mb-8">
        Professional Experience
      </h3>

      <div className="flex flex-col gap-5">
        {experience.map((e) => {
          const c = colorMap[e.color as keyof typeof colorMap];
          return (
            <div
              key={e.role}
              className="border border-border rounded-xl bg-surface p-6"
            >
              <div className="flex items-start justify-between mb-1.5">
                <div>
                  <h4 className="font-semibold text-ink text-[15px]">
                    {e.role}
                  </h4>
                  <div className={`text-[13.5px] font-medium ${c.text}`}>
                    {e.company}
                  </div>
                </div>
                <span className="font-mono text-[11px] text-ink-soft border border-border rounded px-2 py-1 whitespace-nowrap">
                  {e.period}
                </span>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5">
                {e.points.map((pt) => (
                  <li
                    key={pt}
                    className="text-[13.5px] text-ink-soft flex gap-2"
                  >
                    <span className={c.text}>›</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <div className="border border-border rounded-xl bg-surface p-6">
          <div className="font-mono text-xs text-teal mb-2.5">
            04. credentials
          </div>
          <h4 className="font-bold text-ink mb-3">Education</h4>
          <div className="font-semibold text-[14.5px] text-ink">
            Ain Shams University
          </div>
          <div className="text-[13.5px] text-ink-soft">
            Faculty of Science, Computer Science Dept.
          </div>
          <div className="font-mono text-[11.5px] text-ink-soft mt-1">
            Oct 2022 — Jun 2026 (Expected)
          </div>
        </div>

        <div className="border border-border rounded-xl bg-surface p-6">
          <h4 className="font-bold text-ink mb-3">Certifications</h4>
          <ul className="flex flex-col gap-2 text-[13.5px] text-ink-soft">
            <li>
              🏆 ICPC International Collegiate Programming Contest, ECPC (Jul
              2024)
            </li>
            <li>
              ✅ Frontend Development Internship Certificate, NTI (Jun 2025)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
