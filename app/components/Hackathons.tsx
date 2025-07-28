import { Trophy, Calendar, Users, ExternalLink, Github } from 'lucide-react'

export default function Hackathons() {
  const hackathons = [
    {
      title: 'TIIPS Hackathon - Goal Staker',
      organizer: 'TIIPS Institute, Greater Noida',
      date: 'December 2024',
      position: 'Participant',
      description: 'Built Goal Staker, a Web3-based goal tracking app where users can set goals and commit them on the Ethereum blockchain using MetaMask. The concept focuses on keeping users motivated and accountable by storing goals on-chain so users can\'t cheat their own goals. Features MetaMask login and blockchain-based goal saving.',
      technologies: ['Next.js', 'MongoDB', 'Web3.js', 'MetaMask', 'Ethereum Blockchain', 'Smart Contracts'],
      teamSize: 4,
      teammates: ['Uday Kumar', 'Shreshthi Singh Rajput', 'Ayush Kumar'],
      link: 'https://www.linkedin.com/posts/kaushik-vish_hackathon-goalstaker-tiips-activity-7314531920967610368-N_ms?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVo-c4BVRZE2KkXNSVFhhtgl-hL_dLpjBE',
      achievement: 'Web3 Innovation',
      featured: true
    },
    {
      title: 'Lakecity Hack 2025 - College Mentor-Teacher-Student Web App',
      organizer: 'Jagran Lakecity University, Bhopal',
      date: 'January 2025',
      position: 'Participant',
      description: 'Built an all-in-one College Mentor-Teacher-Student Web App in 24 hours. Features AI-powered grading & feedback with Gemini API, facial recognition attendance system via webcam, and real-time doubt solving. The app allows mentors to manage teachers/students/classes, teachers to upload materials and recordings, and students to access everything in one place.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Gemini API', 'Face API', 'AI/ML', 'Facial Recognition'],
      teamSize: 5,
      teammates: ['Kundan Kumar', 'Sujal Khandait', 'Chirag Dev', 'Harsh Vardhan'],
      github: 'https://github.com/kaushikvishwakarma/SmartSikshak',
      link: 'https://www.linkedin.com/posts/kaushik-vish_lakecityhack-hackathonjourney-aiineducation-activity-7320850018851016704-4iOz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEVo-c4BVRZE2KkXNSVFhhtgl-hL_dLpjBE',
      achievement: 'Innovation Sprint',
      featured: true
    },
    
  ]

  return (
    <section id="hackathons" className="py-20 bg-primary-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
            Hackathons & Competitions
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Challenging myself through competitive programming and innovation contests. 
            Here are some of the hackathons I&apos;ve participated in and achievements earned.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <div 
              key={hackathon.title}
              className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in ${
                hackathon.featured ? 'ring-2 ring-primary-200 border-primary-300' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">
                    {hackathon.title}
                  </h3>
                  <p className="text-primary-600 text-sm mb-1">
                    Organized by {hackathon.organizer}
                  </p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg text-primary-600 ml-4">
                  <Trophy size={24} />
                </div>
              </div>
              
              {/* Achievement Badge */}
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                  <Trophy size={14} />
                  {hackathon.achievement}
                </div>
                {hackathon.featured && (
                  <div className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-medium rounded-full">
                    Recent
                  </div>
                )}
              </div>
              
              {/* Details */}
              <div className="flex items-center gap-4 text-sm text-primary-600 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {hackathon.date}
                </div>
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  Team of {hackathon.teamSize}
                </div>
              </div>
              
              {/* Teammates */}
              {hackathon.teammates && (
                <div className="mb-3">
                  <p className="text-sm text-primary-600 mb-1">Team Members:</p>
                  <div className="flex flex-wrap gap-1">
                    {hackathon.teammates.map((teammate) => (
                      <span 
                        key={teammate}
                        className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs"
                      >
                        {teammate}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Description */}
              <p className="text-primary-600 text-sm mb-4 leading-relaxed">
                {hackathon.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {hackathon.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex space-x-4">
                {hackathon.github && (
                  <a 
                    href={hackathon.github}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-900 transition-colors duration-200 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} />
                    View Code
                  </a>
                )}
                {hackathon.link !== '#' && (
                  <a 
                    href={hackathon.link}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-900 transition-colors duration-200 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    View LinkedIn Post
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-primary-600 mb-4">
            Always looking for new challenges and opportunities to innovate!
          </p>
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Let&apos;s Collaborate
          </a>
        </div>
      </div>
    </section>
  )
}
