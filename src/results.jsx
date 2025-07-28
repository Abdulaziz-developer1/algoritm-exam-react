import "./results.css";
import icon1 from "./assets/icon2.png";
import icon2 from "./assets/icon.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import Lang from './langs.json'

function results({ lang }) {
  return (
    <>
      <div className="container">
        <div className="results">
          <div className="main-res">
            <h2>
              {Lang[0].results.h[lang]}
            </h2>
            <div className="flex">
              <div className="item">
                <img src={icon1} alt="icon" />
                <div className="col">
                  <h3>1300+</h3>
                  <p>{Lang[0].results.stat1[lang]}</p>
                </div>
              </div>
              <div className="item">
                <img src={icon2} alt="icon" />
                <div className="col">
                  <h3>400</h3>
                  <p>{Lang[0].results.stat2[lang]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="salary">
            <hr />
            <p className="width">
              {Lang[0].results.phrase[lang]}
            </p>
            <b className="gray">{Lang[0].consultation.job1[lang]}</b>
            <p>$321</p>
            <b className="gray">{Lang[0].consultation.job2[lang]}</b>
            <p>$400</p>
          </div>
          <div className="events">
            <div className="hackathon event">
              <img src={icon3} alt="icon" />
              <p>{Lang[0].results.events[0][lang]}</p>
            </div>
            <div className="event">
              <p>{Lang[0].results.events[1][lang]}</p>
            </div>
            <div className="event">
              <img src={icon4} alt="icon" />
              <p>{Lang[0].results.events[2][lang]}</p>
            </div>
          </div>
        </div>
        <div className="consultation">
          <h2>
            <span>{Lang[0].consultation.title[lang]}</span>
          </h2>
          <p>
            {Lang[0].consultation.d[lang]}
          </p>
          <input className="standart width2" type="text" placeholder={Lang[0].consultation.name[lang]} />
          <select className="standart">
            <option>{Lang[0].consultation.job[lang]}</option>
            <option>{Lang[0].consultation.job1[lang]}</option>
            <option>{Lang[0].consultation.job2[lang]}</option>
          </select>
          <div className="flex2">
            <input className="standart" type="number" placeholder="+998"/>
            <button>{Lang[0].consultation.send[lang]}</button>
          </div>
          <div className="flex2">
            <input type="radio" name="" id="" />
            <p>{Lang[0].consultation.tick[lang]}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default results;
