import { useState } from "react";
import Form from "./form";
import Result1 from "./result1";
import Result2 from "./result2";

function Container() {
  const id = "9505fd1df737e20152fbd78cdb289b6a";
  const mainUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${id}&q=`;
  const [temp, setTemp] = useState("---");
  const [placeName, setPlaceName] = useState("---");
  const [placeIMG, setPlaceIMG] = useState("BD");
  const [weatherIMG, setWeatherIMG] = useState("10d");
  const [description, setDescription] = useState("---");
  const [clouds, setClouds] = useState("---");
  const [humidity, setHumidity] = useState("---");
  const [pressure, setPressure] = useState("---");

  const fetchDataFunc = async (val) => {
    try {
      let response = await fetch(mainUrl + val);
      let data = await response.json();
      setTemp(data.main.temp);
      setPlaceName(data.name);
      setPlaceIMG(data.sys.country);
      setWeatherIMG(data.weather[0].icon);
      setDescription(data.weather[0].description);
      setClouds(`${data.clouds.all}%`);
      setHumidity(`${data.main.humidity}%`);
      setPressure(`${data.main.pressure}hPa`);
    } catch {
      alert("something is wrong !!! ❓❓");
    }
  };

  const handleClick = (val) => {
    fetchDataFunc(val);
  };
  return (
    <div className="h-[32rem] w-[20rem] bg-white shadow-2xl mx-auto rounded-4xl p-4 flex flex-col items-center justify-evenly">
      <Form handleClick={handleClick} />
      <Result1
        placeName={placeName}
        temp={temp}
        placeIMG={placeIMG}
        wIMG={weatherIMG}
        description={description}
      />
      <Result2 clouds={clouds} humidity={humidity} pressure={pressure} />
    </div>
  );
}

export default Container;
