import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-primary-600 mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg text-primary-600">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-medium text-primary-900">Email</div>
                  <div className="text-primary-600">kaushik@example.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg text-primary-600">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-medium text-primary-900">Phone</div>
                  <div className="text-primary-600">+91 12345 67890</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg text-primary-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-medium text-primary-900">Location</div>
                  <div className="text-primary-600">India</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Tell me more about your project or inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary justify-center"
              >
                <Mail size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
