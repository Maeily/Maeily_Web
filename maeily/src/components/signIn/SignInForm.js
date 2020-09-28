import React, { useState } from "react";
import "./SignInForm.scss";

// CommonJS
const Swal = require("sweetalert2"); //Swal 라이브러리 가져오기
const axios = require("axios"); // axios 라이브러리 가져오기

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
        const url = "http://10.80.161.119:8000/api/auth/login";
        axios({
            method: "post",
            url: url,
            data: {
                id: email,
                pw: password,
            },
        })
            .then((response) => {
                Swal.fire({
                    icon: "success",
                    title: "와우!",
                    text: "로그인에 성공했어요!.",
                    showConfirmButton: false,
                    timer: 1500,
                    confirmButtonColor: "#B7DE4B",
                });
                if (response === "200") {
                    //성공했을 시, 메인화면으로 넘어감
                }
            }) //서버로부터 받아 온 값을 log에 찍는다.
            .catch((response) => {
                console.log(response);
                Swal.fire({
                    icon: "error",
                    title: "이런...",
                    text: "회원정보가 올바르지 않아요.",
                    confirmButtonColor: "#B7DE4B",
                });
            }); //받아온 과정에서 오류가 발생하면 오류가 발생했다고 알린다.
    };
    const onEnterPress = (e) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    };
    return (
        <div className="signInForm_Wrapper">
            <div className="singIn_inputs">
                <div className="title">
                    <div id="form_mainTitle">매일리</div>
                    <div id="form_subTitle">우리들의 일정을 관리하자</div>
                </div>
                <table onKeyPress={onEnterPress}>
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
