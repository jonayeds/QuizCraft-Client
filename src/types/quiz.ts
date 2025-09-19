import { IUser } from "./user";

export interface IQuiz {
    _id: string;
    totalScore: number;
    joiningCode: string;
    creator: string;
    createdAt: string;
    updatedAt: string;
}

export interface IParticipator {
    _id: string;
    quiz: IQuiz | string;
    player: string | IUser;
    joinedAt: string;
    score?: number;
    createdAt: string;
    updatedAt: string;
    isCompleted: boolean;
}

export interface IQuestion {
    _id: string;
    quiz: IQuiz | string;
    questionText: string;
    description?: string;
    toopic: string;
    options: string[];  
    correctAnswerIndex: number;
    createdAt: string;
    updatedAt: string;
}
