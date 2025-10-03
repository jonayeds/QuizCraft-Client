"use client";

import { IQuestion } from "@/types/quiz";
import { useState } from "react";
import { StepBack, StepForward } from "lucide-react"

const QuestionAnswers = ({ questions }: { questions: IQuestion[] }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-2 sm:px-4 py-4 sm:py-8">
      {/* Progress Header */}
      <div className="w-full max-w-2xl mb-4 sm:mb-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/20">
          <div className="flex items-center justify-between text-white">
            <div className="text-xs sm:text-sm font-medium">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <div className="flex items-center text-green-400">
              <span className="mr-1 sm:mr-2">✅</span>
              <span className="text-xs sm:text-sm">Review Mode</span>
            </div>
          </div>
          <div className="mt-2 sm:mt-3 w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-green-400 h-2 rounded-full transition-all duration-300"
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

        {/* Options with Correct Answer Highlighted */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-3 sm:p-4 border transition-all duration-200 ${
                index === questions[currentQuestionIndex].correctAnswerIndex
                  ? 'bg-green-500/20 border-green-400/50 text-green-100'
                  : 'bg-white/5 border-white/10 text-white/80'
              }`}
            >
              <div className="flex items-start sm:items-center gap-3">
                <span className={`inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-medium shrink-0 mt-0.5 sm:mt-0 ${
                  index === questions[currentQuestionIndex].correctAnswerIndex
                    ? 'bg-green-500 text-white'
                    : 'bg-white/20 text-white/60'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="font-medium flex-1 text-sm sm:text-base leading-snug">{option}</span>
                {index === questions[currentQuestionIndex].correctAnswerIndex && (
                  <span className="text-green-400 text-lg shrink-0">✓</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => {
              if (currentQuestionIndex > 0) {
                setCurrentQuestionIndex(currentQuestionIndex - 1);
              }
            }}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-1 sm:gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl px-3 sm:px-6 py-2 sm:py-3 transition-all duration-200 text-sm sm:text-base"
          >
            <StepBack />
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </button>

          <div className="flex items-center gap-1 sm:gap-2 text-white/60 overflow-x-auto px-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 shrink-0 ${
                  index === currentQuestionIndex ? 'bg-white' : 'bg-green-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
              }
            }}
            disabled={currentQuestionIndex === questions.length - 1}
            className="flex items-center gap-1 sm:gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl px-3 sm:px-6 py-2 sm:py-3 transition-all duration-200 text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="sm:hidden">Next</span>
            <StepForward />
          </button>
        </div>
      </div>

      {/* Description Section */}
      {questions[currentQuestionIndex]?.description && (
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 w-full max-w-4xl mt-4 sm:mt-6 border border-white/20">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 shrink-0">
              <span className="text-blue-400 text-sm sm:text-base">💡</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white">Explanation</h3>
          </div>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            {questions[currentQuestionIndex].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionAnswers;
