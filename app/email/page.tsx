export default function Email() {
  return (
    <>
      <div className="flex flex-col items-center py-2 ">
        <form className="border bg-gray-200 px-10 rounded py-6">
          <LabeledInput title="From Address " />
          <LabeledInput title="To Address " />
          <Button title={"Send"} />
        </form>
      </div>
    </>
  );
}

interface LabelledInputType {
  title: string;
  type?: string;
}

function LabeledInput({ title, type }: LabelledInputType) {
  return (
    <>
      <div className="flex p-2 flex-col text-black text-lg">
        <label>{title}</label>
        <input
          type={type || "text"}
          className="border w-80
            focus:border-none focus:outline-none px-2 rounded"
        />
      </div>
    </>
  );
}

interface button {
  title: string;
}

function Button({ title }: button) {
  return (
    <div className="flex justify-center mt-2">
      <button
        className="border border-black px-1 rounded text-lg
    bg-black text-white  w-full m-2"
      >
        {title}
      </button>
    </div>
  );
}
