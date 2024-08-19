import Link from 'next/link'
import React from 'react'

export default function AboutLayout({children}) {
  return (
    <div>
      <ul className='flex gap-3 text-xl '>
        <li><Link href={"/about/mission"}>Mission</Link></li>
        <li><Link href={"/about/contact"}>Contact</Link></li>
      </ul>
      {children}
    </div>
  )
}
