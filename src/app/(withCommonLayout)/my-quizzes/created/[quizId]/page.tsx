import QuizQuestionsGenerator from "@/components/quiz/QuizQuestionsGenerator";
import {
  getASingleQuiz,
  getQuizParticipators,
} from "@/services/quiz/quizService";
import { getAllTopics } from "@/services/topic/topicService";
import { IUser } from "@/types/user";

const CreatedQuizPage = async ({
  params,
}: {
  params: Promise<{ quizId: string }>;
}) => {
  const quizId = (await params).quizId;
  const data = await getASingleQuiz(quizId);
  const topics = await getAllTopics();
  const participators = await getQuizParticipators(quizId);

  if (!data?.success) {
    return (
      <div className="min-h-screen pt-28 bg-gradient-to-br from-[#907CD3] to-[#4d438b] flex items-center justify-center px-2 sm:px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-xl sm:text-2xl">❌</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Quiz Not Found</h2>
          <p className="text-white/80 text-sm sm:text-base">The quiz you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }
  const quiz = data.data;

  return (
    <div className="min-h-screen pt-28 sm:pt-28 bg-gradient-to-br from-[#907CD3] to-[#4d438b] px-2 sm:px-4 py-4 sm:py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-8 border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
            {/* Total Score */}
            <div className="text-center lg:text-left">
              <p className="text-white/80 text-xs sm:text-sm font-medium mb-1">Total Score</p>
              <div className="flex items-center justify-center lg:justify-start">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{quiz.totalScore}</span>
                <span className="text-white/60 ml-2 text-sm sm:text-base">pts</span>
              </div>
            </div>

            {/* Joining Code */}
            <div className="text-center">
              <p className="text-white/80 text-xs sm:text-sm font-medium mb-2">Joining Code</p>
              <div className="bg-white/20 rounded-2xl px-4 py-2 sm:px-6 sm:py-3 inline-block">
                <span className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-white tracking-wider">
                  {quiz.joiningCode}
                </span>
              </div>
              <p className="text-white/60 text-xs mt-2">Share this code with participants</p>
            </div>

            {/* Questions Status */}
            <div className="text-center lg:text-right">
              {quiz?.questionsGenerated ? (
                <div className="inline-flex items-center bg-green-500/20 text-green-100 px-3 py-2 sm:px-4 rounded-xl text-sm sm:text-base">
                  <span className="mr-2">✅</span>
                  <span className="font-medium">Questions Generated</span>
                </div>
              ) : (
                <QuizQuestionsGenerator topics={topics} quizId={quizId} />
              )}
            </div>
          </div>
        </div>

        {/* Leaderboard Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/20 rounded-xl mb-4">
              <span className="text-lg sm:text-xl">🏆</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Leaderboard</h3>
            <p className="text-white/80 text-sm sm:text-base">Track participant performance</p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {participators.length > 0 ? (
              participators
                .sort((a, b) => (b.score || 0) - (a.score || 0))
                .map((p, index) => (
                  <div
                    key={p._id}
                    className="bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-200"
                  >
                    <div className="flex flex-row sm:items-center justify-between gap-3 sm:gap-4">
                      {/* Rank and Name */}
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-xl flex items-center justify-center">
                          <span className="font-bold text-white text-sm sm:text-base">#{index + 1}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-white text-sm sm:text-base truncate">{(p.player as IUser).name}</h4>
                          <p className="text-white/60 text-xs sm:text-sm truncate">{(p.player as IUser).email}</p>
                        </div>
                      </div>

                      {/* Score */}
                      <div className="text-center sm:text-right flex-shrink-0">
                        <p className="text-white/80 text-xs sm:text-sm mb-1">Score</p>
                        {p.score !== null && p.score !== undefined ? (
                          <div className="flex items-center justify-center sm:justify-end">
                            <span className="text-xl sm:text-2xl font-bold text-white">{p.score}</span>
                            <span className="text-white/60 ml-1 text-sm sm:text-base">/{quiz.totalScore}</span>
                          </div>
                        ) : (
                          <span className="inline-flex items-center bg-orange-500/20 text-orange-100 px-2 py-1 sm:px-3 rounded-lg text-xs sm:text-sm">
                            <span className="mr-1">⏳</span>
                            Not submitted
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <div className="text-center py-8 sm:py-12">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl">👥</span>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">No participants yet</h4>
                <p className="text-white/70 text-sm sm:text-base">Share the joining code to get participants</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatedQuizPage;
