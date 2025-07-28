import "./register.css";
import { FaChevronDown } from "react-icons/fa";
import Lang from './langs.json'

function register({lang}) {
  return (
    <>
      <div className="flex left2">
        <hr />
        <div className="col">
          <h2>{Lang[0].register.title[lang]}</h2>
          <p>
            {Lang[0].register.d[lang]}
          </p>
        </div>
      </div>
      <div className="flex between gap">
        <div className="col">
          <div className="between bg">
            <p>{Lang[0].register.job[lang]}</p>
            <FaChevronDown />
          </div>
          <div className="card3 bg">
            <p>{Lang[0].register.date[lang]}</p>
            <hr />
            <div className="flex3">
              <div className="time-item">27.02.2025</div>
              <div className="time-item">27.02.2025</div>
              <div className="time-item">27.02.2025</div>
              <div className="time-item">27.02.2025</div>
              <div className="time-item">27.02.2025</div>
            </div>
          </div>
          <div className="card3 bg">
            <p>{Lang[0].register.time[lang]}</p>
            <hr />
            <div className="flex3">
              <div className="time-item">09:00</div>
              <div className="time-item">09:00</div>
              <div className="time-item">09:00</div>
              <div className="time-item">09:00</div>
              <div className="time-item">09:00</div>
              <div className="time-item">09:00</div>
              <div className="time-item">09:00</div>
            </div>
          </div>
        </div>
        <div className="consultation second">
          <h2>{Lang[0].register.registration[lang]}</h2>
          <input
            className="standart width2 width3"
            type="text"
            placeholder={Lang[0].register.name[lang]}
          />
          <div className="flex2">
            <input className="standart" type="number" placeholder="+998 69 404 34 34" />
            <button>{Lang[0].register.send[lang]}</button>
          </div>
          <div className="flex2">
            <input type="radio" name="" id="" />
            <p>{Lang[0].register.tick[lang]}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default register;
