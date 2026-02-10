// import './index.css';
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import { useEffect } from "react";


// function App() {

//   useEffect(() => {
//     const reveals = document.querySelectorAll(".reveal");

//     const handleScroll = () => {
//       reveals.forEach((el) => {
//         const windowHeight = window.innerHeight;
//         const revealTop = el.getBoundingClientRect().top;

//         if (revealTop < windowHeight - 80) {
//           el.classList.add("active");
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);


//   return (
//     <div className="relative text-gray-100 min-h-screen font-sans overflow-x-hidden">

//       {/* 🌌 Clean background image */}
//       <img
//         src="/bg.png"
//         alt="background"
//         className="fixed inset-0 w-full h-full object-cover -z-20 scale-105 animate-[slowZoom_20s_ease-in-out_infinite]"/>

//       {/* 🌙 Very soft dark overlay (keeps minimal look) */}
//       <div className="fixed inset-0 bg-black/40 -z-10" />
//       {/* Navbar */}
//       <header className="sticky top-0 bg-gray-800 shadow-md z-50">
//         <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent tracking-wide cursor-pointer ">
//   Shabahat Riyaz
// </h1>
//           <ul className="hidden md:flex space-x-8 text-gray-300">
//             <li><a href="#hero" className="hover:text-red-500 transition">Home</a></li>
//             <li><a href="#about" className="hover:text-red-500 transition">About</a></li>
//             <li><a href="#skills" className="hover:text-red-500 transition">Skills</a></li>
//             <li><a href="#experience" className="hover:text-red-500 transition">Experience</a></li>
//             <li><a href="#projects" className="hover:text-red-500 transition">Projects</a></li>
//             <li><a href="#contact" className="hover:text-red-500 transition">Contact</a></li>
//           </ul>
//         </nav>
//       </header>

//       {/* Main content */}
//       <main className="max-w-7xl mx-auto px-6">
//         <Hero />
//         <About />
//         <Skills />
//         <Experience />
//         <Projects />
//         <Contact />
//       </main>

//       {/* Footer */}
//       <footer className="text-center py-6 text-gray-500 border-t border-gray-700 mt-12 select-none">
//         © 2026 Shabahat Riyaz | Built with React & Tailwind CSS
//       </footer>
//     </div>
//   );
// }

// export default App;

import { useEffect } from "react";
import './index.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 80) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // run once on load

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="relative text-gray-100 min-h-screen font-sans overflow-x-hidden">
<img
  src={`${import.meta.env.BASE_URL}bg.png`}
  alt="background"
  className="fixed inset-0 w-full h-full object-cover -z-20 scale-105 animate-[slowZoom_20s_ease-in-out_infinite]"
/>


      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/40 -z-10" />

      {/* Navbar */}
      <header className="sticky top-0 backdrop-blur-md bg-black/40 border-b border-white/10 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent tracking-wide cursor-pointer">
            Shabahat Riyaz
          </h1>
        </nav>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 space-y-32">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-700 mt-12 select-none">
        © 2026 Shabahat Riyaz | Built with React & Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
