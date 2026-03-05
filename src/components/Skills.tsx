import React from 'react'

interface Skill {
  category: string
  items: string[]
}

export const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('skills')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skills: Skill[] = [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux', 'Vite'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'REST API', 'GraphQL', 'Authentication', 'WebSocket'],
    },
    {
      category: 'Database',
      items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis', 'SQL', 'NoSQL'],
    },
    {
      category: 'Tools & DevOps',
      items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'GitHub Actions'],
    },
  ]

  return (
    <section id="skills" className="hidden md:block py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title" style={{ animation: isVisible ? 'fadeIn 0.8s ease-in-out' : 'none' }}>
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skillGroup, groupIndex) => (
            <div
              key={skillGroup.category}
              className="card"
              style={{
                animation: isVisible ? `slideUp 0.8s ease-out` : 'none',
                animationDelay: `${0.1 * groupIndex}s`,
              }}
            >
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 gradient-text">
                {skillGroup.category}
              </h3>

              <div className="space-y-2 md:space-y-3">
                {skillGroup.items.map((skill, index) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-2 group cursor-pointer"
                    style={{
                      animation: isVisible ? `slideInLeft 0.8s ease-out` : 'none',
                      animationDelay: `${0.15 * groupIndex + 0.05 * index}s`,
                    }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-300" />
                    <span className="text-gray-300 group-hover:text-green-400 transition-colors duration-300 text-sm md:text-base">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div
          className="mt-8 md:mt-12 card text-center"
          style={{
            animation: isVisible ? `slideUp 0.8s ease-out 0.4s both` : 'none',
          }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 gradient-text">Other Expertise</h3>
          <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed px-2">
            UI/UX Design, Testing (Jest, RTL), Performance Optimization, SEO, Web Accessibility,
            Agile Development, Technical Documentation, and Cloud Deployment
          </p>
        </div>
      </div>
    </section>
  )
}
