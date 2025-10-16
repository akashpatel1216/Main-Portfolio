'use client'

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary-600 to-blue-600 rounded-xl shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        University of South Florida
                      </h3>
                      <p className="text-xl text-primary-600 font-semibold mt-1">
                        Bachelor of Science in Computer Science
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start lg:items-end gap-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">Tampa, FL</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-primary-50 to-blue-50 text-primary-700 rounded-full font-semibold text-sm border border-primary-200">
                    Expected December 2026
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <h4 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary-600 to-blue-600 rounded-full"></div>
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'System Software Design',
                    'Analysis of Algorithms',
                    'Data Structures',
                    'Introduction to AI'
                  ].map((course) => (
                    <div
                      key={course}
                      className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-700 font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

