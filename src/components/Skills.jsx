const skills = [
  "Frontend: React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Redux, Context API",
  "Backend: Node.js, Express.js, REST APIs, JWT, OAuth 2.0",
  "Database: MongoDB, PostgreSQL, MySQL",
  "UI & Styling: Tailwind CSS, Material-UI, Bootstrap",
  "Testing: Jest, React Testing Library, Cypress",
  "Tools: Git, GitHub, Webpack, Vite, Postman"
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
