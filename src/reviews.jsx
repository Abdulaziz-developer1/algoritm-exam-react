import './reviews.css';
import student from './assets/student.png';
import reel from './assets/reel.png';
import play from './assets/play.png';
import Lang from './langs.json'

function reviews ({lang}) {
    let arr = [1,2,3]
    return <>
        <div className="flex">
            <hr />
            <h2>{Lang[0].reviews.title[lang]}</h2>
        </div>
        <div className="cards2">
            {arr.map((e) => {
                return <div className="card2" key={e}>
                <img src={reel} alt="blank video" />
                <div className="flex2">
                    <img src={student} alt="student img" />
                    <div className="col">
                        <h3>Alixon</h3>
                        <p>{Lang[0].reviews.oc[lang]}</p>
                    </div>
                    <img src={play} alt="play" />
                </div>
            </div>
            })}
        </div>
    </>
}

export default reviews;