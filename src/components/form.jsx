import { useRef } from "react";

/* eslint-disable react/prop-types */
function Form({ handleClick }) {
  const inp = useRef("");

  const btnClick = () => {
    handleClick(inp.current.value);
  };
  return (
    <form
      action="#"
      className="h-10 w-[90%] border-2 flex items-center rounded-3xl border-slate-400"
    >
      <input
        ref={inp}
        className="h[80%] w-[85%] pl-6 outline-none text-slate-600 font-semibold "
        type="text"
      />
      <button
        type="submit"
        className="cursor-pointer outline-none"
        onClick={btnClick}
      >
        <i className="fa-solid fa-magnifying-glass text-slate-400 hover:text-slate-600"></i>
      </button>
    </form>
  );
}

export default Form;
