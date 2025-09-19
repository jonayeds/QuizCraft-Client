import AnswerQuestion from "@/components/question/AnswerQuestion";
import QuestionAnswers from "@/components/question/QuestionAnswers";
import { getQuizQuestions } from "@/services/quiz/quizService";


const ParticipationPage = async({params}:{params: Promise<{ quizId: string }>}) => {
  const { quizId } = await params;
  const questions = await getQuizQuestions(quizId);

  if(!(questions.length>0)){
    return <div>Questions not found</div>
  }
  const questionData = questions.map(q => ({
    _id: q._id,
    quiz: q.quiz as string,
    questionText: q.questionText,
    options: q.options  
  }))
  console.log(questions[0])

  return (
    <div>
      {
        questions[0].correctAnswerIndex !== undefined ? <QuestionAnswers questions={questions}/> :<AnswerQuestion questions={questionData}/>
      }
      
    </div>
  )
}

export default ParticipationPage