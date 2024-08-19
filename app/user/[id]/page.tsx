

// export  async function generateMetadata({params}) {
//     const{id}=params
//     const user=await getSinglePost(id)

import getSingleUser from "@/app/lib/getSingleUser"

//     return({
//         title:user.name,
//         description: user.address?.city,
//     })

// }
export default async function SingleUser({params}:{params:any}) {
    const{id}=params
    const user=await getSingleUser(id)
    return (
      <div>
          <h1>{user.name}</h1>
            <h6>{user.email}</h6>
                        <h6>{user.address?.city}</h6>

            <h6>{user.website}</h6>

            <h6>{user.phone}</h6>

    </div>
  )
}
