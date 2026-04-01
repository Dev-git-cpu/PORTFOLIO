import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const SaveHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/message", {
        name,
        email,
        message,
      });

      setname("");
      setemail("");
      setmessage("");

      toast.success("Message sent successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="bg-[#0b0f0f] text-white px-6 md:px-16 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold">
            Get in <span className="text-emerald-400">Touch</span>
          </h1>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT - CONTACT INFO */}
          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-emerald-400/40 transition">
              <div className="flex items-center gap-4">
                <MdOutlineMail className="text-emerald-400" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <h3 className="font-medium">devsonone222@gmail.com</h3>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-emerald-400/40 transition">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-emerald-400" size={20} />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <h3 className="font-medium">6267254284</h3>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-emerald-400/40 transition">
              <div className="flex items-center gap-4">
                <FaLocationDot className="text-emerald-400" size={20} />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <h3 className="font-medium">Bhilai, Chhattisgarh</h3>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT - FORM */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">

            <h3 className="text-xl font-semibold mb-2">
              Send Me a Message
            </h3>

            <p className="text-gray-400 mb-6 text-sm">
              Fill out the form and I’ll get back to you soon.
            </p>

            <form onSubmit={SaveHandler} className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                focus:outline-none focus:border-emerald-400 text-sm"
              />

              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                focus:outline-none focus:border-emerald-400 text-sm"
              />

              <textarea
                rows="4"
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                focus:outline-none focus:border-emerald-400 text-sm"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition font-medium shadow-lg shadow-emerald-500/20"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;