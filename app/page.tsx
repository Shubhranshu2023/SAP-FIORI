import QuizApp from "@/components/quiz-app";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-teal-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <QuizApp />
      </div>
    </main>
  );
}
