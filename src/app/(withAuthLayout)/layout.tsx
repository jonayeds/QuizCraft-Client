import AuthNav from '@/components/shared/AuthNav'
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <div className='relative '>
            <AuthNav/>
        </div>
        <div className='flex min-h-screen justify-center items-center'>
        {children}      
        </div>
    </div>
  )
}

export default AuthLayout