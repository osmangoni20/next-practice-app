


export default async  function getSingleUser(id: any) {
  
  const result= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  return result.json()
}
