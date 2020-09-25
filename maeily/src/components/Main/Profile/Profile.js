import React from "react";
import "./Profile.css";
function Profile() {
    return (
        <div className="profileWrap">
            <div className="pictureInfoWrap">
                <div className="profilePicture">
                    <img
                        src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile28.uf.tistory.com%2Fimage%2F99350E395AB3E2103121C7"
                        alt=""
                    />
                </div>
                <div className="profileInfo">
                    <div id="name">홍준혁</div>
                    <div id="grade">1학년 2반 20번</div>
                </div>
            </div>
            <div className="setting">
                <a href="">설정</a>
            </div>
        </div>
    );
}

export default Profile;
