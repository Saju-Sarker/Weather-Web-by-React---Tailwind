function Result1() {
  return (
    <div className="h-[55%] w-[85%] flex flex-col items-center justify-evenly relative ">
      <div className="flex items-center justify-center font-bold text-xl text-slate-700">
        <div className="placeName mr-3 z-10">Bangladesh</div>
        <img
          className="drop-shadow-lg  z-10"
          src="https://flagsapi.com/BD/flat/32.png"
          alt="placeIMG"
        />
      </div>
      <div className="relative bottom-6 ">
        <img
          className="mytDropShadow h-52 "
          src="https://openweathermap.org/img/wn/10d@4x.png"
          alt="weatherIMG"
        />
      </div>
      <div className="relative bottom-12">
        <div className="flex items-center justify-center text-4xl text-slate-700 font-bold">
          <p>32</p>°
        </div>
        <p className="description">brocken clouds</p>
      </div>
    </div>
  );
}

export default Result1;
