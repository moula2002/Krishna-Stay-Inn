import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaTimes
} from "react-icons/fa";

// Hero Image
import contactHeroBg from "../../assets/Home_Page_Banners/slide3.webp"; 

const ContactUs = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_pcauzy4",
        "template_5imvk1a",
        e.target,
        "KHXf0EoVTmzLbqz0Y"
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          setIsSending(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Our Address",
      details: ["Maruthi Nagar, Madivala", "Bengaluru, Karnataka 560068"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <FaPhoneAlt className="text-xl" />,
      title: "Phone Number",
      details: ["+91 9972014954",],
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email Address",
      details: ["krishnastayinn@gmail.com", "krishnastayinn2026@gmail.com"],
      color: "from-amber-500 to-orange-400"
    },
    {
      icon: <FaClock className="text-xl" />,
      title: "Working Hours",
      details: ["24/7 Support", "Check-in: 2:00 PM", "Check-out: 12:00 PM"],
      color: "from-green-500 to-emerald-400"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* SUCCESS MESSAGE */}
      <AnimatePresence>
        {isSent && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 right-4 md:right-6 z-50 max-w-md"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <FaCheckCircle className="text-3xl animate-pulse" />
                  <div>
                    <h3 className="font-bold text-lg">Message Sent!</h3>
                    <p className="text-sm text-emerald-100">
                      We’ll contact you soon.
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsSent(false)}>
                  <FaTimes />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative h-[400px] md:h-[550px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHeroBg})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-white mb-4"
          >
            Contact <span className="text-[#FEA116]">Us</span>
          </motion.h1>
          <p className="text-gray-200 max-w-xl mx-auto">
            Have questions or need assistance? Reach out anytime.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="container mx-auto px-4 py-12 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* INFO */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-5 rounded-2xl shadow flex gap-5"
              >
                <div className={`p-4 bg-gradient-to-br ${info.color} rounded-xl text-white`}>
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-bold">{info.title}</h3>
                  {info.details.map((d, i) => (
                    <p key={i} className="text-gray-500 text-sm">{d}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* FORM + MAP */}
          <div className="lg:col-span-2 space-y-8">

            {/* FORM */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

              <form onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="md:col-span-2 input"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="md:col-span-2 input resize-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSending}
                  className="md:col-span-2 bg-gradient-to-r from-[#FEA116] to-yellow-600 text-white py-4 rounded-xl font-bold flex justify-center gap-2"
                >
                  {isSending ? "Sending..." : "Send Message"} <FaPaperPlane />
                </button>
              </form>
            </div>

            {/* MAP (RESPONSIVE FIXED) */}
            <div className="rounded-3xl overflow-hidden shadow-xl w-full h-64 md:h-80 lg:h-96">
              <iframe
                title="Location Map"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750383173748!2d77.6186422!3d12.9237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f9d99776d3%3A0x7e4465551f87961b!2sMadiwala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715421234567!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
