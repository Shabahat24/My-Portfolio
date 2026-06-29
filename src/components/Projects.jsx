const projects = [
  {
    title: "PulseForge",
    description:
      "A fitness-focused MERN application designed for calorie tracking, workout planning, and progress monitoring with personalized recommendations.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: null,
    github: null,
  },
  {
    title: "VidPress",
    description:
      "A real-time video streaming platform using React, HLS, and WebSocket with efficient data handling and live notifications.",
    tech: ["React", "Node.js", "HLS", "WebSocket"],
    live: null,
    github: "https://github.com/Shabahat24/VidPress",
  },
  {
    title: "Road Trip Planner",
    description:
      "A MERN-based route planning app with Google Maps integration and multi-stop trip optimization.",
    tech: ["React", "Node.js", "MongoDB", "Google Maps API"],
    live: "https://road-trip-planner-dun.vercel.app/",
    github: "https://github.com/Shabahat24/Road-trip-planner",
  },
  {
    title: "Golf Charity Platform",
    description:
      "A full-stack donation platform with secure payment integration and subscription-based charity support.",
    tech: ["Next.js", "Supabase", "Stripe"],
    live: "https://golf-charity-one-gilt.vercel.app",
    github: "https://github.com/Shabahat24/Golf-Charity",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="reveal py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-red-500 select-none">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:border-pink-500/40 transition"
          >
            <h3 className="text-2xl font-semibold mb-3 text-white">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white font-medium hover:scale-105 transition"
                >
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition"
                >
                  GitHub
                </a>
              )}

              {!project.live && !project.github && (
                <span className="text-gray-500 text-sm">
                  Project in progress
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}