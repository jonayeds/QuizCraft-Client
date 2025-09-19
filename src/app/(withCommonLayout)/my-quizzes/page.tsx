import { Button } from "@/components/ui/button";
import { getMyCreatedQuizzes, getMyJoinedQuizzes } from "@/services/quiz/quizService";
import { IQuiz } from "@/types/quiz";
import moment from "moment";
import Link from "next/link";

const MyQuizzesPage = async () => {
  const createdQuizzes = await getMyCreatedQuizzes();
  const joinedQuizzes = await getMyJoinedQuizzes()
  return (
    <div className="px-4">
      <div>
        <p className="text-center text-2xl mb-6 font-extralight mt-10">
          Created Quizzes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" >
          {createdQuizzes?.length ? (
            createdQuizzes.map((quiz) => (
              <div
                className="bg-white px-4 flex flex-col gap-4 py-6 rounded-xl text-black"
                key={quiz._id}
              >
                <div className="flex flex-col gap-2">
                    <p className="font-extralight text-lg">Joining Code: {quiz.joiningCode}</p>
                <p className="font-light text-sm">
                  {moment(quiz.createdAt).fromNow()}
                </p>
                </div>
                <Link href={`/my-quizzes/created/${quiz._id}`}>
                  <Button
                    className="text-primary  hover:text-primary/80"
                    variant={"outline"}
                  >
                    See Details
                  </Button>
                </Link>
              </div>
            ))
          ) : (
            <p>No quizzes found</p>
          )}
        </div>
      </div>

      <div>
        <p className="text-center text-2xl mb-6 font-extralight mt-10">
          Joined Quizzes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {joinedQuizzes?.length ? (
            joinedQuizzes.map((participator) => (
              <div
                className="bg-white px-4 flex flex-col gap-4 py-6 rounded-xl text-black"
                key={participator._id}
              >
                <p className="font-light text-sm">
                  joined {moment(participator.createdAt).fromNow()}
                </p>
                <div className="flex justify-between items-center "> 
                <p>{(participator?.score && participator.isCompleted) ? <span>Score: {participator.score}</span> : <span>Not completed</span>}</p>
                <p>Total: {(participator.quiz as IQuiz).totalScore}</p>

                </div>
                <Link href={`/my-quizzes/joined/${(participator.quiz as IQuiz)._id}`}>
                
                  <Button
                    className="text-primary  hover:text-primary/80"
                    variant={"outline"}
                  >
                    {participator.isCompleted ? "See Answers" : "Answer Now"}
                  </Button>
                </Link>
              </div>
            ))
          ) : (
            <p>No quizzes found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyQuizzesPage;
