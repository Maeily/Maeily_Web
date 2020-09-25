import React from "react";
import "./LoginForm.css";

function LoginForm() {
    return (
        <div className="wrap">
            <div className="title">매일리</div>
            <div className="login_form_wrap">
                <form action="">
                    <div>
                        <input
                            type="id"
                            className="form_input"
                            placeholder="아이디를 입력해주세요"
                        />
                        <input
                            type="password"
                            className="form_input"
                            placeholder="비밀번호를 입력해주세요"
                        />
                    </div>
                    <input
                        type="button"
                        className="form_input input_submit"
                        value="로그인"
                    />
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
