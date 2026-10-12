import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative max-w-[1040px] mx-auto px-8 pt-24 pb-20 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple/10 rounded-full blur-3xl"></div>

      <div className="relative grid md:grid-cols-[auto_1fr_1fr] gap-8 items-center">
        {/* الصورة */}
        <div className="relative flex justify-center">
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple via-pink to-orange opacity-60 blur-md animate-float"
            style={{ borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%" }}
          ></div>
          <Image
            src="/profile.jpeg"
            alt="Farida Emad"
            width={200}
            height={200}
            className="relative object-cover w-36 h-36 md:w-44 md:h-44 border-4 border-surface shadow-xl"
            style={{ borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%" }}
            priority
          />
        </div>{" "}
        {/* النص */}
        <div>
          <div className="flex flex-wrap gap-2.5 mb-7">
            <span className="font-mono text-xs border border-teal/30 bg-teal/10 text-teal rounded px-2.5 py-1">
              Egypt-Based
            </span>
            <span className="font-mono text-xs border border-border text-ink-soft rounded px-2.5 py-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple"></span>
              Available for Remote/Local Roles
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-ink">
            Farida Emad
          </h1>
          <p className="mt-2 text-2xl font-semibold bg-gradient-to-r from-purple via-pink to-orange bg-clip-text text-transparent">
            Full Stack Developer
          </p>

          <p className="mt-5 text-[15px] text-ink-soft max-w-md leading-relaxed">
            Designing, building, and shipping end-to-end web applications — from
            fast, accessible React.js/Next.js interfaces to secure, scalable
            Node.js/Express APIs and PostgreSQL/MySQL databases.
          </p>

          <div className="mt-8 flex gap-3.5">
            <a
              href="#work"
              className="font-mono text-[13.5px] font-semibold px-6 py-3 rounded-lg bg-gradient-to-r from-purple to-pink text-white hover:opacity-90 transition-opacity"
            >
              view projects →
            </a>
            <a
              href="#contact"
              className="font-mono text-[13.5px] font-semibold px-6 py-3 rounded-lg border border-border text-ink hover:border-purple transition-colors"
            >
              contact me
            </a>
          </div>
        </div>
        {/* التيرمينال */}
        <div className="relative bg-surface border border-border rounded-xl overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 bg-surface-2 border-b border-border">
            <span className="w-2.5 h-2.5 rounded-full bg-pink/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-orange/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-teal/70"></span>
            <span className="ml-3 font-mono text-xs text-ink-soft">
              developer_manifest.js
            </span>
          </div>
          <div className="p-5 font-mono text-[13px] leading-relaxed">
            <div>
              <span className="text-purple">const</span>{" "}
              <span className="text-ink">developer</span> = {"{"}
            </div>
            <div className="pl-4">
              <span className="text-blue">name</span>:{" "}
              <span className="text-teal">&quot;Farida Emad&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-blue">role</span>:{" "}
              <span className="text-teal">&quot;Full Stack Developer&quot;</span>
              ,
            </div>
            <div className="pl-4">
              <span className="text-blue">experience</span>:{" "}
              <span className="text-teal">&quot;1+ Years&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-blue">techStack</span>: [
              <span className="text-teal">&quot;React.js&quot;</span>,{" "}
              <span className="text-teal">&quot;Next.js&quot;</span>,{" "}
              <span className="text-teal">&quot;Node.js&quot;</span>,{" "}
              <span className="text-teal">&quot;PostgreSQL&quot;</span>],
            </div>
            <div className="pl-4">
              <span className="text-blue">philosophy</span>:{" "}
              <span className="text-teal">
                &quot;Clean, responsive, performance-first&quot;
              </span>
            </div>
            <div>{"}"};</div>
          </div>
          <div className="mx-5 mb-5 flex items-center gap-2 font-mono text-xs text-teal bg-teal/10 border border-teal/20 rounded px-3 py-2">
            <span>✓</span> Build successful — 0 warnings, optimized build.
          </div>
        </div>
      </div>
    </section>
  );
}
