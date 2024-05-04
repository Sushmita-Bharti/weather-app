import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import "./App.css";
import FirstPart from "./component/FirstPart";
import SecondPart from "./component/SecondPart";

function App() {
  const [city, setCity] = useState("New Delhi");

  const [data, setData] = useState(null);

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  const apiKey = `https://api.weatherapi.com/v1/current.json?key=ccb3dba764fd411498c124954240105&q=${city}&aqi=no&units=metric`;

  useEffect(() => {
    fetch(apiKey)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          alert("City not found");
        } else {
          setData(data);
          console.log(data);
        }
      })
      .catch((e) => {});
  }, [city]);

  return (
    <>
      <div className={`${isActive ? "bg-salmon" : ""} bg-image`}></div>
      <div className="container">
        <button onClick={handleClick}>
          <FaRegMoon className="darkMode" />
        </button>

        {data && <FirstPart setCity={setCity} data={data}></FirstPart>}
        {data && <SecondPart setCity={setCity} data={data}></SecondPart>}
      </div>
    </>
  );
}
export default App;
