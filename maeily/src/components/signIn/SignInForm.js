import React, { useState } from "react";
import "./SignInForm.scss";
function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onSubmit = () => {
        console.log(email, password);
    };
    return (
        <div className="signInForm_Wrapper">
            <div className="singIn_inputs">
                <div className="title">
                    <div id="form_mainTitle">매일리</div>
                    <div id="form_subTitle">우리들의 일정을 관리하자</div>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                    placeholder="이메일"
                                    className="form_input"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>PW</td>
                            <td>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    placeholder="비밀번호"
                                    className="form_input"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input
                                    type="button"
                                    onClick={onSubmit}
                                    id="submit_button"
                                    value="로그인"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="goto_signUp">
                    회원이 아니신가요?
                    <span className="goto_signUp_link">회원가입</span>
                </div>
            </div>
        </div>
    );
}

export default SignInForm;
