"use client";

import { motion } from "framer-motion";
import { Award, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Update the QuizResultsProps interface to include a new prop for reviewing answers
interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onReviewAnswers: () => void;
}

// Update the function parameters to include the new prop
export default function QuizResults({
  score,
  totalQuestions,
  onRestart,
  onReviewAnswers,
}: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  let message = "";
  let color = "";

  if (percentage >= 90) {
    message = "Excellent! You have mastered SAP FIORI!";
    color = "text-purple-600";
  } else if (percentage >= 70) {
    message = "Great job! You have a solid understanding of SAP FIORI.";
    color = "text-purple-600";
  } else if (percentage >= 50) {
    message = "Good effort! You have a basic understanding of SAP FIORI.";
    color = "text-yellow-600";
  } else {
    message = "Keep learning! You'll improve your SAP FIORI knowledge.";
    color = "text-red-600";
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-lg border-0 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-center py-8">
          <div className="flex justify-center mb-4">
            <Award className="h-16 w-16" />
          </div>
          <CardTitle className="text-2xl md:text-3xl">
            Quiz Completed!
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <div className="space-y-6 text-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Your Score: {score} / {totalQuestions}
              </h2>
              <p className={`text-lg ${color}`}>{message}</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>0%</span>
                <span>{percentage}%</span>
                <span>100%</span>
              </div>
              <Progress value={percentage} className="h-3" />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Performance Summary:</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Total Questions:</span>
                  <span className="font-medium">{totalQuestions}</span>
                </li>
                <li className="flex justify-between">
                  <span>Correct Answers:</span>
                  <span className="font-medium text-purple-600">{score}</span>
                </li>
                <li className="flex justify-between">
                  <span>Incorrect Answers:</span>
                  <span className="font-medium text-red-600">
                    {totalQuestions - score}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Accuracy:</span>
                  <span className="font-medium">{percentage}%</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
        {/* Update the CardFooter to include a Review Answers button
        Replace the existing CardFooter with this updated version */}
        <CardFooter className="bg-gray-50 p-6 flex justify-center gap-4">
          <Button
            onClick={onReviewAnswers}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center gap-2"
          >
            Review Answers
          </Button>
          <Button
            onClick={onRestart}
            className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Restart Quiz
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
