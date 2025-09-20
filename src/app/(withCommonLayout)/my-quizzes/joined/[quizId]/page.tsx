import AnswerQuestion from "@/components/question/AnswerQuestion";
import QuestionAnswers from "@/components/question/QuestionAnswers";
import { getQuizQuestions } from "@/services/quiz/quizService";


const ParticipationPage = async({params}:{params: Promise<{ quizId: string }>}) => {
  const { quizId } = await params;
  const questions = await getQuizQuestions(quizId);

  if(!(questions.length>0)){
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#907CD3] to-[#4d438b] flex items-center justify-center px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⏳</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Questions Not Ready</h2>
          <p className="text-white/80">The quiz questions haven&apos;t been generated yet.</p>
          <p className="text-white/60 text-sm mt-2">Please check back later or contact the quiz creator.</p>
        </div>
      </div>
    );
  }
  const questionData = questions.map(q => ({
    _id: q._id,
    quiz: q.quiz as string,
    questionText: q.questionText,
    options: q.options  
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#907CD3] to-[#4d438b]">
      {
        questions[0].correctAnswerIndex !== undefined ? <QuestionAnswers questions={questions}/> :<AnswerQuestion questions={questionData}/>
      }
    </div>
  )
}

export default ParticipationPage