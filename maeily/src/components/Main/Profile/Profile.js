import React from "react";
import "./Profile.scss";

function Profile() {
    return (
        <div className="profile">
            <img src="" alt="프로필" className="profile_img" />
            <div className="profile_name">홍준혁</div>
            <div className="profile_grade">1학년 2반</div>
            <div className="profile_button">
                <button className="profile_button_setting">설정</button>
                <button className="profile_button_logOut">로그아웃</button>
            </div>
        </div>
    );
}

export default Profile;
