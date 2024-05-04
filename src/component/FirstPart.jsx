import "../App.css";
import { CiSearch } from "react-icons/ci";
import { CiCloudOn } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
const FirstPart = ({ setCity, data }) => {
  const onSubmitChanage = (e) => {
    e.preventDefault();
    setCity(e.target.elements.city.value);
  };
  return (
    <>
      <nav className="navBar">
        <LuMapPin className="icon location" />
        <form onSubmit={onSubmitChanage}>
          <input
            type="text"
            className="input"
            placeholder="Enter city name"
            name="city"
          ></input>
          <button type="submit">
            <CiSearch className="icon search" />
          </button>
        </form>
      </nav>
      <span className="firstContent">
        <img src={data.current.condition.icon} className="icon3" />
        <span className="degree_date">
          <h1>{data.current.temp_c} °C</h1>
          <h2>{data.current.condition.text}</h2>
          <p>
            Today - {data.location.localtime} | {data.location.name}
          </p>
        </span>
      </span>
    </>
  );
};
export default FirstPart;
