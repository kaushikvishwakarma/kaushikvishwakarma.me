import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'KAVLoyalty - Customer Loyalty Web Application',
      description: 'A comprehensive full-stack customer loyalty web application developed during my 2-month internship at KAVLoyalty. Features secure backend APIs, user authentication, reward systems, customer modules, and transaction management. Independently handled everything from backend logic to frontend user interfaces.',
      technologies: ['Node.js', 'Express.js', 'React.js', 'AWS DynamoDB', 'JWT', 'REST APIs'],
      github: '#',
      demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7350036991461265409/',
      image: '/api/placeholder/400/250',
      featured: true,
      internship: true
    },
    {
      title: 'ChatterHub - Real-time Chat Application',
      description: 'A modern web-based chat application built to simplify real-time communication. Features smooth and secure user authentication with Clerk, real-time messaging powered by GetStream, and seamless user experience. Deployed on Vercel for optimal performance.',
      technologies: ['React', 'Clerk', 'GetStream', 'Ngrok', 'Vercel', 'Real-time Messaging'],
      github: '#',
      demo: 'https://chatterhub-alpha.vercel.app/',
      linkedinPost: 'https://www.linkedin.com/posts/kaushik-vish_webdevelopment-chatapplication-projectshowcase-activity-7286246295617331200-cFGr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVo-c4BVRZE2KkXNSVFhhtgl-hL_dLpjBE',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'SmartSikshak - AI-Powered Education Platform',
      description: 'An all-in-one College Mentor-Teacher-Student Web App built during Lakecity Hack 2025. Features AI-powered grading & feedback with Gemini API, facial recognition attendance system, and real-time doubt solving. Allows mentors to manage teachers/students/classes, teachers to upload materials, and students to access everything in one place.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Gemini API', 'Face API', 'AI/ML', 'Facial Recognition'],
      github: 'https://github.com/kaushikvishwakarma/SmartSikshak',
      demo: '#',
      linkedinPost: 'https://www.linkedin.com/posts/kaushik-vish_lakecityhack-hackathonjourney-aiineducation-activity-7320850018851016704-4iOz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVo-c4BVRZE2KkXNSVFhhtgl-hL_dLpjBE',
      image: '/api/placeholder/400/250',
      hackathon: true
    },
    {
      title: 'Goal Staker - Web3 Goal Tracking App',
      description: 'A Web3-based goal tracking application where users can set goals and commit them on the Ethereum blockchain using MetaMask. Designed to keep users motivated and accountable by storing goals on-chain so users can\'t cheat their own goals. Features MetaMask login and blockchain-based goal saving.',
      technologies: ['Next.js', 'MongoDB', 'Web3.js', 'MetaMask', 'Ethereum Blockchain', 'Smart Contracts'],
      github: '#',
      demo: '#',
      linkedinPost: 'https://www.linkedin.com/posts/kaushik-vish_hackathon-goalstaker-tiips-activity-7314531920967610368-N_ms?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVo-c4BVRZE2KkXNSVFhhtgl-hL_dLpjBE',
      image: '/api/placeholder/400/250',
      hackathon: true
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills. Built with modern web technologies and optimized for performance with clean design and smooth animations.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      github: 'https://github.com/kaushikvishwakarma/kaushikvishwakarma.me',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Unity3D Game Development Project',
      description: 'A comprehensive game development project built using Unity3D and C#. Features advanced game mechanics, interactive gameplay elements, and optimized performance. Demonstrates skills in game design, programming, and development workflow.',
      technologies: ['Unity3D', 'C#', 'Game Development', 'Object-Oriented Programming', 'Game Design'],
      github: '#',
      demo: '#',
      linkedinPost: 'https://www.linkedin.com/posts/kaushik-vish_gamedevelopment-unity3d-csharp-activity-7319625913585819648-KBiy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVo-c4BVRZE2KkXNSVFhhtgl-hL_dLpjBE',
      image: '/api/placeholder/400/250',
      internship: true
    },
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
            Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge and learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in ${
                project.featured ? 'border-primary-400 ring-2 ring-primary-200 lg:col-span-2' : 'border-primary-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className={`bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center ${
                project.featured ? 'h-64' : 'h-48'
              }`}>
                <div className={`text-primary-400 font-bold ${
                  project.featured ? 'text-6xl' : 'text-4xl'
                }`}>
                  {project.featured ? 'KAV' : project.title.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.featured && (
                    <div className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                      Featured Project
                    </div>
                  )}
                  {project.internship && (
                    <div className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                      Internship
                    </div>
                  )}
                  {project.hackathon && (
                    <div className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                      Hackathon
                    </div>
                  )}
                </div>
                
                <h3 className={`font-semibold text-primary-900 mb-2 ${
                  project.featured ? 'text-2xl' : 'text-xl'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-primary-600 mb-4 ${
                  project.featured ? 'text-base' : 'text-sm'
                } line-clamp-3`}>
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
                  {project.github !== '#' && (
                    <a 
                      href={project.github}
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-900 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.demo !== '#' && (
                    <a 
                      href={project.demo}
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-900 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">
                        {project.featured ? 'LinkedIn Post' : 'Live Demo'}
                      </span>
                    </a>
                  )}
                  {project.linkedinPost && (
                    <a 
                      href={project.linkedinPost}
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-900 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">LinkedIn Post</span>
                    </a>
                  )}
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
