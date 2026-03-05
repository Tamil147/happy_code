import React from 'react'

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title" style={{ animation: isVisible ? 'fadeIn 0.8s ease-in-out' : 'none' }}>
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6" style={{ animation: isVisible ? 'slideInLeft 0.8s ease-out' : 'none' }}>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full-Stack Developer with a deep love for creating exceptional digital experiences.
              With 5+ years of experience in web development, I specialize in building modern, scalable applications
              using the MERN stack.
            </p>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              My journey in tech started with a curiosity about how things work, which evolved into a professional
              career helping businesses solve complex problems through elegant code and innovative solutions.
            </p>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I'm committed to writing clean, maintainable code and staying up-to-date with the latest industry trends
              and best practices. When I'm not coding, you'll find me exploring new technologies or contributing to
              open-source projects.
            </p>

            <div className="pt-2 md:pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-block btn-primary hover:shadow-lg hover:shadow-green-500/50 text-sm md:text-base"
              >
                Let's Collaborate
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6" style={{ animation: isVisible ? 'slideInRight 0.8s ease-out' : 'none' }}>
            {[
              { label: 'Languages', value: '8+' },
              { label: 'Frameworks', value: '10+' },
              { label: 'Tools', value: '15+' },
              { label: 'Happy Clients', value: '30+' },
            ].map((item, index) => (
              <div
                key={index}
                className="card text-center"
                style={{ animationDelay: `${0.4 + index * 0.1}s`, animation: isVisible ? `slideUp 0.8s ease-out` : 'none' }}
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">{item.value}</div>
                <p className="text-gray-400 text-xs md:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
