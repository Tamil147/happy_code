import React from 'react'
import emailjs from '@emailjs/browser'
import { EMAIL_CONFIG } from '../config/emailjs'

export const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  })
  const [isVisible, setIsVisible] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('contact')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: EMAIL_CONFIG.TO_EMAIL,
      }

      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)

    } catch (err) {
      console.error('Email send failed:', err)
      setError('Failed to send message. Please try again or contact me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: '𝕏', label: 'Twitter', link: '#' },
    { icon: 'in', label: 'LinkedIn', link: '#' },
    { icon: '⚙', label: 'GitHub', link: '#' },
    { icon: '💻', label: 'Portfolio', link: '#' },
  ]

  return (
    <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title" style={{ animation: isVisible ? 'fadeIn 0.8s ease-in-out' : 'none' }}>
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8" style={{ animation: isVisible ? 'slideInLeft 0.8s ease-out' : 'none' }}>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 gradient-text">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out if you'd like to collaborate!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 md:space-y-4">
              {[
                { label: 'Email', value: 'happycode2k26@gmail.com' },
                { label: 'Phone', value: '+91 9344647534' },
                { label: 'Location', value: 'kanchipuram' },
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">{item.label}</p>
                    <p className="text-white font-medium text-sm md:text-base">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">Follow me on</p>
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    className="card !p-2 md:!p-3 hover:scale-110 transition-transform duration-300"
                    title={social.label}
                  >
                    <span className="text-lg md:text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="card"
            style={{
              animation: isVisible ? 'slideInRight 0.8s ease-out' : 'none',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors duration-300 text-sm md:text-base"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors duration-300 text-sm md:text-base"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors duration-300 resize-none text-sm md:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Error Message */}
              {error && (
                <div className="p-3 md:p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300 animate-slideUp text-center text-sm">
                  {error}
                </div>
              )}

              {/* Success Message */}
              {submitted && (
                <div className="p-3 md:p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300 animate-slideUp text-center text-sm">
                  ✓ Thanks! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
