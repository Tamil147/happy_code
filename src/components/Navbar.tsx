import React from 'react'
import logo from '../assets/logo.png'

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
    }

    return (
        <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 md:h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 animate-fadeIn flex items-center gap-2">
                        <img src={logo} alt="Happy Code Logo" className="h-8 md:h-10 w-8 md:w-10" />
                        <span className="hidden sm:inline text-lg md:text-xl font-bold gradient-text">Happy Code</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {['home', 'projects', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="capitalize text-gray-300 hover:text-green-400 transition-colors duration-300 cursor-pointer text-sm lg:text-base"
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-green-400 p-2"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 space-y-1 animate-slideDown border-t border-gray-700/50 mt-2 pt-4">
                        {['home', 'about', 'projects', 'contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="block w-full text-left px-3 py-2 capitalize text-gray-300 hover:text-green-400 hover:bg-gray-800 rounded transition-colors duration-300 text-sm"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}
