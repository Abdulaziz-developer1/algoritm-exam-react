import "./courses.css";
import img from './assets/card_img.png';
import Lang from './langs.json'

function courses({ lang }) {
  let arr = [1, 2, 3, 4];
  return (
    <>
      <div className="flex">
        <hr />
        <h2>{Lang[0].courses.title[lang]}</h2>
        <div className="events">
          <div className="event event2 white">
            <p>{Lang[0].courses.time1[lang]}</p>
          </div>
          <div className="event event2">
            <p>{Lang[0].courses.time2[lang]}</p>
          </div>
          <select className="event white event2">
            <option>{Lang[0].consultation.job1[lang]}</option>
            <option>{Lang[0].consultation.job2[lang]}</option>
          </select>
        </div>
      </div>
      <br />
      <div className="cards">
        {arr.map((index) => {
          return <div className="card" key={index}>
            <img src={img} alt="" />
            <div className="col">
              <h3>Frontend - React JS</h3>
              <p>{Lang[0].courses.lengtht[lang]}</p>
              <div className="flex2">
                <button>{Lang[0].courses.word1[lang]}</button>
                <button className="white">{Lang[0].courses.word2[lang]}</button>
              </div>
            </div>
          </div>
        })}

      </div>
    </>
  );
}

export default courses;
