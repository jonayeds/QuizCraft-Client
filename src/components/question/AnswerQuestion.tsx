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
  
  const answeredCount = questions.filter(q => q.answerIndex !== undefined).length;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-2 sm:px-4 py-4 sm:py-8">
      {/* Progress Header */}
      <div className="w-full max-w-2xl mb-4 sm:mb-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/20">
          <div className="flex items-center justify-between text-white">
            <div className="text-xs sm:text-sm font-medium">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <div className="text-xs sm:text-sm">
              Answered: {answeredCount}/{questions.length}
            </div>
          </div>
          <div className="mt-2 sm:mt-3 w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 w-full max-w-4xl border border-white/20 relative">
        {/* Question Number Badge */}
        <div className="absolute top-2 left-2 bg-white/30 backdrop-blur-sm rounded-xl px-2 sm:px-4 py-1 sm:py-2">
          <span className="text-white font-medium text-xs sm:text-sm">Q{currentQuestionIndex + 1}</span>
        </div>

        {/* Question Text */}
        <div className="mb-6 sm:mb-8 pt-2 sm:pt-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-relaxed text-center px-2">
            {questions[currentQuestionIndex].questionText}
          </h2>
        </div>

        {/* Options */}
        <RadioGroup
          value={
            answerIndex ||
            questions[currentQuestionIndex].answerIndex?.toString() ||
            null
          }
          onValueChange={(value) => handleValueChange(value)}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div key={index} className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-200">
              <div className="flex items-start sm:items-center gap-3">
                <RadioGroupItem 
                  value={index.toString()} 
                  id={`option-${index}`}
                  className="text-white border-white/30 mt-1 sm:mt-0 shrink-0"
                />
                <Label 
                  htmlFor={`option-${index}`}
                  className="text-white cursor-pointer flex-1 font-medium text-sm sm:text-base leading-snug"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full text-xs mr-2 sm:mr-3 shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </Label>
              </div>
            </div>
          ))}
        </RadioGroup>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-2">
          <Button
            onClick={() => {
              if (currentQuestionIndex > 0) {
                setCurrentQuestionIndex(currentQuestionIndex - 1);
                setAnswerIndex(null);
              }
            }}
            disabled={currentQuestionIndex === 0}
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
          >
            <TbPlayerTrackPrevFilled className="mr-1 sm:mr-2 text-sm sm:text-base" />
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </Button>

          <div className="flex items-center gap-1 sm:gap-2 text-white/60 overflow-x-auto px-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 shrink-0 ${
                  index === currentQuestionIndex 
                    ? 'bg-white' 
                    : questions[index].answerIndex !== undefined 
                      ? 'bg-green-400' 
                      : 'bg-white/20'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={() => {
              if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setAnswerIndex(null);
              }
            }}
            disabled={currentQuestionIndex === questions.length - 1}
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="sm:hidden">Next</span>
            <TbPlayerTrackNextFilled className="ml-1 sm:ml-2 text-sm sm:text-base" />
          </Button>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 sm:mt-8 w-full max-w-2xl">
        <Button 
          disabled={currentQuestionIndex !== questions.length - 1} 
          className="w-full h-12 sm:h-14 bg-white text-[#4d438b] hover:bg-white/90 font-semibold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed px-4" 
          onClick={handleSubmitAnswers}
        >
          {currentQuestionIndex === questions.length - 1 ? (
            <div className="flex items-center justify-center">
              <span className="mr-2">📝</span>
              <span className="text-center">
                Submit All Answers ({answeredCount}/{questions.length})
              </span>
            </div>
          ) : (
            <span className="text-center">Complete all questions to submit</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default AnswerQuestion;
