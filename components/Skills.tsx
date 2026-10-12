type SkillGroup = {
  title: string;
  color: "purple" | "pink" | "teal" | "orange" | "blue";
  items: string[];
};

const groups: SkillGroup[] = [
  {
    title: "Front-End",
    color: "purple",
    items: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Redux / Context API",
      "React Router",
      "Responsive Design",
      "Cross-Browser Compatibility",
    ],
  },
  {
    title: "Back-End",
    color: "pink",
    items: [
      "Node.js",
      "Express.js",
      "RESTful API Design & Integration",
      "Authentication & Authorization (JWT, bcrypt)",
      "MVC Architecture",
      "Middleware & Error Handling",
      "Real-time (Socket.io / WebSockets)",
    ],
  },
  {
    title: "Databases",
    color: "teal",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQL",
      "Database Design & Normalization",
      "ER Modeling",
      "Joins, Indexing & Query Optimization",
      "Prisma / Sequelize",
    ],
  },
  {
    title: "Tools & DevOps",
    color: "orange",
    items: [
      "Git & GitHub",
      "Postman",
      "VS Code & Chrome DevTools",
      "Docker (basics)",
      "Vercel / Render",
      "Jira",
      "Figma",
      "Agile / Scrum",
    ],
  },
  {
    title: "Testing & Quality",
    color: "blue",
    items: [
      "Manual & Functional Testing",
      "API Testing (Postman)",
      "Test Case Design",
      "Bug Tracking & Regression Testing",
    ],
  },
  {
    title: "Core CS",
    color: "purple",
    items: [
      "Data Structures & Algorithms",
      "OOP (Java, JavaScript)",
      "Problem Solving",
    ],
  },
  {
    title: "Soft Skills",
    color: "pink",
    items: [
      "Communication & Teamwork",
      "Time Management & Adaptability",
      "Attention to Detail",
      "Fast Learning",
    ],
  },
];

const colorMap = {
  purple: {
    dot: "bg-purple",
    head: "text-purple",
    tag: "bg-purple/10 text-purple border-purple/20",
  },
  pink: {
    dot: "bg-pink",
    head: "text-pink",
    tag: "bg-pink/10 text-pink border-pink/20",
  },
  teal: {
    dot: "bg-teal",
    head: "text-teal",
    tag: "bg-teal/10 text-teal border-teal/20",
  },
  orange: {
    dot: "bg-orange",
    head: "text-orange",
    tag: "bg-orange/10 text-orange border-orange/20",
  },
  blue: {
    dot: "bg-blue",
    head: "text-blue",
    tag: "bg-blue/10 text-blue border-blue/20",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-[1040px] mx-auto px-8 py-20">
      <div className="font-mono text-xs text-teal mb-2.5">
        05. skills directory
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink max-w-lg mb-11">
        Technical Standard Matrix
      </h2>

      <div className="border border-border rounded-xl bg-surface p-7 flex flex-col gap-6">
        {groups.map((g) => {
          const c = colorMap[g.color];
          return (
            <div key={g.title}>
              <h4 className={`font-mono text-xs mb-3 ${c.head}`}>
                {g.title.toUpperCase()}
              </h4>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className={`font-mono text-[12.5px] border rounded px-2.5 py-1 ${c.tag}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
