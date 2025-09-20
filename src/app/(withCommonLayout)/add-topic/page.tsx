import AddTopicForm from "@/components/topic/AddTopicForm"


const AddTopicPage = () => {

  return (
    <div>
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-light text-center mt-20">Add New Topic</h1>
            <hr className="w-[20vw]  border-t border-white/30" />
        </div>
        <AddTopicForm/>
    </div>
  )
}

export default AddTopicPage