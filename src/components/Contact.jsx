// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="reveal py-20 px-6 text-center max-w-3xl mx-auto"
//     >
//       <h2 className="text-4xl font-bold mb-6 text-red-500 select-none">Contact</h2>

//       <p className="text-gray-400 mb-4 select-text text-lg">
//         shabsriyaz@gmail.com • 7007987639
//       </p>

//       <p className="text-gray-500 select-text text-lg">
//         Gorakhpur, Uttar Pradesh, India
//       </p>
//     </section>
//   );
// }


import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)



      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message. ❌ Try again.");
        }
      );
  };

  return (
    <section id="contact" className="reveal py-20 px-6 text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-red-500">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none"
        />

        <button
          type="submit"
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 transition transform font-semibold shadow-lg"
        >
          Send Message
        </button>

        {status && <p className="text-sm text-gray-300">{status}</p>}
      </form>
    </section>
  );
}
