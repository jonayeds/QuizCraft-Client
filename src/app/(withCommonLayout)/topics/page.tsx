import { getAllTopics } from "@/services/topic/topicService"
import Link from "next/link"

const TopicsPage = async() => {
    const topics = await getAllTopics()
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#907CD3] to-[#4d438b] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <span className="text-2xl">📚</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quiz Topics
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Explore our diverse collection of topics and start creating engaging quizzes
          </p>
        </div>

        {/* Topics Grid */}
        {topics && topics.length > 0 ? (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
                <span className="text-white/80 text-sm mr-2">Available Topics:</span>
                <span className="text-white font-semibold">{topics.length}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {topics.map((topic, index) => (
                <div 
                  key={topic._id} 
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Topic Icon */}
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">
                      {getTopicIcon(topic.title, index)}
                    </span>
                  </div>

                  {/* Topic Title */}
                  <h2 className="text-white font-semibold text-lg mb-2 group-hover:text-white transition-colors duration-200">
                    {topic.title}
                  </h2>

                  {/* Topic Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {getTopicDescription(topic.title)}
                  </p>

                  {/* Action Button */}
                  <div className="flex items-center text-white/60 group-hover:text-white/80 text-xs">
                    <span className="mr-2">✨</span>
                    <span>Ready for quizzes</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Create Your Quiz?
                </h3>
                <p className="text-white/80 mb-6">
                  Choose any topic above and let our AI generate engaging questions for you
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/create-quiz"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#4d438b] hover:bg-white/90 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
                  >
                    <span className="mr-2">🚀</span>
                    Create Quiz
                  </Link>
                  <Link
                    href="/join-quiz"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold rounded-xl transition-all duration-200"
                  >
                    <span className="mr-2">🎯</span>
                    Join Quiz
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📚</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                No Topics Available
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Topics are being prepared. Check back soon for exciting quiz categories!
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#4d438b] hover:bg-white/90 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
              >
                <span className="mr-2">🏠</span>
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Helper function to get topic-specific icons
const getTopicIcon = (title: string, index: number) => {
  const iconMap: { [key: string]: string } = {
    'javascript': '⚡',
    'react': '⚛️',
    'python': '🐍',
    'node': '🟢',
    'html': '🌐',
    'css': '🎨',
    'typescript': '📘',
    'mongodb': '🍃',
    'sql': '🗄️',
    'git': '🔧',
    'docker': '🐳',
    'aws': '☁️',
    'mathematics': '🔢',
    'physics': '⚛️',
    'chemistry': '🧪',
    'biology': '🧬',
    'history': '📜',
    'geography': '🌍',
    'literature': '📖',
    'science': '🔬',
    'technology': '💻',
    'programming': '👨‍💻',
    'web': '🌐',
    'mobile': '📱',
    'design': '🎨',
    'business': '💼',
    'marketing': '📈',
    'finance': '💰',
    'economics': '📊'
  };

  const lowerTitle = title.toLowerCase();
  for (const [key, icon] of Object.entries(iconMap)) {
    if (lowerTitle.includes(key)) {
      return icon;
    }
  }
  
  // Default icons based on index
  const defaultIcons = ['📚', '🎯', '💡', '🔍', '⭐', '🎪', '🎭', '🎨', '🎵', '🎬'];
  return defaultIcons[index % defaultIcons.length];
};

// Helper function to get topic descriptions
const getTopicDescription = (title: string) => {
  const descriptions: { [key: string]: string } = {
    'javascript': 'Master the fundamentals of modern web development',
    'react': 'Learn the popular frontend library and its ecosystem',
    'python': 'Explore one of the most versatile programming languages',
    'node': 'Backend development with JavaScript runtime',
    'html': 'Structure and markup for web pages',
    'css': 'Styling and design for beautiful web interfaces',
    'typescript': 'Type-safe JavaScript for better development',
    'mongodb': 'NoSQL database for modern applications',
    'sql': 'Relational database queries and management',
    'mathematics': 'Core mathematical concepts and problem solving',
    'physics': 'Understanding the fundamental laws of nature',
    'chemistry': 'Chemical reactions and molecular structures',
    'biology': 'Life sciences and biological processes',
    'history': 'Past events and their impact on the present',
    'geography': 'Physical and human geography concepts',
    'literature': 'Classic and modern literary works',
    'science': 'Scientific methods and discoveries',
    'technology': 'Modern technological innovations',
    'business': 'Business strategy and management principles',
    'marketing': 'Promotion and customer engagement strategies'
  };

  const lowerTitle = title.toLowerCase();
  for (const [key, description] of Object.entries(descriptions)) {
    if (lowerTitle.includes(key)) {
      return description;
    }
  }
  
  return 'Test your knowledge with engaging questions and challenges';
};

export default TopicsPage