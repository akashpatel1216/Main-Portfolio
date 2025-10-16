'use client'

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Leadership & Involvement
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="relative bg-gradient-to-br from-yellow-500 via-orange-500 to-orange-600 p-8 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative flex items-center gap-5">
                  <div className="p-5 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-1">IEEE Marketing Chair</h3>
                    <p className="text-white/95 text-lg">Spring 2021 – Fall 2022</p>
                  </div>
                </div>
              </div>

              <div className="p-10">
                <div className="space-y-5 mb-10">
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">
                        Organized and promoted over <span className="font-bold text-orange-600">10 successful club events</span>, driving attendance and participation through targeted campaigns
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">
                        Worked closely with the events and finance teams to coordinate marketing efforts for large-scale university events
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="text-center p-5 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border border-orange-200">
                      <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">10+</div>
                      <div className="text-gray-600 font-medium">Events Organized</div>
                    </div>
                    <div className="text-center p-5 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border border-orange-200">
                      <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">2 Years</div>
                      <div className="text-gray-600 font-medium">Service Duration</div>
                    </div>
                    <div className="text-center p-5 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border border-orange-200">
                      <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">100%</div>
                      <div className="text-gray-600 font-medium">Commitment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

