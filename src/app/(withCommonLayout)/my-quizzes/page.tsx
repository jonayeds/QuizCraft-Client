import { Button } from "@/components/ui/button";
import { getMyCreatedQuizzes, getMyJoinedQuizzes } from "@/services/quiz/quizService";
import { IQuiz } from "@/types/quiz";
import moment from "moment";
import Link from "next/link";

const MyQuizzesPage = async () => {
  const createdQuizzes = await getMyCreatedQuizzes();
  const joinedQuizzes = await getMyJoinedQuizzes()
  return (
    <div className="min-h-screen bg-gradient-to-br pt-28 from-[#907CD3] to-[#241E4E]  px-4 py-8">
      {/* Created Quizzes Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent mb-4">
            My Quizzes
          </h1>
          <p className="text-white/50 text-lg">Manage and track your quiz journey</p>
        </div>

        {/* Created Quizzes */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-2xl mr-4 shadow-lg">
              📝
            </div>
            <div>
              <h2 className="text-3xl  text-white font-light mb-1">Created Quizzes</h2>
              <p className="text-white/50">Quizzes you&apos;ve created and shared</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {createdQuizzes?.length ? (
              createdQuizzes.map((quiz) => (
                <div
                  className="group relative bg-white/20 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/70 overflow-hidden"
                  key={quiz._id}
                >
                  {/* Gradient header */}
                  <div className="h-2 bg-gradient-to-r from-[#907CD3] to-[#5e52ac] "></div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Quiz icon and status */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                        <span className="text-lg">🎯</span>
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                        Active
                      </div>
                    </div>

                    {/* Joining code */}
                    <div className="mb-4">
                      <label className="text-xs font-medium text-white/70 uppercase tracking-wider">Joining Code</label>
                      <div className="flex items-center mt-1">
                        <code className="bg-gray-100 text-purple-700 px-3 py-2 rounded-lg font-mono text-lg font-bold tracking-wider">
                          {quiz.joiningCode}
                        </code>
                        <button className="ml-2 text-white/60 hover:text-gray-600 transition-colors">
                          📋
                        </button>
                      </div>
                    </div>

                    {/* Created date */}
                    <div className="flex items-center text-sm text-white/70 mb-6">
                      <span className="mr-2">🕒</span>
                      Created {moment(quiz.createdAt).fromNow()}
                    </div>

                    {/* Action button */}
                    <Link href={`/my-quizzes/created/${quiz._id}`} className="block">
                      <Button
                        className="w-full bg-gradient-to-r from-[#907CD3] to-[#4d438b]  text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                        variant="default"
                      >
                        <span className="mr-2">👁️</span>
                        See Details
                      </Button>
                    </Link>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#907CD3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">📝</span>
                </div>
                <h3 className="text-xl font-semibold text-white/40 mb-2">No quizzes created yet</h3>
                <p className="text-white/40 mb-6">Start creating your first quiz to share with others!</p>
                <Link href="/create-quiz">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                    Create Your First Quiz
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Joined Quizzes */}
        <div>
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white text-2xl mr-4 shadow-lg">
              🎮
            </div>
            <div>
              <h2 className="text-3xl font-light text-white mb-1">Joined Quizzes</h2>
              <p className="text-white/50">Quizzes you&apos;ve participated in</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {joinedQuizzes?.length ? (
              joinedQuizzes.map((participator) => (
                <div
                  className="group relative bg-white/35 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                  key={participator._id}
                >
                  {/* Gradient header */}
                  <div className={`h-2 ${participator.isCompleted 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                    : 'bg-gradient-to-r from-orange-500 to-red-500'}`}>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Status indicator */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                        <span className="text-lg">{participator.isCompleted ? '✅' : '⏳'}</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        participator.isCompleted 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {participator.isCompleted ? 'Completed' : 'In Progress'}
                      </div>
                    </div>

                    {/* Join date */}
                    <div className="flex items-center text-sm text-white/70 mb-4">
                      <span className="mr-2">📅</span>
                      Joined {moment(participator.createdAt).fromNow()}
                    </div>

                    {/* Score section */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-1">Your Score</p>
                          {participator?.score && participator.isCompleted ? (
                            <div className="flex items-center">
                              <span className="text-2xl font-bold text-green-600">
                                {participator.score}
                              </span>
                              <span className="text-gray-500 ml-1">pts</span>
                            </div>
                          ) : (
                            <span className="text-gray-400 font-medium">Not completed</span>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-600 mb-1">Total</p>
                          <span className="text-xl font-bold text-gray-800">
                            {(participator.quiz as IQuiz).totalScore}
                          </span>
                        </div>
                      </div>
                      
                      {/* Progress bar */}
                      {participator.isCompleted && participator.score && (
                        <div className="mt-3">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                              style={{ 
                                width: `${Math.min((participator.score / (participator.quiz as IQuiz).totalScore) * 100, 100)}%` 
                              }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 text-center">
                            {Math.round((participator.score / (participator.quiz as IQuiz).totalScore) * 100)}% accuracy
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Action button */}
                    <Link href={`/my-quizzes/joined/${(participator.quiz as IQuiz)._id}`} className="block">
                      <Button
                        className={`w-full border-0 shadow-md hover:shadow-lg transition-all duration-300 ${
                          participator.isCompleted
                            ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
                            : 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white'
                        }`}
                        variant="default"
                      >
                        <span className="mr-2">
                          {participator.isCompleted ? '📊' : '▶️'}
                        </span>
                        {participator.isCompleted ? "See Answers" : "Answer Now"}
                      </Button>
                    </Link>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🎮</span>
                </div>
                <h3 className="text-xl font-semibold text-white/40 mb-2">No quizzes joined yet</h3>
                <p className="text-white/40 mb-6">Find and join exciting quizzes from other creators!</p>
                <Link href="/join-quiz">
                  <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                    Join a Quiz
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQuizzesPage;
