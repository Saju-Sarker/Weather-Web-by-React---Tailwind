import ChildRes from "./childRes2";

function Result2() {
  return (
    <div className="h-[25%] w-[95%] flex justify-between items-center ">
      <ChildRes name={"Clouds"} icon={"fa-solid fa-cloud"} bg="clouds" />
      <ChildRes name={"Humidity"} icon={"fa-solid fa-droplet"} bg="humidity" />
      <ChildRes name={"Pressure"} icon={"fa-solid fa-gauge"} bg="pressure" />
    </div>
  );
}

export default Result2;
