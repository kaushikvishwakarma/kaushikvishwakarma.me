import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-primary-50 pt-20">
      <div className="container-max section-padding text-center">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-primary-200 rounded-full flex items-center justify-center text-6xl font-bold text-primary-700">
            KV
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 animate-slide-up">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Kaushik Vishwakarma
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-primary-600 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer & Problem Solver
          </p>
          
          {/* Description */}
          <p className="text-lg text-primary-500 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            I create beautiful, responsive web applications with modern technologies. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a 
              href="https://github.com/kaushikvishwakarma" 
              className="p-3 text-primary-600 hover:text-primary-900 hover:bg-primary-100 rounded-full transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/kaushikvishwakarma" 
              className="p-3 text-primary-600 hover:text-primary-900 hover:bg-primary-100 rounded-full transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:kaushik@example.com" 
              className="p-3 text-primary-600 hover:text-primary-900 hover:bg-primary-100 rounded-full transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce-subtle">
          <ChevronDown size={32} className="text-primary-400 mx-auto" />
        </div>
      </div>
    </section>
  )
}
