import JoinQuizForm from '@/components/quiz/joinQuizForm'
import React from 'react'

const JoinQuizPage = () => {
  return (
    <div className="mt-10 p-4 max-w-[60vw] mx-auto">
        <h1 className="text-center text-4xl">Join Quiz</h1>
        <JoinQuizForm/>   
    </div>
  )
}

export default JoinQuizPage