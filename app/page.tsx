"use client"
import { signIn, signOut, useSession } from 'next-auth/react'

const Home = () => {
  const { data, status } = useSession()
  console.log(data);
  if (status === "authenticated") {
    return <>
      <button onClick={e => signOut()}>LogOut</button>
      <h1><pre>{JSON.stringify(data, null, 2)}</pre></h1>
      <h1>{data.user?.name}</h1>
      <h1>{data.user?.email}</h1>
      <img src={data.user?.image as string} alt={data.user?.name as string} />

    </>
  }
  return <>
    <button onClick={e => signIn("google")}>Login With Google</button>
  </>

}

export default Home