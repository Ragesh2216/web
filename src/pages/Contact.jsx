import React, { useState, useEffect } from "react";
import Subscribe from "../components/Subscribe";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with colorful animation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center animate-success-pop">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-600 mb-8 text-lg animate-fade-in-up delay-200">
              Thank you for reaching out. I've received your message and will get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Send Another Message
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
        <Subscribe />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-30"
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFE66D', '#FF9FF3'][i % 6],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 15 + 10}s`
            }}
          />
        ))}
      </div>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Get In Touch
          </h1>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Have questions, suggestions, or just want to say hello? I'd love to hear from you.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-green-200 via-emerald-200 to-cyan-200 rounded-2xl shadow-2xl p-8 h-full transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-blue-100 to-cyan-100",
                    title: "Email",
                    content: "info@thestackly.com",
                    link: "mailto:info@thestackly.com",
                    color: "text-blue-600 hover:text-blue-700"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-green-100 to-emerald-100",
                    title: "Phone",
                    content: "+91 12345 67890",
                    link: "tel:+911234567890",
                    color: "text-green-600 hover:text-green-700"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-purple-100 to-pink-100",
                    title: "Address",
                    content: "MMR COMPLEX, Salem, Tamil Nadu, India, 636008",
                    link: null,
                    color: "text-gray-600"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-orange-100 to-red-100",
                    title: "Response Time",
                    content: "Typically within 24 hours, Monday - Friday",
                    link: null,
                    color: "text-gray-600"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className={`${item.color} transition-colors duration-300`}>
                          {item.content}
                        </a>
                      ) : (
                        <p className={item.color}>{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[#d1f337] via-[#fc7fd2] to-[#6e0c80] rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-right">
              <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      label: "Full Name *",
                      name: "name",
                      type: "text",
                      placeholder: "Your full name"
                    },
                    {
                      label: "Email Address *",
                      name: "email",
                      type: "email",
                      placeholder: "your.email@example.com"
                    }
                  ].map((field, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100 + 600}ms` }}>
                      <label htmlFor={field.name} className="block text-sm font-medium text-white mb-2 drop-shadow">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                        placeholder={field.placeholder}
                        required
                      />
                    </div>
                  ))}
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2 drop-shadow">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2 drop-shadow">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg resize-vertical"
                    placeholder="Tell me more about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center animate-fade-in-up ${
                    isSubmitting ? 'animate-pulse' : ''
                  }`}
                  style={{ animationDelay: '1200ms' }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    "Send Message ✨"
                  )}
                </button>
                
                <p className="text-sm text-white/80 text-center animate-fade-in-up" style={{ animationDelay: '1400ms' }}>
                  * Required fields. Your information is secure and will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '1600ms' }}>
            <h2 className="text-2xl font-bold text-white mb-8 text-center drop-shadow-lg">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "How long does it take to get a response?",
                  answer: "I typically respond to all messages within 24 hours during weekdays."
                },
                {
                  question: "Do you accept guest posts?",
                  answer: "Yes! I'm always open to quality guest contributions. Please include writing samples with your message."
                },
                {
                  question: "Can I suggest a topic for your blog?",
                  answer: "Absolutely! I welcome topic suggestions and ideas from my readers."
                },
                {
                  question: "Do you offer consulting services?",
                  answer: "Yes, I provide consulting in web development and content strategy. Let's discuss your project needs."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in-up group hover:bg-white/30"
                  style={{ animationDelay: `${1800 + index * 100}ms` }}
                >
                  <h3 className="font-semibold text-white mb-3 group-hover:text-yellow-200 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-white/90 text-sm group-hover:text-white transition-colors duration-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Subscribe />

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
        
        @keyframes success-pop {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-success-pop {
          animation: success-pop 0.6s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
};

export default Contact;