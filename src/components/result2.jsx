/* eslint-disable react/prop-types */

import ChildRes from "./childRes2";

function Result2({ clouds, humidity, pressure }) {
  return (
    <div className="h-[25%] w-[95%] flex justify-between items-center ">
      <ChildRes
        name={"Clouds"}
        icon={"fa-solid fa-cloud"}
        bg="clouds"
        value={clouds}
      />
      <ChildRes
        name={"Humidity"}
        icon={"fa-solid fa-droplet"}
        bg="humidity"
        value={humidity}
      />
      <ChildRes
        name={"Pressure"}
        icon={"fa-solid fa-gauge"}
        bg="pressure"
        value={pressure}
      />
    </div>
  );
}

export default Result2;
