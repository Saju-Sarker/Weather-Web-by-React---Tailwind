/* eslint-disable react/prop-types */
function ChildRes({ bg, name, icon, value }) {
  return (
    <div
      className={`h-full w-[30%] rounded-2xl flex  flex-col items-center justify-evenly shadow-lg ${bg} p-1`}
    >
      <p className="text-md font-semibold text-white">{name}</p>
      <i
        className={`${icon} text-white text-3xl hover:text-4xl duration-100`}
      ></i>
      <pre className="text-white font-semibold">{value}</pre>
    </div>
  );
}

export default ChildRes;
