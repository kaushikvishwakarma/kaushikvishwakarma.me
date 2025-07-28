import { Code, Database, Globe, Smartphone } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-8 h-8" />,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend',
      icon: <Database className="w-8 h-8" />,
      skills: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Tools & Technologies',
      icon: <Code className="w-8 h-8" />,
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'VS Code', 'Figma', 'Postman']
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="w-8 h-8" />,
      skills: ['React Native', 'Responsive Design', 'PWA', 'Mobile-First Design']
    }
  ]

  return (
    <section id="skills" className="py-20 bg-primary-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-4 text-primary-600">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium inline-block mr-2 mb-2"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary-900 mb-6">
            Always Learning
          </h3>
          <p className="text-primary-600 max-w-3xl mx-auto">
            Technology evolves rapidly, and I&apos;m committed to staying current with the latest trends and best practices. 
            Currently exploring: AI/ML integration, Web3 technologies, and advanced React patterns.
          </p>
        </div>
      </div>
    </section>
  )
}
