import "../styles/weather.css";
export default function Weather({ data }) {
    const timeElapsed = Date.now();

const today = new Date(timeElapsed);

const iconcode = data.weather[0].icon;
const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  return (
    <div className="weatherinfo">
        <span className="date">{today.toDateString()}</span>
        <div>
      <span className="town-name">{data.name}</span>
      <sup className="country">{data.sys.country}</sup>
        </div>
      <span className="temperatura">{Math.round(data.main.temp)}°C</span>
      <img className="weatherImage" src={iconurl} style={{ height:"100px",width:"100px" }} alt="weather description image"/>
      <span className="weatherDescription">{data.weather[0].description.toUpperCase()}</span>
    </div>
  );
}
