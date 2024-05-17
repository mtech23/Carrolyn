import React from "react";
import { Footer } from "../../components/Layout/footer";
import { Header } from "../../components/Layout/header";

const LayoutTheme = (props) => {

 return (
    <div className="themeLayout">
        <div className="headerLayout">
            <Header />
        </div>
        <div className="mainLayout">
            {props.children}
        </div>
        <div className="footerLayouts">
            <Footer />
        </div>
    </div>
);
}
export default LayoutTheme;