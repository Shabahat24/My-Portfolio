export default function Experience() {
  return (
    <section id="experience" className="reveal py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center text-red-500 select-none">
        Experience
      </h2>

      <div className="space-y-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <h3 className="text-2xl font-semibold text-white">
              Frontend Developer — Fulcrum Designs
            </h3>
            <p className="text-gray-400">Jul 2024 – Present</p>
          </div>

          <ul className="list-disc list-inside text-gray-300 space-y-3 text-base leading-relaxed">
            <li>
              Developed and maintained scalable React.js applications, including
              a real-time HLS-based video surveillance system.
            </li>
            <li>
              Integrated REST APIs using Axios and improved data flow for better
              user experience and application performance.
            </li>
            <li>
              Implemented secure authentication systems using JWT and OAuth 2.0,
              including Google Sign-In.
            </li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <h3 className="text-2xl font-semibold text-white">
              Frontend Developer Trainee — Fulcrum Designs
            </h3>
            <p className="text-gray-400">Nov 2023 – Jun 2024</p>
          </div>

          <ul className="list-disc list-inside text-gray-300 space-y-3 text-base leading-relaxed">
            <li>
              Built responsive and reusable UI components using React.js and
              Bootstrap.
            </li>
            <li>
              Improved usability with form validation, loading states, and
              structured error handling.
            </li>
            <li>
              Strengthened frontend foundations through hands-on work with real
              application flows and reusable components.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}