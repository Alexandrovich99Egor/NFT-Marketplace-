import React from "react";
import './GlobalCss/Global.scss';
import Header from "./Header/Header";
import SectionHero from "./SectionHero/SectionHero";
import SectionLiveAuctions from "./SectionLiveAuctions/SectionLiveAuctions";


function App() {
    return (
        <div className="wrapper">
            <Header />
            <SectionHero />
            <SectionLiveAuctions />
        </div>
    )
}

export default App;