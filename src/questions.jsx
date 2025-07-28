import "./questions.css";
import { FaChevronUp } from "react-icons/fa";
import Lang from './langs.json'

function questions({ lang }) {
  let arr = [1, 2, 3, 4]
  return (
    <>
      <div className="flex ">
        <hr />
        <p>{Lang[0].questions.title[lang]}</p>
      </div>
      <div className="cards3 left50">
        {arr.map((e) => {
          return <div className="card3 bg" key={e}>
            <div className="between">
              <p>{Lang[0].questions.q[lang]}</p>
              <FaChevronUp />
            </div>
            <hr />
            <div className="flex3">
              {Lang[0].questions.a[lang]}
            </div>
          </div>
        })}
      </div>
    </>
  );
}

export default questions;
