import React from "react";
import "./Cafeteria.scss";

function Cafeteria() {
    return (
        <div className="Cafeteria">
            <div className="Cafeteria_header">우리 학교 급식</div>
            <div className="Cafeteria_body">
                <div className="Cafeteria_body_breakfast">
                    <div className="Cafeteria_body_breakfast_title">아침</div>
                </div>
                <div className="Cafeteria_body_lunch">
                    <div className="Cafeteria_body_lunch_title">점심</div>
                </div>
                <div className="Cafeteria_body_dinner">
                    <div className="Cafeteria_body_dinner_title">저녁</div>
                </div>
            </div>
            <div className="Cafeteria_footer"></div>
        </div>
    );
}

export default Cafeteria;
