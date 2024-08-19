import React from 'react'
import Link from 'next/link'
import getAllUser from '../lib/getAllUser';
interface Geo {
    lat: string;
    lng: string;
  }
  
  interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }
  
  interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  
  export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }
export default async function User() {

    const users=await getAllUser()
  return (
    <div className='mt-5'>
      {
        users.map((user:User)=>{
            return(
                <div key={user.id}>
                    <li className='text-xl p-2'><Link href={`user/${user.id}`}>{user.name}</Link></li>
                </div>
            )
        })
      }
    </div>
  )
}

export async function generateStaticParams() {
    const users=await getAllUser()
    console.log(users)
    return users.map((user:User) => ({
        id: user.id.toString()
      }))
}