

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#907CD3] to-[#4d438b] pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-8">
            <span className="text-4xl">🎯</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About QuizCraft
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Empowering educators and learners with intelligent, interactive quiz experiences powered by AI
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/80 leading-relaxed">
              To revolutionize the way people learn and assess knowledge by providing an intuitive platform 
              that generates intelligent quizzes, tracks progress, and makes learning engaging for everyone.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">👁️</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-white/80 leading-relaxed">
              To become the go-to platform for educators, students, and professionals seeking dynamic, 
              AI-powered assessment tools that adapt to individual learning needs and promote knowledge retention.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-white/80 text-lg">Powerful features designed for modern learning</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Generation</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Leverage advanced AI to automatically generate relevant, challenging questions on any topic
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Analytics</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Track performance, identify learning gaps, and monitor progress with detailed insights
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">🎮</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Interactive Experience</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Engaging, gamified learning environment that makes assessment enjoyable and effective
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Collaborative Learning</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Share quizzes, compete with peers, and learn together in a social environment
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Instant Results</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Get immediate feedback and detailed explanations to reinforce learning concepts
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cross-Platform</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Access your quizzes anywhere, anytime with our responsive, mobile-friendly design
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Built for Everyone</h2>
            <p className="text-white/80 text-lg">Designed with diverse users in mind</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👩‍🏫</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Educators</h3>
              <p className="text-white/70 text-sm">Create engaging assessments and track student progress</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Students</h3>
              <p className="text-white/70 text-sm">Test knowledge and improve learning outcomes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Professionals</h3>
              <p className="text-white/70 text-sm">Enhance skills and stay current with industry knowledge</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Organizations</h3>
              <p className="text-white/70 text-sm">Train teams and assess competency levels effectively</p>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 mb-16">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚙️</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Powered by Modern Technology</h2>
            <p className="text-white/80">Built with cutting-edge tools for optimal performance and user experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl mb-2">🧠</div>
              <h4 className="text-white font-medium mb-1">AI Integration</h4>
              <p className="text-white/60 text-xs">Advanced language models for content generation</p>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl mb-2">⚛️</div>
              <h4 className="text-white font-medium mb-1">React & Next.js</h4>
              <p className="text-white/60 text-xs">Modern frontend framework for fast, interactive UI</p>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-2xl mb-2">🗄️</div>
              <h4 className="text-white font-medium mb-1">Node.js & MongoDB</h4>
              <p className="text-white/60 text-xs">Scalable backend with flexible data storage</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of educators and learners who are already using QuizCraft to enhance their educational journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#4d438b] hover:bg-white/90 font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
              >
                <span className="mr-2">🚀</span>
                Create Account
              </a>
              <a
                href="/topics"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold text-lg rounded-xl transition-all duration-200"
              >
                <span className="mr-2">🔍</span>
                Explore Topics
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage