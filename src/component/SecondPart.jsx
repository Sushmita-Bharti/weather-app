import { FiWind } from "react-icons/fi";
const SecondPart = ({ data }) => {
  return (
    <div className="secondContent">
      <h2
        style={{
          color: "white",
          fontSize: "2rem",
          marginLeft: "10px",
          textAlign: "center",
        }}
      >
        Todays Highlights
      </h2>

      <div className="grid-container">
        <div className="grid-item">
          <h3>Wind Status</h3>
          <div className="grid-items">
            <h1>{data.current.wind_mph}</h1>
            <span>mph</span>
          </div>
          <span className="grid-items">
            <FiWind style={{ color: "white", marginTop: "2px" }} />{" "}
            {data.current.wind_dir}
          </span>
        </div>
        <div className="grid-item">
          <h3>Humidity</h3>
          <h1 className="grid-items"> {data.current.humidity}</h1>
        </div>
        <div className="grid-item">
          <p>Visibility</p>
          <div className="grid-items">
            <h1> {data.current.vis_miles}</h1>
            <span>miles</span>
          </div>
        </div>
        <div className="grid-item">
          <h3>Air Presurre</h3>
          <div className="grid-items">
            <h1> {data.current.pressure_mb}</h1>
            <span>mb</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondPart;
