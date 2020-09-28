import React, { useState } from "react";
import "./SignUpForm.scss";

const Swal = require("sweetalert2"); //Swal 라이브러리 가져오기
const axios = require("axios"); // axios 라이브러리 가져오기

function SignUpForm() {
    const url = "";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onSubmit = () => {
        //인증번호 요청이 들어왔을때
        axios({
            method: "post",
            url: url,
            data: {
                user_name: name,
                user_email: email,
                user_pw: password,
            },
        })
            .then(
                Swal.fire({
                    icon: "success",
                    title: "와우!",
                    text: "인증번호 보내기 성공!",
                    showConfirmButton: false,
                    timer: 1500,
                    confirmButtonColor: "#B7DE4B",
                })
            )
            .catch(
                Swal.fire({
                    icon: "error",
                    title: "이런...",
                    text: "서버오류가 났어요...",
                    confirmButtonColor: "#B7DE4B",
                })
            );
        /*
        Swal.fire({
            icon: "success",
            text: "인증번호 보내기 성공!",
            showConfirmButton: false,
            timer: 1500,
            confirmButtonColor: "#B7DE4B",
        });
        */
    };
    return (
        <div className="signUpForm_Wrapper">
            <div>
                <div className="title">
                    <div id="form_mainTitle">매일리</div>
                    <div id="form_subTitle">우리들의 일정을 관리하자</div>
                </div>
                <div className="form_inputs">
                    <table>
                        {/*이름 이메일 비번 기수*/}
                        <tr>
                            <td className="form_name">이름 : </td>
                            <td>
                                <input
                                    type="text"
                                    className="form_input"
                                    placeholder="이름을 입력해주세요"
                                    onChange={onChangeName}
                                    value={name}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td className="form_name">이메일 : </td>
                            <td>
                                <input
                                    type="email"
                                    className="form_input"
                                    placeholder="이메일을 입력해주세요"
                                    onChange={onChangeEmail}
                                    value={email}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="form_name">비밀번호 : </td>
                            <td>
                                <input
                                    type="password"
                                    className="form_input"
                                    placeholder="비밀번호를 입력해주세요"
                                    onChange={onChangePassword}
                                    value={password}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="form_name">기수 : </td>
                            <td>
                                <select name="" id="" className="form_input">
                                    <option value="1">1기</option>
                                    <option value="2">2기</option>
                                    <option value="3">3기</option>
                                    <option value="4">4기</option>
                                    <option value="5">5기</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input
                                    type="button"
                                    value="인증번호 받기"
                                    className="form_input submit_button"
                                    onClick={onSubmit}
                                />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
