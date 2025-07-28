import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Kaushik Vishwakarma</h3>
            <p className="text-primary-300 max-w-xs">
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-primary-300 hover:text-white transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="block text-primary-300 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#skills" className="block text-primary-300 hover:text-white transition-colors duration-200">
                Skills
              </a>
              <a href="#projects" className="block text-primary-300 hover:text-white transition-colors duration-200">
                Projects
              </a>
              <a href="#hackathons" className="block text-primary-300 hover:text-white transition-colors duration-200">
                Hackathons
              </a>
              <a href="#contact" className="block text-primary-300 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/kaushikvishwakarma" 
                className="p-3 bg-primary-800 hover:bg-primary-700 rounded-lg transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/kaushik-vish" 
                className="p-3 bg-primary-800 hover:bg-primary-700 rounded-lg transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:kaushik@example.com" 
                className="p-3 bg-primary-800 hover:bg-primary-700 rounded-lg transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-primary-300 text-sm">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-primary-300 flex items-center justify-center space-x-2">
            <span>© {currentYear} Kaushik Vishwakarma.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
