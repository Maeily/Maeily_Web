import React, { useState } from "react";
import "./Setting.css";
function Setting() {
    const [onOff, setOnOff] = useState(false);
    return (
        <>
            <div className="header">
                <div className="home_button">홈으로</div>
            </div>
            <div className="setting_wrap">
                <div className="edit_profile">
                    <h1>프로필 수정</h1>
                    <span>※이 기능은 미구현 상태입니다.</span>
                    <div className="edit_profile_box">
                        <div className="profile_img_container">
                            <img
                                src="https://th1.tmon.kr/thumbs/image/3cc/3fa/d56/475318fb7_700x700_95_FIT.jpg"
                                alt="프로필"
                                className="profile"
                            />
                            <div className="profile_setting">
                                <img
                                    src="data:image/png;base64,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"
                                    alt=""
                                    className="setting_img"
                                />
                            </div>
                        </div>
                        <div className="name_grade_container">
                            <div className="profile_name">홍준혁</div>
                            <div className="profile_grade">1학년 2반 20번</div>
                        </div>
                        <div className="change_password_container">
                            <button id="change_password">비밀번호 변경</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>라이트 / 다크모드 설정</h1>
                    <span>※이 기능은 미구현 상태입니다.</span>
                    <div className="setting_modes_box">
                        <label for="light_mode">
                            <div className="light_mode_container">
                                라이트 모드
                                <input
                                    type="radio"
                                    name="mode"
                                    checked="checked"
                                    id="light_mode"
                                />
                            </div>
                        </label>
                        <label for="night_mode">
                            <div className="night_mode_container">
                                다크모드
                                <input
                                    type="radio"
                                    name="mode"
                                    id="night_mode"
                                />
                            </div>
                        </label>
                    </div>
                </div>
                <div>
                    <h1>푸쉬알람 설정</h1>
                    <span>※이 기능은 미구현 상태입니다.</span>
                    <div className="setting_alarm_box">
                        <label for="setting_alarm">
                            <span className="display_push_alarm_text">
                                푸쉬알람 설정
                            </span>
                        </label>
                        <input
                            type="checkbox"
                            id="setting_alarm"
                            onChange={() => {
                                setOnOff(!onOff);
                                if (onOff === true) {
                                    alert("푸쉬알람이 해제되었습니다.");
                                } else {
                                    alert("푸쉬알람이 설정되었습니다.");
                                }
                            }}
                        />
                    </div>
                </div>
                <div>
                    <h1>문의 / 도움센터</h1>
                    <span>※이 기능은 미구현 상태입니다.</span>
                    <div className="help_box"></div>
                </div>
            </div>
            <div className="footer"></div>
        </>
    );
}

export default Setting;
