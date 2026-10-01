import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare, Copy, Check, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    track: 'General Inquiry',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('afnaninayat@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide a brief message';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', track: 'General Inquiry', subject: '', message: '' });
      }, 900);
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
    <section id="contact" className="py-24 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Outreach & Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-cyan-accent">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>LET'S CONNECT</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                Let’s Build Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent via-white to-violet-accent">
                  Meaningful.
                </span>
              </h2>
              <p className="text-text-secondary text-base leading-relaxed">
                Whether it’s digital systems, AI-driven products, or performance-focused digital marketing, I’m always open to meaningful opportunities and collaborations.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              
              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-surface border border-white/10 flex items-center justify-between group hover:border-cyan-accent/50 transition-colors">
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-surface-elevated text-cyan-accent border border-white/5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-text-muted">DIRECT INBOX</div>
                    <a
                      href="mailto:afnaninayat@gmail.com"
                      className="text-sm font-semibold text-white hover:text-cyan-accent transition-colors"
                    >
                      afnaninayat@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-surface-elevated text-text-muted hover:text-cyan-accent border border-white/5 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/afnaninayat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-surface border border-white/10 hover:border-violet-accent/50 transition-all group"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-surface-elevated text-violet-accent border border-white/5">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-text-muted">PROFESSIONAL NETWORK</div>
                    <div className="text-sm font-semibold text-white group-hover:text-violet-accent transition-colors">
                      linkedin.com/in/afnaninayat
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-violet-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Connect →
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/afnaninayat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-surface border border-white/10 hover:border-cyan-accent/50 transition-all group"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-surface-elevated text-cyan-accent border border-white/5">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-text-muted">SOURCE CODE & PROJECTS</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-accent transition-colors">
                      github.com/afnaninayat
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Inspect →
                </span>
              </a>

            </div>

            {/* Availability Indicator */}
            <div className="p-4 rounded-2xl bg-surface-elevated border border-white/5 flex items-center space-x-3 text-xs text-text-secondary">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for engineering roles, consulting, and marketing projects.</span>
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
            <div className="bg-surface border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">

              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <span>Send a Message</span>
                <Sparkles className="w-4 h-4 text-cyan-accent" />
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-surface-elevated border border-emerald-500/40 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Delivered!</h4>
                  <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Afnan will review your message and reply promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-surface border border-white/10 text-xs font-semibold text-cyan-accent hover:border-cyan-accent transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                  {/* Track Interest Selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-text-muted">
                      INQUIRY TRACK
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Engineering & IC', 'Digital Marketing', 'General / Both'].map((trackOption) => (
                        <button
                          key={trackOption}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, track: trackOption }))}
                          className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                            formData.track === trackOption
                              ? 'bg-cyan-accent/15 text-cyan-accent border-cyan-accent/40 font-semibold'
                              : 'bg-surface-elevated text-text-muted border-white/5 hover:text-white'
                          }`}
                        >
                          {trackOption}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-mono text-text-muted">
                        YOUR NAME <span className="text-cyan-accent">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-surface-elevated border text-sm text-white placeholder-text-muted focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500' : 'border-white/10 focus:border-cyan-accent'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 flex items-center space-x-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-mono text-text-muted">
                        YOUR EMAIL <span className="text-cyan-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-surface-elevated border text-sm text-white placeholder-text-muted focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/10 focus:border-cyan-accent'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 flex items-center space-x-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-mono text-text-muted">
                      SUBJECT / OPPORTUNITY
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Engineering Role / E-Commerce Growth Project"
                      className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/10 text-sm text-white placeholder-text-muted focus:outline-none focus:border-cyan-accent transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono text-text-muted">
                      MESSAGE <span className="text-cyan-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, team opportunity, or discussion topic..."
                      className={`w-full px-4 py-3 rounded-xl bg-surface-elevated border text-sm text-white placeholder-text-muted focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-white/10 focus:border-cyan-accent'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-xs text-red-400 flex items-center space-x-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-accent via-blue-500 to-violet-accent text-[#080B11] font-bold text-sm hover:opacity-95 transition-all shadow-cyan-glow disabled:opacity-50"
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
                    <span className="text-[11px] font-mono text-text-muted">
                      Direct notification enabled • Responses sent within 24 hours
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
