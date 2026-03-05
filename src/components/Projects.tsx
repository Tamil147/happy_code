import React from 'react'
import carImg from '../assets/car-img.jpeg'
import bikeImg from '../assets/bike-img.jpg'
import Ecom from '../assets/ecom-img.jpeg'

interface Project {
    id: number
    title: string
    description: string
    tags: string[]
    image: string
    link: string
}

export const Projects: React.FC = () => {
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.1 }
        )

        const element = document.getElementById('projects')
        if (element) observer.observe(element)

        return () => observer.disconnect()
    }, [])

    const projects: Project[] = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform with real-time inventory management and payment integration.',
            tags: ['React', 'Node.js', 'MongoDB',],
            image: Ecom,
            link: 'https://tamil147.github.io/e-commerce/',
        },
        {
            id: 2,
            title: 'Bike Showroom webapplication',
            description: 'A modern web application for showcasing and managing a bike showroom.',
            tags: ['React', 'Firebase', 'Tailwind', 'WebSocket'],
            image: bikeImg,
            link: 'https://giri9025.github.io/Bike-project/',
        },
        {
            id: 3,
            title: 'Social Media Dashboard',
            description: 'Analytics dashboard for managing multiple social media accounts with insights and reporting.',
            tags: ['React', 'redux'],
            image: carImg,
            link: 'https://tamil147.github.io/car-project/',
        }
    ]

    return (
        <section id="projects" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-900/50">
            <div className="max-w-7xl mx-auto">
                <h2 className="section-title" style={{ animation: isVisible ? 'fadeIn 0.8s ease-in-out' : 'none' }}>
                    Featured <span className="gradient-text">Projects</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group h-full overflow-hidden rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 bg-gray-800/30 backdrop-blur-sm flex flex-col"
                            style={{
                                animation: isVisible ? `slideUp 0.8s ease-out` : 'none',
                                animationDelay: `${0.1 * index}s`,
                            }}
                        >
                            {/* Project Image Container */}
                            <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-300" />

                                {/* Hover Badge */}
                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/90 text-white rounded-full text-xs font-semibold backdrop-blur-md" onClick={() => window.location.href = project.link}>
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM5.757 15.657a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM2 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.757 4.343a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707z" />
                                        </svg>
                                        View
                                    </span>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="flex-1 flex flex-col p-5 md:p-6">
                                {/* Title */}
                                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-green-400 transition-colors duration-300 line-clamp-2">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 border border-green-500/40 hover:border-green-400/60 transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link Button */}
                                <a
                                    href={project.link}
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 mt-auto bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform group-hover:translate-y-0 translate-y-1 opacity-90 hover:opacity-100 text-sm"
                                >
                                    View Project
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12 md:mt-16">
                    <button
                        className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                        style={{ animation: isVisible ? 'slideUp 0.8s ease-out 0.6s both' : 'none' }}
                    >
                        View More Projects
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
