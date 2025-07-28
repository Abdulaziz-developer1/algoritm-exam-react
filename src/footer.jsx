import "./footer.css";
import white from "./assets/white_logo.png";
import media from "./assets/media.png";
import Lang from './langs.json'

function footer({ lang }) {
  let lis = [
    Lang[0].footer.li1[lang],
    Lang[0].footer.li2[lang],
    Lang[0].footer.li3[lang],
    Lang[0].footer.li4[lang],
    Lang[0].footer.li5[lang],
    Lang[0].footer.li6[lang],
    Lang[0].footer.li7[lang],
    "FAQ",
  ];
  return (
    <>
      <footer className="bg">
        <div className="between">
          <img style={{ marginLeft: '50px' }} src={white} alt="" />
        </div>
        <div className="between">
          <div className="col left">
            <ul>
              {lis.slice(0, 4).map((e, index) => {
                return <li key={index}>{e}</li>;
              })}
            </ul>
            <ul>
              {lis.slice(4).map((e, index) => {
                return <li key={index}>{e}</li>;
              })}
            </ul>
          </div>
          <div className="col">
            <img src={media} alt="social media icons" className="media" />
            <p className="phone">95-200-43-04</p>
          </div>
        </div>
        <div className="between">
          <b className="gray left">
            ©Algoritm 2024 | Privacy Policy | Certified Policy | Legal
          </b>
        </div>
      </footer>
    </>
  );
}

export default footer;
