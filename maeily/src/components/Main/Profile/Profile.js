import React from "react";
import "./Profile.scss";

function Profile() {
    return (
        <div className="profile">
            <img
                src="../../../assets/logo.png"
                alt="프로필 사진입니다."
                className="profile_picture"
            />

            <div className="profile_info">
                <div className="profile_info_name">홍준혁</div>
                <div className="profile_info_grade">1학년 2반</div>
            </div>
            <div>
                <button className="profile_logOut">로그아웃</button>
            </div>
            <div>
                <button className="profile_setting">설정</button>
            </div>
        </div>
    );
}

export default Profile;
