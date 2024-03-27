"use client";
import axios from "axios";
import { ButtonHTMLAttributes, ChangeEventHandler, HTMLAttributes, MouseEventHandler, useState } from "react";
// http://localhost:3000/api/send

export default function Email() {
  const [fromAdd, setFrom] = useState();
  const [toAdd, setTo] = useState();

  const sendHandler = async (event: any) => {
    console.log(fromAdd, toAdd);
    event.preventDefault;
    const resp = await axios.post("http://dev-mahe.tech/api/user", {
      fromAddress: fromAdd,
      toAddress: toAdd,
    });
  };
  return (
    <>
      <div className="flex flex-col items-center py-2 ">
        <form className="border bg-gray-200 px-10 rounded py-6">
          <LabeledInput
            title="From Address "
            onChange={(e: any) => setFrom(e.target.value)}
          />
          <LabeledInput
            title="To Address "
            onChange={(e: any) => setTo(e.target.value)}
          />
          <Button title={"Send"} onClick={sendHandler} type="button"/>
        </form>
      </div>
    </>
  );
}

interface LabelledInputType {
  title: string;
  type?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function LabeledInput({ title, type, onChange }: LabelledInputType) {
  return (
    <>
      <div className="flex p-2 flex-col text-black text-lg">
        <label>{title}</label>
        <input
          type={type || "text"}
          onChange={onChange}
          className="border w-80
            focus:border-none focus:outline-none px-2 rounded"
        />
      </div>
    </>
  );
}

interface button {
  title: string;
  onClick: any;
  type?: any
}

function Button({ title,type, onClick }: button) {
  return (
    <div className="flex justify-center mt-2">
      <button
        className="border border-black px-1 rounded text-lg
    bg-black text-white  w-full m-2"
        onClick={onClick}
        type={type || "button"}
      >
        {title}
      </button>
    </div>
  );
}
