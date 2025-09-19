import { getAllTopics } from "@/services/topic/topicService"

const TopicsPage = async() => {
    const topics = await getAllTopics()
    console.log(topics)
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4 p-4 text-black mt-10">
      {topics.map(topic => (
        <div key={topic._id} className="p-4 bg-white rounded-3xl">
          <h2>{topic.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default TopicsPage