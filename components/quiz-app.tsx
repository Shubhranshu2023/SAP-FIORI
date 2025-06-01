"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import QuizQuestion from "./quiz-question";
import QuizResults from "./quiz-results";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { questions } from "@/data/questions";

export default function QuizApp() {
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>(
    []
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string[]>>({});
  const [checkedQuestions, setCheckedQuestions] = useState<
    Record<number, boolean>
  >({});
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [reviewMode, setReviewMode] = useState(false);

  // Shuffle questions and options on mount or refresh
  useEffect(() => {
    const shuffled = [...questions]
      .sort(() => Math.random() - 0.5)
      .map((question) => ({
        ...question,
        options: [...question.options].sort(() => Math.random() - 0.5),
      }));
    setShuffledQuestions(shuffled);
    setUserAnswers({});
    setCheckedQuestions({});
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
  }, []);

  const handleAnswerChange = (selectedAnswers: string[]) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: selectedAnswers,
    });
  };

  const handleCheckAnswer = () => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex] || [];

    // For correct answers, increment score
    const isCorrect =
      currentQuestion.type === "single"
        ? userAnswer[0] === currentQuestion.correctAnswer[0]
        : currentQuestion.correctAnswer.every((ans) =>
            userAnswer.includes(ans)
          ) && userAnswer.length === currentQuestion.correctAnswer.length;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setCheckedQuestions({
      ...checkedQuestions,
      [currentQuestionIndex]: true,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const restartQuiz = () => {
    const shuffled = [...questions]
      .sort(() => Math.random() - 0.5)
      .map((question) => ({
        ...question,
        options: [...question.options].sort(() => Math.random() - 0.5),
      }));
    setShuffledQuestions(shuffled);
    setUserAnswers({});
    setCheckedQuestions({});
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    setReviewMode(false);
  };

  const handleReviewAnswers = () => {
    setQuizCompleted(false);
    setReviewMode(true);
    setCurrentQuestionIndex(0);
  };

  const startQuiz = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return (
      <Card className="w-full shadow-lg border-0 overflow-hidden animate-fade-in">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
          <CardTitle className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6" />
            SAP FIORI QUIZ
            <Sparkles className="h-6 w-6" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">
                Welcome to the SAP FIORI Quiz!
              </h2>
              <p className="text-gray-600">
                Test your knowledge of SAP FIORI with
                this interactive quiz by Shubhranshu.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Quiz Instructions:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>
                  The quiz contains multiple-choice and single-choice questions
                </li>
                <li>
                  Questions and options will be randomly ordered each time
                </li>
                <li>Click "Check Answer" after selecting your answer</li>
                <li>Your final score will be displayed at the end</li>
              </ul>
            </div>
            <Button
              onClick={startQuiz}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-all"
            >
              Start Quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (quizCompleted) {
    return (
      <QuizResults
        score={score}
        totalQuestions={shuffledQuestions.length}
        onRestart={restartQuiz}
        onReviewAnswers={handleReviewAnswers}
      />
    );
  }

  return (
    <div className="space-y-4">
      {reviewMode && (
        <div className="bg-blue-100 text-blue-800 p-3 rounded-lg mb-4 text-center">
          <p className="font-medium">
            Review Mode: Navigate through questions to see your answers
          </p>
        </div>
      )}
      <div className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm">
        <div className="text-sm font-medium">
          Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
        </div>
        <div className="text-sm font-medium text-purple-600">
          Score: {score} / {Object.keys(checkedQuestions).length}
        </div>
      </div>

      {shuffledQuestions.length > 0 && (
        <QuizQuestion
          question={shuffledQuestions[currentQuestionIndex]}
          userAnswer={userAnswers[currentQuestionIndex] || []}
          isChecked={!!checkedQuestions[currentQuestionIndex]}
          onAnswerChange={handleAnswerChange}
          onCheckAnswer={handleCheckAnswer}
          onNextQuestion={handleNextQuestion}
          onPreviousQuestion={handlePreviousQuestion}
          showPreviousButton={currentQuestionIndex > 0}
        />
      )}
    </div>
  );
}
