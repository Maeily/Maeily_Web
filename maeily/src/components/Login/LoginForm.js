import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onSubmit = () => {
        if (email.includes("@dgsw.hs.kr")) {
            if (email === "edb1631@dgsw.hs.kr") {
                if (password === "wnsgur34") {
                    alert("로그인에 성공하였습니다.");
                    //여기에 메인화면으로 가는 라우터를 추가해주세요!
                } else {
                    alert("비밀번호가 틀렸습니다.");
                }
            } else {
                alert("아이디 이메일이 틀렸습니다.");
            }
        } else {
            alert("대구소프트웨어 고등학교 이메일을 입력해주세요.");
            setEmail("");
        }
    };
    return (
        <div className="login_wrap">
            <div className="title">
                <div className="mainTitle">매일리</div>
                <div clasName="subTitle">우리들의 일정을 관리하자!</div>
            </div>
            <div className="login_form_wrap">
                <form action="">
                    <input
                        type="id"
                        className="form_input"
                        placeholder="아이디를 입력해주세요"
                        onChange={onChangeEmail}
                        value={email}
                    />

                    <input
                        type="password"
                        className="form_input"
                        placeholder="비밀번호를 입력해주세요"
                        onChange={onChangePassword}
                        value={password}
                    />

                    <input
                        type="button"
                        className="form_input input_submit"
                        value="로그인"
                        onClick={onSubmit}
                    />
                </form>
            </div>
            <div>회원이 아니신가요?</div>
        </div>
    );
}

export default LoginForm;
