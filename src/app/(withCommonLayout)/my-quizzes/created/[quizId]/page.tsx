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
    return <div>Quiz not found</div>;
  }
  const quiz = data.data;

  return (
    <div className="px-4 pt-16 md:max-w-[60vw] mx-auto ">
      <div className="flex items-center justify-between">
        <p className=" font-light text-3xl">
          Total Score : <span className="">{quiz.totalScore}</span>
        </p>
        <div className="flex flex-col items-center justify-center">
            <p className="font-light">Joining Code</p>
         <span className="text-4xl"> {quiz.joiningCode}</span>
        </div>
        {quiz?.questionsGenerated ? (
          <p>Questions Generated</p>
        ) : (
          <QuizQuestionsGenerator topics={topics} quizId={quizId} />
        )}
      </div>
      <hr className="my-4 border-t border-gray-300/30 " />
      <div>
        <h3 className="font-light text-2xl text-center">Participators</h3>
      <hr className="my-4 border-t border-gray-300/30 " />
        <div className="flex flex-col gap-4 mt-4">{
            participators.map(p => (<div className="flex justify-between" key={p._id}>
                <p>{(p.player as IUser).name}</p>
                <p>{(p.player as IUser).email}</p>
                <p>Score: {p.score ? <span>{p.score}</span> : <span className="text-xs ">Not yet submitted</span>} </p>
                </div>))
            }</div>
      </div>
    </div>
  );
};

export default CreatedQuizPage;
