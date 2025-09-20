import CreateQuizForm from "@/components/quiz/CreateQuizForm"


const CreateQuiz = async() => {
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#907CD3] to-[#4d438b] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <span className="text-2xl">✨</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Create Quiz</h1>
          <p className="text-white/80 text-lg">Start building your interactive quiz</p>
        </div>
        
        {/* Form Section */}
        <CreateQuizForm/>
      </div>
    </div>
  )
}

export default CreateQuiz