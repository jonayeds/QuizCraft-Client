"use client";
import { useState } from "react";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { submitAnswers } from "@/services/quiz/quizService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface IAnswerQuestionProps {
  questions: {
    _id: string;
    quiz: string;
    questionText: string;
    options: string[];
    answerIndex?: number;
  }[];
}

const AnswerQuestion = ({ questions }: IAnswerQuestionProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerIndex, setAnswerIndex] = useState<string | null>(null);
  const router = useRouter()

  const handleValueChange = (value: string) => {
    questions[currentQuestionIndex].answerIndex = Number(value);
    setAnswerIndex(value);
  };
  const handleSubmitAnswers = async () => {
    const answeredQuestions = questions.filter(q => q.answerIndex !== undefined)
    const answerData = answeredQuestions.map(q => ({
        questionId: q._id,
        answer: q.answerIndex!
    }))
    const result = await submitAnswers(questions[0].quiz, {answers: answerData})
    if(result?.success){
        toast.success("Answers submitted successfully") 
        router.push("/my-quizzes")
    }else{
        toast.error( result?.message || "Failed to submit answers")
    }
  }
  return (
    <div>
      <div className="text-xl text-center min-h-[50vh] relative bg-[#010E3C]  max-w-[60vw] p-4 mx-auto flex justify-center items-center rounded-lg flex-col mt-20">
        <div className="absolute h-12 w-12 flex justify-center items-center rounded-full text-lg top-4 right-4 bg-primary text-white">
            <p>{currentQuestionIndex + 1}/{questions.length}</p>
        </div>
        <p>
          Q{currentQuestionIndex + 1}.{" "}
          {questions[currentQuestionIndex].questionText}
        </p>

        <RadioGroup
          value={
            answerIndex ||
            questions[currentQuestionIndex].answerIndex?.toString() ||
            null
          }
          onValueChange={(value) => handleValueChange(value)}
          className="flex justify-between  gap-4 mt-10 text-sm min-w-[20vw]"
        >
          <div className="flex items-start flex-col gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value={"0"} id="option-1" />
              <Label htmlFor="option-1">
                {questions[currentQuestionIndex].options[0]}
              </Label>
            </div>
            <div className="flex items-center  gap-2 ">
              <RadioGroupItem value={"2"} id="option-3" />
              <Label htmlFor="option-3">
                {questions[currentQuestionIndex].options[2]}
              </Label>
            </div>
          </div>
          <div className="flex items-start flex-col gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="1" id="option-2" />
              <Label htmlFor="option-2">
                {questions[currentQuestionIndex].options[1]}
              </Label>
            </div>
            <div className="flex items-center  gap-2 ">
              <RadioGroupItem value="3" id="option-4" />
              <Label htmlFor="option-4">
                {questions[currentQuestionIndex].options[3]}
              </Label>
            </div>
          </div>
        </RadioGroup>
        <div className="absolute bottom-10">
          <div className="flex gap-4 mt-20 min-w-[30vw] justify-between">
            <button
              onClick={() => {
                if (currentQuestionIndex > 0) {
                  setCurrentQuestionIndex(currentQuestionIndex - 1);
                  setAnswerIndex(null);
                }
              }}
            >
              <TbPlayerTrackPrevFilled className="text-3xl" />
            </button>
            <button
              onClick={() => {
                if (currentQuestionIndex < questions.length - 1) {
                  setCurrentQuestionIndex(currentQuestionIndex + 1);
                  setAnswerIndex(null);
                }
              }}
            >
              <TbPlayerTrackNextFilled className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
      <div   className="flex justify-center mt-10"> 
        <Button disabled={!(currentQuestionIndex == questions.length-1)} className="disabled:cursor-not-allowed " onClick={handleSubmitAnswers}> Submit</Button>
      </div>
    </div>
  );
};

export default AnswerQuestion;
