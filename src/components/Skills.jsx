const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Redux",
      "Context API",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "OAuth 2.0",
    ],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Testing",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vite",
      "Webpack",
      "Jest",
      "React Testing Library",
      "Cypress",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="reveal py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center text-red-500 select-none">
        Skills
      </h2>

      <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        A strong foundation in modern frontend development, backend integration,
        databases, and developer tools used to build scalable web applications.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-5">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 border border-white/10 text-gray-200 hover:bg-pink-500 hover:text-white hover:scale-105 transition transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}