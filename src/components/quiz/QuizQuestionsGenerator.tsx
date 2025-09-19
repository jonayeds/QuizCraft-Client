"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ITopic } from "@/types/topic";
import { generateQuestions } from "@/services/quiz/quizService";

const QuizQuestionsGenerator = ({ topics, quizId }: { topics: ITopic[], quizId: string   }) => {
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(10);
  const [topic, setTopic] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const handleGenerateQuestions = async () => {
    if (numberOfQuestions <= 0 || numberOfQuestions > 20) {
      toast.error("Number of questions must be between 1 and 20");
      return;
    }
    if (!topic) {
      toast.error("Please select a topic");
      return;
    }
    setIsGenerating(true);
    const result = await generateQuestions({
      topic,
      number: numberOfQuestions,
    },quizId );
    if (result?.success) {
      toast.success("Questions generated successfully");
    } else {
      toast.error(result?.message || "Failed to generate questions");
    }
    setIsGenerating(false);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Generate Questions</Button>
      </DialogTrigger>
      <DialogContent className="bg-white border-0 text-black rounded-2xl">
        <DialogTitle>Generate Questions</DialogTitle>
        <Input
          type="number"
          placeholder="Number of questions (default 10)"
          onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
        />
        <Select onValueChange={(value) => setTopic(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a Topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Topics</SelectLabel>
              {topics.map((topic) => (
                <SelectItem key={topic._id} value={topic._id}>
                  {topic.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button className="mt-4 w-full" onClick={handleGenerateQuestions}>
          {isGenerating ? "Generating..." : "Generate"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default QuizQuestionsGenerator;
