
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br lg:pt-8 pt-24 from-[#907CD3] to-[#241E4E] text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4  pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  QuizCraft
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl">
                Create engaging quizzes with AI-powered questions, compete with friends, 
                and challenge your knowledge in a whole new way.
              </p>
            </div>

            {/* CTA Buttons */}
            <CTA/>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left max-w-md mx-auto lg:mx-0">
              <div>
                <div className="text-3xl font-bold text-yellow-300">1000+</div>
                <div className="text-sm text-gray-300">Quizzes Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-300">500+</div>
                <div className="text-sm text-gray-300">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-300">24/7</div>
                <div className="text-sm text-gray-300">AI Assistance</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Showcase */}
          <div className="lg:w-1/2 relative lg:scale-80 xl:scale-100 scale-80 md:scale-100">
            <div className="relative max-w-lg mx-auto">
              {/* Floating Cards */}
              <div className="absolute -top-10 -right-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-2xl mb-2">🧠</div>
                <h3 className="font-semibold mb-1">AI-Powered</h3>
                <p className="text-sm text-gray-200">Smart question generation</p>
              </div>

              <div className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold mb-1">Real-time</h3>
                <p className="text-sm text-gray-200">Instant feedback & results</p>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -left-20 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="text-2xl mb-2">👥</div>
                <h3 className="font-semibold mb-1">Multiplayer</h3>
                <p className="text-sm text-gray-200">Compete with friends</p>
              </div>

              {/* Central Quiz Preview */}
              <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 z-10 relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto">
                    📝
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sample Quiz</h3>
                  <p className="text-gray-200 mb-4">What is the capital of France?</p>
                  
                  <div className="space-y-2">
                    <div className="bg-white/10 rounded-lg p-3 text-left hover:bg-white/20 transition-colors cursor-pointer">
                      A) London
                    </div>
                    <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg p-3 text-left">
                      B) Paris ✓
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-left hover:bg-white/20 transition-colors cursor-pointer">
                      C) Berlin
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 pt-20 border-t border-white/10">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              QuizCraft?
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                🤖
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Question Generation</h3>
              <p className="text-gray-300">
                Leverage advanced AI to automatically generate high-quality quiz questions 
                on any topic you choose.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                🏆
              </div>
              <h3 className="text-xl font-semibold mb-3">Competitive Gaming</h3>
              <p className="text-gray-300">
                Challenge friends with unique joining codes and real-time multiplayer 
                quiz competitions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                📊
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Analytics</h3>
              <p className="text-gray-300">
                Track your progress, analyze performance, and see detailed statistics 
                for all your quizzes.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Results</h3>
              <p className="text-gray-300">
                Get immediate feedback and results as soon as you complete your quiz 
                or competition.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                🎨
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Themes</h3>
              <p className="text-gray-300">
                Create beautiful, personalized quizzes with custom themes and 
                branding options.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                🔒
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
              <p className="text-gray-300">
                Your data is protected with enterprise-grade security and privacy 
                controls.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 pt-16 text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Quiz Journey?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of users creating engaging quizzes and having fun while learning.
              Get started for free today!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Link href="/create-quiz">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Create Your First Quiz
                </Button>
              </Link>
              <Link href="/topics">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
                >
                  Explore Topics
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
