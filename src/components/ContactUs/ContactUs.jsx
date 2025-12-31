import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaUser
} from "react-icons/fa";

// Import your room image
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        e.target,
        "your_user_id"
      )
      .then(
        (result) => {
          setIsSending(false);
          setIsSent(true);
          setTimeout(() => setIsSent(false), 3000);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
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
      details: ["+91 98765 43210", "+91 12345 67890"],
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email Address",
      details: ["info@shrikrishnastay.com", "support@shrikrishnastay.com"],
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
      {/* Hero Header Section - UPDATED WITH BACKGROUND IMAGE */}
      <section className="relative h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: `url(${contactHeroBg})` }}
        >
          {/* Dark Overlay for contrast */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-[#FEA116]"></div>
              <span className="uppercase font-bold text-[#FEA116] tracking-widest text-sm">
                Get In Touch
              </span>
              <div className="w-12 h-0.5 bg-[#FEA116]"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Contact <span className="text-[#FEA116]">Us</span>
            </h1>
            
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Have questions or need assistance? Reach out to us anytime. 
              We're here to make your stay unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-5 hover:shadow-2xl transition-all group"
              >
                <div className={`p-4 bg-gradient-to-br ${info.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{info.title}</h3>
                  {info.details.map((line, i) => (
                    <p key={i} className="text-gray-500 text-sm">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form and Map Container */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
              <form onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#FEA116] outline-none transition-all"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-600 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#FEA116] outline-none transition-all"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-gray-600 ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#FEA116] outline-none transition-all"
                    placeholder="Topic of discussion"
                    required
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-gray-600 ml-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#FEA116] outline-none transition-all resize-none"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center gap-3 transition-all ${
                      isSending ? 'bg-gray-400' : 'bg-gradient-to-r from-[#FEA116] to-yellow-600'
                    }`}
                  >
                    {isSending ? "Sending..." : "Send Message"} <FaPaperPlane />
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Map Area */}
            <div className="rounded-3xl shadow-xl overflow-hidden h-64 border-4 border-white">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.750383173748!2d77.6186422!3d12.9237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f9d99776d3%3A0x7e4465551f87961b!2sMadiwala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715421234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
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