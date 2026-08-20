import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      // Simulate form interaction response
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0F0E] relative border-t border-[#29312F]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Contact & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121817] border border-[#29312F] text-xs font-mono text-[#B6FF00]">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let's build something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#B6FF00]">
                  meaningful.
                </span>
              </h2>
              <p className="text-[#A7B0AD] text-base leading-relaxed">
                Have a project, opportunity, or idea? I'd love to hear about it. Feel free to reach out via the contact form or social profiles.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href="mailto:afnan.inayat@example.com"
                className="w-full flex items-center justify-between p-4 rounded-xl bg-[#121817] border border-[#29312F] text-white hover:border-[#B6FF00] hover:text-[#B6FF00] transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-[#1A211F] text-[#B6FF00] group-hover:bg-[#B6FF00] group-hover:text-[#0B0F0E] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#6F7975]">DIRECT EMAIL</div>
                    <div className="text-sm font-semibold">afnaninayat@gmail.com</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#B6FF00] opacity-0 group-hover:opacity-100 transition-opacity">Send Mail →</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-xl bg-[#121817] border border-[#29312F] text-white hover:border-[#B6FF00] hover:text-[#B6FF00] transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-[#1A211F] text-[#B6FF00] group-hover:bg-[#B6FF00] group-hover:text-[#0B0F0E] transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#6F7975]">GITHUB PROFILE</div>
                    <div className="text-sm font-semibold">github.com/afnaninayat</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#B6FF00] opacity-0 group-hover:opacity-100 transition-opacity">View Repos →</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-xl bg-[#121817] border border-[#29312F] text-white hover:border-[#B6FF00] hover:text-[#B6FF00] transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-[#1A211F] text-[#B6FF00] group-hover:bg-[#B6FF00] group-hover:text-[#0B0F0E] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#6F7975]">LINKEDIN NETWORK</div>
                    <div className="text-sm font-semibold">linkedin.com/in/afnaninayat</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#B6FF00] opacity-0 group-hover:opacity-100 transition-opacity">Connect →</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#121817] border border-[#29312F] rounded-2xl p-6 sm:p-8 shadow-2xl relative">

              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <span>Send a Message</span>
                <Sparkles className="w-4 h-4 text-[#B6FF00]" />
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#1A211F] border border-[#22C55E]/40 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#22C55E]/20 text-[#22C55E] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Received!</h4>
                  <p className="text-sm text-[#A7B0AD] max-w-md mx-auto">
                    Thank you for reaching out, Afnan will respond to your message shortly. (Form structure ready for backend SMTP/Email service integration).
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-[#121817] border border-[#29312F] text-xs font-semibold text-[#B6FF00] hover:bg-[#29312F] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-mono text-[#A7B0AD]">
                        YOUR NAME <span className="text-[#B6FF00]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-xl bg-[#1A211F] border text-sm text-white placeholder-[#6F7975] focus:outline-none transition-colors ${errors.name ? 'border-[#EF4444]' : 'border-[#29312F] focus:border-[#B6FF00]'
                          }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-[#EF4444] flex items-center space-x-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-mono text-[#A7B0AD]">
                        YOUR EMAIL <span className="text-[#B6FF00]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#1A211F] border text-sm text-white placeholder-[#6F7975] focus:outline-none transition-colors ${errors.email ? 'border-[#EF4444]' : 'border-[#29312F] focus:border-[#B6FF00]'
                          }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-[#EF4444] flex items-center space-x-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-[#A7B0AD]">
                      SUBJECT
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Software Development Project / Hiring Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-[#1A211F] border border-[#29312F] text-sm text-white placeholder-[#6F7975] focus:outline-none focus:border-[#B6FF00] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-mono text-[#A7B0AD]">
                      MESSAGE <span className="text-[#B6FF00]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, question, or opportunity..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#1A211F] border text-sm text-white placeholder-[#6F7975] focus:outline-none transition-colors resize-none ${errors.message ? 'border-[#EF4444]' : 'border-[#29312F] focus:border-[#B6FF00]'
                        }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-xs text-[#EF4444] flex items-center space-x-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-[#B6FF00] text-[#0B0F0E] font-bold text-sm hover:bg-[#9BE600] transition-all shadow-[0_0_20px_rgba(182,255,0,0.3)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <span className="text-[11px] font-mono text-[#6F7975]">
                      Client validation enabled • Instant submission feedback
                    </span>
                  </div>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
