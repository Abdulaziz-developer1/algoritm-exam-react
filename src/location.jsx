import "./location.css";
import map from "./assets/map.png";
import Lang from './langs.json'

function location({lang}) {
  return (
    <>
    <br />
      <div className="flex">
        <hr />
        <h2>{Lang[0].location.title[lang]}</h2>
      </div>
      <br />
      <div className="flex left50">
        <img src={map} alt="map img" />
        <div className="consultation">
          <h2>
            <span>{Lang[0].consultation.title[lang]}</span>
          </h2>
          <p>
            {Lang[0].consultation.d[lang]}
          </p>
          <input
            className="standart width2"
            type="text"
            placeholder={Lang[0].consultation.name[lang]}
          />
          <select className="standart">
            <option>{Lang[0].consultation.job[lang]}</option>
            <option>{Lang[0].consultation.job1[lang]}</option>
            <option>{Lang[0].consultation.job2[lang]}</option>
          </select>
          <div className="flex2">
            <input className="standart" type="number" placeholder="+998" />
            <button>{Lang[0].consultation.send[lang]}</button>
          </div>
          <div className="flex2">
            <input type="radio" name="" id="" />
            <p>{Lang[0].consultation.tick[lang]}</p>
          </div>
        </div>
      </div>
      <br />
      <div className="flex bg left50">
        <h2>{Lang[0].location.place[lang]}</h2>
        <div className="gap">
          <b className="gray">{Lang[0].location.time[lang]}</b>
          <p>09:00 - 19:00 </p>
        </div>
        <div className="gap">
          <b className="gray">{Lang[0].location.contact[lang]}</b>
          <p>90-694-87-17</p>
        </div>
      </div>
    </>
  );
}

export default location;
