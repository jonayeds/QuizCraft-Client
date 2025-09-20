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
        <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm rounded-xl px-6 py-3 font-medium transition-all duration-200 hover:scale-105">
          <span className="mr-2">✨</span>
          Generate Questions
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-br from-[#907CD3] to-[#4d438b] border border-white/20 text-white rounded-3xl p-8 backdrop-blur-md">
        <DialogTitle className="text-2xl font-bold text-white mb-6 text-center">
          <div className="inline-flex items-center">
            <span className="mr-3 text-2xl">🎯</span>
            Generate Questions
          </div>
        </DialogTitle>
        
        <div className="space-y-6">
          {/* Number of Questions */}
          <div className="space-y-2">
            <label className="text-white/90 text-sm font-medium">Number of Questions</label>
            <Input
              type="number"
              placeholder="Enter number (1-20)"
              value={numberOfQuestions}
              onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white/50 focus:ring-white/30 rounded-xl h-12"
            />
            <p className="text-white/60 text-xs">Maximum 20 questions allowed</p>
          </div>

          {/* Topic Selection */}
          <div className="space-y-2">
            <label className="text-white/90 text-sm font-medium">Select Topic</label>
            <Select onValueChange={(value) => setTopic(value)}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white rounded-xl h-12 focus:ring-white/30">
                <SelectValue placeholder="Choose a topic..." className="text-white" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-md border-white/20 rounded-xl">
                <SelectGroup>
                  <SelectLabel className="text-[#4d438b] font-semibold">Available Topics</SelectLabel>
                  {topics.map((topic) => (
                    <SelectItem 
                      key={topic._id} 
                      value={topic._id}
                      className="text-[#4d438b] hover:bg-[#907CD3]/10 rounded-lg"
                    >
                      {topic.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Generate Button */}
          <Button 
            className="w-full h-14 bg-white text-[#4d438b] hover:bg-white/90 font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed" 
            onClick={handleGenerateQuestions}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#4d438b] mr-3"></div>
                Generating Questions...
              </div>
            ) : (
              <div className="flex items-center">
                <span className="mr-2">⚡</span>
                Generate Questions
              </div>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuizQuestionsGenerator;
