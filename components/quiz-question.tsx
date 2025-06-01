"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface QuestionProps {
  question: {
    id: number
    text: string
    options: { id: string; text: string }[]
    type: "single" | "multiple"
    correctAnswer: string[]
  }
  userAnswer: string[]
  isChecked: boolean
  onAnswerChange: (selectedAnswers: string[]) => void
  onCheckAnswer: () => void
  onNextQuestion: () => void
  onPreviousQuestion: () => void
  showPreviousButton: boolean
}

export default function QuizQuestion({
  question,
  userAnswer,
  isChecked,
  onAnswerChange,
  onCheckAnswer,
  onNextQuestion,
  onPreviousQuestion,
  showPreviousButton,
}: QuestionProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(userAnswer)

  useEffect(() => {
    setSelectedAnswers(userAnswer)
  }, [userAnswer, question.id])

  const handleSingleAnswerChange = (value: string) => {
    setSelectedAnswers([value])
    onAnswerChange([value])
  }

  const handleMultipleAnswerChange = (value: string, checked: boolean) => {
    const newSelectedAnswers = checked
      ? [...selectedAnswers, value]
      : selectedAnswers.filter((answer) => answer !== value)

    setSelectedAnswers(newSelectedAnswers)
    onAnswerChange(newSelectedAnswers)
  }

  const isAnswerCorrect = (optionId: string) => {
    if (!isChecked) return null

    if (question.type === "single") {
      return question.correctAnswer.includes(optionId)
        ? "correct"
        : selectedAnswers.includes(optionId)
          ? "incorrect"
          : null
    } else {
      if (question.correctAnswer.includes(optionId) && selectedAnswers.includes(optionId)) {
        return "correct"
      } else if (!question.correctAnswer.includes(optionId) && selectedAnswers.includes(optionId)) {
        return "incorrect"
      } else if (question.correctAnswer.includes(optionId) && !selectedAnswers.includes(optionId)) {
        return "missed"
      }
      return null
    }
  }

  const getOptionClassName = (optionId: string) => {
    const result = isAnswerCorrect(optionId)
    if (!result) return ""

    if (result === "correct") return "bg-green-50 border-green-200"
    if (result === "incorrect") return "bg-red-50 border-red-200"
    if (result === "missed") return "bg-yellow-50 border-yellow-200"
    return ""
  }

  const getResultIcon = (optionId: string) => {
    const result = isAnswerCorrect(optionId)
    if (!isChecked || !result || result === "missed") return null

    if (result === "correct") {
      return <Check className="h-5 w-5 text-green-500" />
    }
    if (result === "incorrect") {
      return <X className="h-5 w-5 text-red-500" />
    }
    return null
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className="shadow-lg border-0 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <CardTitle className="text-xl">Question {question.id}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="text-lg font-medium">{question.text}</div>

            {question.type === "single" ? (
              <RadioGroup
                value={selectedAnswers[0] || ""}
                onValueChange={handleSingleAnswerChange}
                className="space-y-3"
                disabled={isChecked}
              >
                {question.options.map((option) => (
                  <div
                    key={option.id}
                    className={`flex items-center space-x-2 p-3 border rounded-lg transition-colors ${getOptionClassName(
                      option.id,
                    )}`}
                  >
                    <RadioGroupItem value={option.id} id={`option-${option.id}`} disabled={isChecked} />
                    <Label htmlFor={`option-${option.id}`} className="flex-grow cursor-pointer">
                      {option.text}
                    </Label>
                    {getResultIcon(option.id)}
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <div className="space-y-3">
                {question.options.map((option) => (
                  <div
                    key={option.id}
                    className={`flex items-center space-x-2 p-3 border rounded-lg transition-colors ${getOptionClassName(
                      option.id,
                    )}`}
                  >
                    <Checkbox
                      id={`option-${option.id}`}
                      checked={selectedAnswers.includes(option.id)}
                      onCheckedChange={(checked) => handleMultipleAnswerChange(option.id, checked === true)}
                      disabled={isChecked}
                    />
                    <Label htmlFor={`option-${option.id}`} className="flex-grow cursor-pointer">
                      {option.text}
                    </Label>
                    {getResultIcon(option.id)}
                  </div>
                ))}
              </div>
            )}

            {isChecked && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Correct Answer:</h3>
                <div className="text-emerald-700">
                  {question.options
                    .filter((option) => question.correctAnswer.includes(option.id))
                    .map((option) => option.text)
                    .join(", ")}
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 px-6 py-4 flex justify-between">
          {showPreviousButton && (
            <Button onClick={onPreviousQuestion} className="bg-gray-200 hover:bg-gray-300 text-gray-800">
              Previous
            </Button>
          )}

          {!isChecked ? (
            <Button
              onClick={onCheckAnswer}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              disabled={selectedAnswers.length === 0}
            >
              Check Answer
            </Button>
          ) : (
            <Button onClick={onNextQuestion} className="bg-emerald-600 hover:bg-emerald-700 text-white">
              {question.id === 100 ? "See Results" : "Next Question"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
