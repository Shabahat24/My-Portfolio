// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex flex-col justify-center items-center text-center px-6"
//     >
//       <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
//         Shabahat Riyaz
//       </h1>

//       <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl">
//         Frontend Developer crafting modern, responsive & user-focused web
//         experiences using React, Tailwind & APIs.
//       </p>

//       <div className="flex gap-6">
//         <a
//           href="mailto:shabsriyaz@gmail.com"
//           className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 transition transform font-semibold shadow-lg"
//         >
//           Contact Me
//         </a>

//         <a
//           href="#projects"
//           className=" reveal px-8 py-3 rounded-xl border border-gray-600 hover:bg-white/10 transition backdrop-blur"
//         >
//           View Projects
//         </a>
//           {/* Download Resume */}
//      <a
//     href={`${import.meta.env.BASE_URL}resume.pdf`}
//     download
//     className="px-8 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition backdrop-blur font-semibold text-center"
//      >
//       Download Resume
//       </a> 
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      {/* Animated name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
      >
        Shabahat Riyaz
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl"
      >
        Frontend Developer crafting modern, responsive & user-focused web
        experiences using React, Tailwind & APIs.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a
          href="mailto:shabsriyaz@gmail.com"
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 transition transform font-semibold shadow-lg text-center"
        >
          Contact Me
        </a>

        <a
          href="#projects"
          className="px-8 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition backdrop-blur text-center"
        >
          View Projects
        </a>

        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download
          className="px-8 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition backdrop-blur font-semibold text-center"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
