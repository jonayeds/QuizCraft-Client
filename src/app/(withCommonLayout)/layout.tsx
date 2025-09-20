import Navbar from '@/components/shared/Navbar'
import React from 'react'

const CommonLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <div className=''>
        <Navbar/>
      </div>
        {children}
    </div>
  )
}

export default CommonLayout