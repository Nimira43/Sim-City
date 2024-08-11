import Link from 'next/link'
import React from 'react'

const MainNavLinks = () => {
  return (
    <div className='flex items-center gap-2'>
      <Link href='/'>Dashboard</Link>
      <Link href='/tickets'>Tickets</Link>
      <Link href='/users'>Users</Link>
    </div>
  )
}

export default MainNavLinks
