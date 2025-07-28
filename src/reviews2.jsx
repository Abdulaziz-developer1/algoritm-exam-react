import "./reviews2.css";
import student from "./assets/student.png";
import Lang from './langs.json'

function reviews2({lang}) {
  let arr = [1,2,3]
  return (
    <>
      <div className="flex">
        <hr />
        <h2>{Lang[0].reviews2.title[lang]}</h2>
      </div>
      <div className="cards2 left">
        {arr.map((e) => {
          return <div className="card2"key={e}>
          <p>
            {Lang[0].reviews2.review[lang]}
          </p>
          <div className="flex2">
            <img src={student} alt="student img" />
            <div className="col">
              <h3>Alixon</h3>
              <p>{Lang[0].reviews2.oc[lang]}</p>
            </div>
          </div>
        </div>
        })}
      </div>
    </>
  );
}

export default reviews2;
