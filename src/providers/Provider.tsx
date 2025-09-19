import UserProvider from '@/context/UserContext'
import React from 'react'

const Provider = ({children}:{children:React.ReactNode}) => {
  return (
   <UserProvider>
    {children}
   </UserProvider>
  )
}

export default Provider