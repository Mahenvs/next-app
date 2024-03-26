"use client"

import axios from "axios";

export function Button(){
    const handler = () =>{
        console.log("hey there");
        axios.post("http://localhost:3000/api/user",
        {
            username: "mahe",
            password:
        })

    }
    return (
        <button onClick={handler} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
    )
}