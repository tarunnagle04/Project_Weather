import React, { useEffect, useState } from "react";

const Weather = () => {
  const [city, setcity] = useState("");
  const [data, setdata] = useState("");

  const submitted = (event) => {
    event.preventDefault();
    console.log(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f304f0edfe3ce4803d69926acdc997dc&units=metric`;
      const Sdata = await fetch(URL).then((res) => res.json());
      setdata(Sdata.main);
    };
    fetchData();
  }, [city]);

  return (
    <>
      <div className="div">
        <br />
        <h1>WEATHER LISTENER</h1>
        <br />
        <form action="" className="div">
          <label htmlFor="cityName">Enter City Name</label> <br />
          <input
            type="text"
            className="rounded-2 opacity-100 text-primary"
            onChange={(event)=>setcity(event.target.value)}
          />
          <br />
        </form>
        <br />
        {!data ? (
          <h1>Please Enter Any City</h1>
        ) : (
          <h1>
            The temperature of {city} is {data.temp}
          </h1>
        )}
      </div>
    </>
  );
};

export default Weather;
