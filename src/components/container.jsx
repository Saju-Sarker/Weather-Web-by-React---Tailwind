import Form from "./form";
import Result1 from "./result1";
import Result2 from "./result2";

function Container() {
  return (
    <div className="h-[32rem] w-[20rem] bg-white shadow-2xl mx-auto mt-10 rounded-4xl p-4 flex flex-col items-center justify-evenly">
      <Form />
      <Result1 />
      <Result2 />
    </div>
  );
}

export default Container;
