"use server";

import { config } from "@/config";
import { IParticipator, IQuestion, IQuiz } from "@/types/quiz";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const createQuiz = async (data: FieldValues) => {
  const token = (await cookies()).get("quizcraft_access")?.value;
  const res = await fetch(`${config.server_url}/quiz/create-quiz`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const result = await res.json();
  return result;
};

export const getMyCreatedQuizzes = async (): Promise<IQuiz[]> => {
  const token = (await cookies()).get("quizcraft_access")?.value;
  const res = await fetch(`${config.server_url}/quiz/my-created-quizzes`, {
    method: "GET",
    headers: {
      Authorization: `${token}`,
    },
  });
  const result = await res.json();
  return result?.data || [];
};

export const getMyJoinedQuizzes = async (): Promise<IParticipator[]> => {
  const token = (await cookies()).get("quizcraft_access")?.value;
  const res = await fetch(`${config.server_url}/quiz/my-quizzes`, {
    method: "GET",
    headers: {
      Authorization: `${token}`,
    },
  });
  const result = await res.json();
  return result?.data || [];
};

export const joinQuiz = async (joiningCode: string) => {
  const token = (await cookies()).get("quizcraft_access")?.value;
  const res = await fetch(`${config.server_url}/participator/join-quiz`, {
    method: "POST",
    body: JSON.stringify({ joiningCode }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const result = await res.json();
  return result;
};

export const getQuizQuestions = async (
  quizId: string
): Promise<IQuestion[]> => {
  const token = (await cookies()).get("quizcraft_access")?.value;
  const res = await fetch(
    `${config.server_url}/question/get-quiz-questions/${quizId}`,
    {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    }
  );
  const result = await res.json();
  return result?.data || [];
};



export const getASingleQuiz = async (quizId: string) => {
  const token = (await cookies()).get("quizcraft_access")?.value;
  const res = await fetch(`${config.server_url}/quiz/single-quiz/${quizId}`, {
    method: "GET",
    headers: {
      Authorization: `${token}`,
    },
    next:{
      tags:["generate"]
    }
  });
  const result = await res.json();
  return result;
};

export const generateQuestions = async (
  payload: { topic: string; number: number },
  quizId: string
) => {
  const token = (await cookies()).get("quizcraft_access")?.value;
  const res = await fetch(
    `${config.server_url}/quiz/generate-questions/${quizId}`,
    {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    }
  );
  revalidateTag("generate")
  const result = await res.json();
  return result;
};

export const getQuizParticipators = async (
  quizId: string
): Promise<IParticipator[]> => {
  const token = (await cookies()).get("quizcraft_access")?.value;
  const res = await fetch(`${config.server_url}/participator/${quizId}`, {
    method: "GET",
    headers: {
      Authorization: `${token}`,
    },
  });
  const result = await res.json();
  return result?.data || [];
};

export const submitAnswers = async (
  quizId: string,
  answers: { answers: { questionId: string; answer: number }[] }
) => {
  const token = (await cookies()).get("quizcraft_access")?.value;
  const res = await fetch(`${config.server_url}/participator/submit/${quizId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
    body: JSON.stringify(answers),
  });
  const result = await res.json();
  return result;
};

export const getMyQuizParticipation = async (
  quizId: string
)=> {
  const token = (await cookies()).get("quizcraft_access")?.value;
  const res = await fetch(`${config.server_url}/participator/my-participation/${quizId}`, {
    method: "GET",
    headers: {
      Authorization: `${token}`,
    },
  });
  const result = await res.json();
  return result?.data;
};
