

import React from 'react'

export default async function getAllUser() {
 const result= await fetch("https://jsonplaceholder.typicode.com/users",{
   next:{
      revalidate:10
   }
 })

 if(!result.ok){
    throw new Error("Something Wrong. User Data Fetching do not success")
 }
 return result.json()
}
