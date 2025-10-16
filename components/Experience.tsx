'use client'

export default function Experience() {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'University of South Florida',
      location: 'Tampa, FL',
      period: 'Aug 2025 – Present',
      highlights: [
        'Selected as 1 of only 3 students to develop an AI-powered grading system under faculty supervision, impacting 45,000+ students across the university',
        'Engineered the core grading model in Python with Canvas LMS API integration for automated assessment',
        'Implemented rule-based NLP feedback generation, reducing manual grading time by 40%',
        'Conducted performance tests achieving a 2× boost in grading throughput and 35% improvement in reliability',
        'Optimized model inference, cutting grading latency from 4.8s → 2.3s per submission',
        'Co-authoring a faculty-supervised research paper on AI in education, currently under review'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Application Developer',
      company: 'University of South Florida',
      location: 'Tampa, FL',
      period: 'May 2025 – Aug 2025',
      highlights: [
        'Built an AI-driven course companion within Canvas LMS, adopted by 10+ professors and supporting 1,000+ students',
        'Improved AI-generated question relevance by 25% through algorithmic fine-tuning and feedback iteration',
        'Developed responsive and adaptive course interfaces, increasing student engagement by 30%',
        'Redesigned information architecture, reducing course content retrieval time by 45%',
        'Implemented GitHub Actions CI/CD pipelines, reducing deployment errors by 60%'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Web Developer & Registered Pharmacy Technician',
      company: 'Prime Rx Pharmacy',
      location: 'Tampa, FL',
      period: 'May 2022 – Dec 2024',
      highlights: [
        'Led full-stack website development using the MERN Stack, boosting online retention by 20% and new-customer inquiries by 15%',
        'Integrated real-time dashboards for inventory and prescriptions, improving processing speed by 35%',
        'Processed 100+ prescriptions daily with 100% accuracy, ensuring full regulatory compliance',
        'Handled 200+ monthly patient inquiries on medication and insurance, maintaining top-tier service quality'
      ],
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary-300 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 w-5 h-5 bg-primary-400 rounded-full blur animate-pulse"></div>
                    <div className="relative w-5 h-5 bg-gradient-to-br from-primary-600 to-blue-600 rounded-full border-4 border-white shadow-xl"></div>
                  </div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      <div className={`inline-block px-5 py-2 rounded-full text-white text-sm font-semibold mb-5 bg-gradient-to-r ${exp.color} shadow-lg`}>
                        {exp.period}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {exp.title}
                      </h3>
                      
                      <div className={`flex items-center gap-2 text-primary-600 font-semibold mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>{exp.company}</span>
                      </div>

                      <div className={`flex items-center gap-2 text-gray-600 mb-6 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm">{exp.location}</span>
                      </div>

                      <ul className={`space-y-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3">
                            {index % 2 === 0 ? (
                              <>
                                <span className="flex-1 text-gray-700 leading-relaxed text-sm">{highlight}</span>
                                <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                              </>
                            ) : (
                              <>
                                <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                                <span className="flex-1 text-gray-700 leading-relaxed text-sm">{highlight}</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

