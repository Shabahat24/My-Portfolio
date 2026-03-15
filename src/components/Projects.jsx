// const projects = [
//   "VidPress – Video Streaming Platform",
//   "Pariksha – Quiz Management System",
//   "Institute Portal – Educational Platform",
//   "Weather App – React + API",
//   "Expense Tracker – React + Tailwind",
// ];

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="reveal py-20 px-6 text-center"
//     >
//       <h2 className="text-4xl font-bold mb-12 text-red-500 select-none">Projects</h2>

//       <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//         {projects.map((project) => (
//           <div
//              key={project}
//              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl 
//                hover:scale-105 hover:border-pink-500/40 transition transform shadow-lg"
//                  >
//                   {project}
//                     </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  const featuredProjects = [
    "My-Portfolio",
    "PromptAlchemy",
    "Pariksha",
    "Tic-Tac-Toe",
    "Weather-App",
    "Expense-Tracker",
    "Note-App"
  ];

  useEffect(() => {
    fetch("https://api.github.com/users/Shabahat24/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (repo) =>
            !repo.fork &&
            featuredProjects.includes(repo.name)
        );

        setRepos(filtered);
      })
      .catch((err) => console.error("GitHub fetch error:", err));
  }, []);

  return (
    <section id="projects" className="reveal py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-red-500 select-none">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-105 hover:border-pink-500/40 transition duration-300 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-400 transition">
              {repo.name}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {repo.description || "No description available."}
            </p>

            <div className="text-xs text-gray-500">
              ⭐ {repo.stargazers_count} • 🍴 {repo.forks_count}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
