import CreateQuizForm from "@/components/quiz/CreateQuizForm"


const CreateQuiz = async() => {
    
  return (
    <div className="mt-10 p-4 max-w-[60vw] mx-auto">
        <h1 className="text-center text-4xl">Create Quiz</h1>
        <CreateQuizForm/>   
    </div>
  )
}

export default CreateQuiz