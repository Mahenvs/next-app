import axios from "axios";
import Image from "next/image";
import SignIn from "./auth/signin/page";
// import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient();

// https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details
async function fetchData() {
  // await new Promise((r) => setTimeout(r,5000))
  // const resp = await axios.get("http://localhost:3000/api/user");
  // const user = await client.user.findMany();
  // console.log(user)
  return {
    // resp.data
    name:"Hey mah"
  };
}
// async component
export default  function Home() {
  // const userDetails = await fetchData();

  return <>
    <div>
      <SignIn/>
    </div>
  </>
}
