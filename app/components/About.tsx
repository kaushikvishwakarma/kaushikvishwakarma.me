export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary-900 mb-4">
              Hello! I&apos;m Kaushik, a passionate developer based in India.
            </h3>
            
            <div className="space-y-4 text-primary-600">
              <p>
                I enjoy creating things that live on the internet, whether that be websites, 
                applications, or anything in between. My goal is to always build products that 
                provide pixel-perfect, performant experiences.
              </p>
              
              <p>
                I have experience working with modern web technologies and frameworks. 
                I&apos;m always eager to learn new technologies and tackle challenging problems.
              </p>
              
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, reading tech blogs, 
                or working on personal projects that interest me.
              </p>
            </div>
            
            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-900">2+</div>
                <div className="text-sm text-primary-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-900">20+</div>
                <div className="text-sm text-primary-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-900">10+</div>
                <div className="text-sm text-primary-600">Technologies</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-900">100%</div>
                <div className="text-sm text-primary-600">Dedication</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
              <div className="text-8xl font-bold text-primary-400">KV</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
