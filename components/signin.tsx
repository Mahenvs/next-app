"use client"
import axios from "axios";
import { ChangeEventHandler, useState } from "react";
interface emailData{

}
export default function Signin() {
    let [userName,setUserName] = useState()
    let [pswd,setPswd] = useState()

    const handler = async() =>{

        const resp = await axios.post("http://localhost:3000/api/user",
        {
            username: userName,
            password: pswd
        });
        console.log("hey there",userName);
    }
    return <div className="h-screen flex justify-center flex-col">
        {/* <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign in
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput onChange={(e) =>{
                            setUserName(e.target.value)
                        }} label="Username" placeholder="user@gmail.com" />
                        <LabelledInput 
                        onChange={(e) =>
                            {setPswd(e.target.value)}
                        }
                        label="Password" type={"password"} placeholder="123456" />
                        
                        <button onClick={handler} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
                    </div>
                </div>
            </a>
        </div> */}
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: ChangeEventHandler<HTMLInputElement>

}

function LabelledInput({ label, placeholder, type ,onChange}: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input type={type || "text"} id="first_name" 
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}