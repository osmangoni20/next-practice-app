'use client'

import React from 'react'

export default function Button() {
  return (
    <div>
<button onClick={()=>console.log("Click Success")} className="text-xl bg-green-500 text-white rounded-sm px-4 py-2">Click Me</button>

    </div>
  )
}
