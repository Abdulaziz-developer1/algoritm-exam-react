import Nav from "./Nav.jsx";
import Swiper from "./swiper.jsx";
import Results from "./results.jsx";
import Courses from "./courses.jsx";
import Reasons from "./reasons.jsx";
import Reviews from "./reviews.jsx";
import Reviews2 from "./reviews2.jsx";
import Register from "./register.jsx";
import Questions from "./questions.jsx";
import Location from "./location.jsx";
import Footer from "./footer.jsx";
import ThemeContext from "./themeContext.jsx";
import lanContext from "./lanContext.jsx";
import { useState } from "react";

function App() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    let type = "";
    document.addEventListener("keypress", (e) => {
        type += e.key;
        console.log(type.toLocaleLowerCase().includes("toggle"));

        if (type.toLocaleLowerCase().includes("toggle")) {
            toggleTheme();

            type = "";
        } else if (type.toLowerCase().includes('language')) {
            toggleLan()
            type = "";
        }
    });
    const [lan, setLang] = useState('uz');
    function toggleLan() {
        setLang((prevLang) => (prevLang == 'uz' ? 'en' : 'uz'))
    }
    return (
        <div
            style={{
                background: theme === "light" ? "#fff" : "#000",
                color: theme === "light" ? "#000" : "#fff",
            }}
            className="div"
        >
            <ThemeContext.Provider className="div" value={{ theme, toggleTheme }}>
                <lanContext.Provider className="div" value={{ lan, toggleLan }}>
                    <Nav lang={lan} />
                    <Swiper lang={lan} />
                    <Results lang={lan} />
                    <Courses lang={lan} />
                    <Reasons lang={lan} />
                    <Reviews lang={lan} />
                    <Reviews2 lang={lan} />
                    <Register lang={lan} />
                    <Questions lang={lan} />
                    <Location lang={lan} />
                    <Footer lang={lan} />
                </lanContext.Provider>
            </ThemeContext.Provider>
        </div >

    )
}

export default App
