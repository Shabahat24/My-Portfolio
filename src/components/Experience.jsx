export default function Experience() {
  return (
    <section id=" experience" className=" reveal py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center text-red-500 select-none">Experience</h2>

     <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">

        <h3 className="text-2xl font-semibold mb-3">
          Frontend Developer — Fulcrum Designs
        </h3>
        <p className="text-gray-400 mb-6">Feb 2023 – Present</p>

        <ul className="list-disc list-inside text-gray-400 space-y-3 text-lg">
          <li>Built real-time video streaming UI using React and HLS.</li>
          <li>Implemented JWT authentication and secure routing.</li>
          <li>Integrated REST APIs with error handling & loading states.</li>
          <li>Optimized performance with lazy loading and memoization.</li>
        </ul>
      </div>
    </section>
  );
}
