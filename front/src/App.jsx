import React from "react";
import './GlobalCss/Global.scss';
import Header from "./Header/Header";
import SectionHero from "./SectionHero/SectionHero";


function App() {
    return (
        <div className="wrapper">
            <Header />
            <SectionHero />
        </div>
    )
}

export default App;