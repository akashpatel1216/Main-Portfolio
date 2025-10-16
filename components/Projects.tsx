'use client'

export default function Projects() {
  const projects = [
    {
      title: 'CourseLoop - Social Study Platform',
      description: 'Developed an iOS social platform connecting 500+ university students through real-time chat, posts, and comment threads.',
      technologies: ['SwiftUI', 'PostgreSQL', 'Serverless Functions', 'REST API', 'Swift Concurrency'],
      highlights: [
        'Implemented secure signup/login flow and anonymous username system via serverless functions integrated with PostgreSQL, ensuring 100% session integrity',
        'Integrated REST APIs with Swift Concurrency for instant cross-device synchronization, reducing message delivery latency by 60%',
        'Optimized data fetching and caching, improving app responsiveness by 40% under load testing'
      ],
      metrics: ['500+ Users', '60% Lower Latency', '40% Faster'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      websites: null
    },
    {
      title: 'End-to-End Business Websites',
      description: 'Delivered 4+ responsive websites for small businesses, achieving 90+ Lighthouse performance scores and sub-1.2s load times.',
      technologies: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'MongoDB', 'React', 'Next.js', 'Vercel'],
      highlights: [
        'Implemented a MongoDB-backed database system to securely track and display upcoming bookings, eliminating manual scheduling and cutting admin effort by 70%',
        'Integrated third-party payment APIs and contact forms for seamless transactions and client communication, handling 200+ monthly interactions',
        'Used Git/GitHub for version control and deployed production builds via Netlify/Vercel, ensuring continuous integration and uptime reliability'
      ],
      metrics: ['90+ Performance Score', '<1.2s Load Time', '70% Less Admin Work'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
      websites: [
        {
          name: '32Tropikey',
          url: 'https://32-tropikey-main-wvon.vercel.app/',
          description: 'Property Management Platform'
        },
        {
          name: 'ManyMen Moving',
          url: 'https://many-men-moving-git-main-aksah1281s-projects.vercel.app/',
          description: 'Moving Services Company'
        },
        {
          name: 'Prime Rx Pharmacy',
          url: 'https://pharmacy-website-akash.vercel.app/',
          description: 'Healthcare & Pharmacy Services'
        }
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Building innovative solutions that make a real impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-gray-100 group-hover:border-gray-200">
                {/* Project header */}
                <div className={`relative bg-gradient-to-br ${project.gradient} p-8 text-white overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                  <div className="relative flex items-start justify-between mb-6">
                    <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                  </div>
                  <h3 className="relative text-3xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="relative text-white/95 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="relative flex flex-wrap gap-2 mt-6">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project body */}
                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-primary-600 to-blue-600 rounded-full"></div>
                      Key Achievements
                    </h4>
                    <ul className="space-y-4">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 bg-gradient-to-r from-gray-50 to-blue-50 text-gray-700 rounded-lg text-xs font-medium shadow-sm border border-gray-200 hover:border-primary-400 hover:shadow-md hover:scale-105 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.websites && (
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Websites
                        </h4>
                        <div className="space-y-3">
                          {project.websites.map((website, i) => (
                            <a
                              key={i}
                              href={website.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:from-primary-50 hover:to-blue-100 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                            >
                              <div className="flex-1">
                                <div className="font-semibold text-gray-900 group-hover/link:text-primary-600 transition-colors">
                                  {website.name}
                                </div>
                                <div className="text-xs text-gray-600 mt-0.5">
                                  {website.description}
                                </div>
                              </div>
                              <svg className="w-5 h-5 text-primary-600 group-hover/link:translate-x-1 transition-transform flex-shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

