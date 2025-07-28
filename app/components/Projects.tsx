import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product catalog, shopping cart, and order management.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB'],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redux'],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather, forecasts, and weather maps. Built with React and integrated with weather APIs.',
      technologies: ['React', 'JavaScript', 'Weather API', 'Chart.js', 'CSS3'],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, SEO optimization, and content management system. Built with Next.js and headless CMS.',
      technologies: ['Next.js', 'MDX', 'Contentful', 'Vercel', 'SEO'],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills. Built with modern web technologies and optimized for performance.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, and file sharing capabilities. Built with Socket.io and React.',
      technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/250'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-white border border-primary-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-primary-400 text-4xl font-bold">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-primary-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-900 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-900 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Projects */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/kaushikvishwakarma"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
