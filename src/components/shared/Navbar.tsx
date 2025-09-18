import { Button } from "../ui/button"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0  bg-gray-800 text-white">
        <div className="flex w-screen justify-between p-4">
            <h1 className="text-2xl font-bold">QuizCraft</h1>
            <div>
                
            </div>
            <div>
                <Button>Login</Button>
                <Button variant="outline" >Register</Button>
            </div>

        </div>
    </div>
  )
}

export default Navbar