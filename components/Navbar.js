import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-16 pt-8">
      <Link href='/' className="text-2xl font-OP text-primary-green font-bold">ReVal</Link>
      <a href="https://github.com/Abhishek-More/reval" target="_blank" className="bg-primary-green font-medium text-md text-white px-6 py-4 rounded-lg">View on Github</a>
    </div>
  )
}
