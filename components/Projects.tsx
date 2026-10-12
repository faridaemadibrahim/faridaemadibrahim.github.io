type Project = {
  name: string;
  url: string;
  description: string;
  stack: string[];
  link: string;
  image: string;
  color: "purple" | "pink" | "teal" | "blue";
};
const colorMap = {
  purple: {
    border: "border-border hover:border-purple/50",
    dot: "bg-purple",
    tag: "bg-purple/10 text-purple",
    link: "text-purple",
  },
  pink: {
    border: "border-border hover:border-pink/50",
    dot: "bg-pink",
    tag: "bg-pink/10 text-pink",
    link: "text-pink",
  },
  teal: {
    border: "border-border hover:border-teal/50",
    dot: "bg-teal",
    tag: "bg-teal/10 text-teal",
    link: "text-teal",
  },
  blue: {
    border: "border-border hover:border-blue/50",
    dot: "bg-blue",
    tag: "bg-blue/10 text-blue",
    link: "text-blue",
  },
};
const projects: Project[] = [
  {
    name: "FreightPulse",
    url: "freight-pulse-frontend.vercel.app",
    description:
      "AI-powered freight & logistics dashboard for the MENA region — tracks shipping rates, port congestion, and carrier advisories, with live alerts over WebSocket and AI-generated route briefs.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Recharts"],
    link: "https://freight-pulse-frontend.vercel.app",
    color: "blue",
    image: "/projects/FreightPulse.png",
  },
  {
    name: "Muscle Fire",
    url: "musclefire",
    description:
      "Full stack e-commerce store for gym supplements — product catalog with categories and search, cart and checkout, user accounts, and order management.",
    stack: ["React.js", "Python", "PostgreSQL", "JWT"],
    link: "#",
    color: "teal",
    image: "/projects/musclefire.png",
  },
  {
    name: "Meetza",
    url: "github.com/faridaemad/meetza",
    description:
      "All-in-one collaboration platform unifying meetings, chat, group management, and calendar scheduling, with dark/light themes and custom branding.",
    stack: ["React.js", "Socket.io", "React Router", "Framer Motion"],
    link: "https://meetza-front-end.vercel.app/",
    color: "purple",
    image: "/projects/meetza.png",
  },
  {
    name: "Qwizzy",
    url: "github.com/faridaemad/quizzy",
    description:
      "Interactive quiz platform that lets users create and take dynamic quizzes through an intuitive, user-friendly interface.",
    stack: ["React.js", "Bootstrap", "RESTful APIs"],
    link: "https://qwizzy-front-end.vercel.app/",
    color: "pink",
    image: "/projects/qwizzy.png",
  },
  {
    name: "Merto",
    url: "github.com/faridaemad/merto",
    description:
      "Responsive e-commerce platform with full product browsing and core shopping functionality, built mobile-first.",
    stack: ["React.js", "Bootstrap", "Responsive Design"],
    link: "#",
    color: "teal",
    image: "/projects/metro.png",
  },
];
import Image from "next/image";

export default function Projects() {
  return (
    <section id="work" className="max-w-[1040px] mx-auto px-8 py-20">
      <div className="font-mono text-xs text-purple mb-2.5">
        02. featured work
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink max-w-lg mb-11">
        Featured Engineering Projects
      </h2>

      <div className="flex flex-col gap-7">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const c = colorMap[project.color];
  return (
    <div
      className={`border ${c.border} rounded-xl overflow-hidden transition-colors bg-surface`}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-2 border-b border-border">
        <span className={`w-2 h-2 rounded-full ${c.dot}`}></span>
        <span className="font-mono text-xs text-ink-soft ml-2">
          {project.url}
        </span>
      </div>

      <div className="grid md:grid-cols-2">
        {/* النص */}
        <div className="p-7 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-ink mb-2">
            {project.name}
          </h3>
          <p className="text-[14px] text-ink-soft mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((s) => (
              <span
                key={s}
                className={`font-mono text-[11px] px-2 py-0.5 rounded ${c.tag}`}
              >
                {s}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className={`text-[13px] font-semibold ${c.link}`}
          >
            view project →
          </a>
        </div>

        {/* الصورة كاملة، من غير قص */}
        <div className="relative bg-surface-2 flex items-center justify-center p-4 min-h-[220px] border-t md:border-t-0 md:border-l border-border">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            width={500}
            height={400}
            className="w-full h-auto max-h-[280px] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
