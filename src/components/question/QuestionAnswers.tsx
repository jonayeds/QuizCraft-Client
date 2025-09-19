"use client";

import { IQuestion } from "@/types/quiz";
import { useState } from "react";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

const QuestionAnswers = ({ questions }: { questions: IQuestion[] }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <div>
      <div className="text-xl text-center min-h-[50vh] relative bg-[#010E3C]  max-w-[60vw] p-4 mx-auto flex justify-center items-center rounded-lg flex-col mt-20">
        <div className="absolute h-12 w-12 flex justify-center items-center rounded-full text-lg top-4 right-4 bg-primary text-white">
            <p>{currentQuestionIndex + 1}/{questions.length}</p>
        </div>
        <p>
          Q{currentQuestionIndex + 1}:{" "}
          {questions[currentQuestionIndex].questionText}
        </p>
        <div className="my-2">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <p
              key={index}
              className={
                index === questions[currentQuestionIndex].correctAnswerIndex
                  ? "text-green-500"
                  : ""
              }
            >
              {" "}
              {index + 1}. {option}
            </p>
          ))}
        </div>
        <div className="absolute bottom-10">
          <div className="flex gap-4 mt-20 min-w-[30vw] justify-between">
            <button
              onClick={() => {
                if (currentQuestionIndex > 0) {
                  setCurrentQuestionIndex(currentQuestionIndex - 1);
                }
              }}
            >
              <TbPlayerTrackPrevFilled className="text-3xl" />
            </button>
            <button
              onClick={() => {
                if (currentQuestionIndex < questions.length - 1) {
                  setCurrentQuestionIndex(currentQuestionIndex + 1);
                }
              }}
            >
              <TbPlayerTrackNextFilled className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[60vw] mx-auto mt-4">
        {questions[currentQuestionIndex]?.description && (
          <>
            <p className="text-lg">Description</p>
            <p className="font-light">
              {questions[currentQuestionIndex].description}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionAnswers;
