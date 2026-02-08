const skills = [
  "React.js",
  "JavaScript ES6+",
  "Tailwind CSS",
  "Redux",
  "REST APIs",
  "JWT Auth",
  "WebSocket",
  "Testing (Jest)",
  "Git & GitHub",
];

export default function Skills() {
  return (
    <section id="skills" className="reveal py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10 text-red-500 select-none">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-6 py-3 rounded-full text-sm font-semibold bg-white/5 border border-white/10 backdrop-blur hover:bg-pink-500 hover:text-white hover:scale-110 transition transform shadow"
>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
