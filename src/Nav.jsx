import { useContext } from 'react'
import logo from "./assets/image.png";
import "./Nav.css";
import themeContext from './themeContext'
import Lang from './langs.json'
import lanContext from './lanContext';
function nav({ lang }) {
  const { theme, toggleTheme } = useContext(themeContext)
  const { lan, toggleLan } = useContext(lanContext)
  console.log(lan, lang);

  return (
    <>
      <header>
        <img className="logo" src={logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="#">{Lang[0].header.li1[lang]}</a>
            </li>
            <li>
              <a href="#">{Lang[0].header.li2[lang]}</a>
            </li>
            <li>
              <a href="#">{Lang[0].header.li3[lang]}</a>
            </li>
            <li>
              <a href="#">{Lang[0].header.li4[lang]} </a>
            </li>
            <li>
              <a href="#">{Lang[0].header.li5[lang]}</a>
            </li>
            <li>
              <a href="#">{Lang[0].header.li6[lang]}</a>
            </li>
            <li>
              <a href="#">{Lang[0].header.li7[lang]}</a>
            </li>
          </ul>
        </nav>
        <button onClick={toggleTheme}>{theme == 'light' ? 'light' : 'dark'}</button>
        <button onClick={toggleLan}>{lan == 'uz' ? 'til' : 'Language'}</button>
      </header>
    </>
  );
}

export default nav;
