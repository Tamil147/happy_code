import React from 'react'

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-48 h-48 md:w-72 md:h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <div className="animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="block text-white">Welcome to</span>
            <span className="gradient-text block text-5xl sm:text-6xl md:text-8xl">Happy Code</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-400 mb-6 md:mb-8 max-w-3xl mx-auto animate-slideUp px-2" style={{ animationDelay: '0.2s' }}>
            Full-Stack Developer specializing in <span className="text-green-400">MERN Stack</span> technologies.
            Building beautiful, scalable web applications with modern design principles.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 animate-slideUp px-4" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary hover:shadow-lg hover:shadow-green-500/50 text-sm md:text-base"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-sm md:text-base"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Floating cards */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16 px-4">
          {[
            { number: '50+', label: 'Projects' },
            { number: '30+', label: 'Clients' },
            { number: '5+', label: 'Years Exp' },
          ].map((stat, index) => (
            <div
              key={index}
              className="card animate-slideUp"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 md:w-6 md:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
