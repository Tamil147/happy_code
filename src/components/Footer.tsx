import React from 'react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-700/50 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div className="animate-fadeIn">
            <h3 className="text-xl md:text-2xl font-bold gradient-text mb-2">Happy Code</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Building beautiful web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 md:px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors duration-300 text-sm"
              />
              <button className="btn-primary !py-2 text-sm">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © {currentYear} Happy Code. All rights reserved.
          </p>

          <div className="flex gap-4 md:gap-6 mt-3 md:mt-0">
            {['Privacy', 'Terms', 'Sitemap'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-xs md:text-sm"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
