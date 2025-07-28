import "./reasons.css";
import icon from "./assets/icon5.png";
import Lang from './langs.json'

function reasons({ lang }) {
  let arr = [1,2,3,4];
  return (
    <>
      <div className="flex">
        <hr />
        <h2>{Lang[0].reasons.h[lang]}</h2>
      </div>
      <div className="cards">
        {arr.map((e) => {
          return <div className="card" key={e}>
          <div className="col">
            <h3>{Lang[0].reasons.title[lang]}</h3>
            <p>
              {Lang[0].reasons.p[lang]}
            </p>
          </div>
          <img src={icon} alt="icon" className="icon" />
        </div>
        })}
      </div>
    </>
  );
}

export default reasons;
