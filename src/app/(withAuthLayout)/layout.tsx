import AuthNav from '@/components/shared/AuthNav'


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#907CD3] to-[#4d438b]">
        <div className='relative '>
            <AuthNav/>
        </div>
        <div className='flex min-h-[calc(100vh-10rem)] py-4 justify-center items-center px-4'>
        {children}      
        </div>
    </div>
  )
}

export default AuthLayout