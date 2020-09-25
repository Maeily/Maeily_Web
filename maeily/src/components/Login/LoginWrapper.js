import React from "react";
import Calendar from "../../assets/celendar.png";
import "./LoginWrapper.css";
function LoginWrapper({ children }) {
    return (
        <div className="total_wrap">
            <img src={Calendar} alt="달력입니다." />
            {children}
        </div>
    );
}

export default LoginWrapper;
