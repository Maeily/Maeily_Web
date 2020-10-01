import React, { useState } from "react";
import "./SignOnForm.scss";

const Swal = require("sweetalert2");

function SignOnForm() {
    const [name, setName] = useState("");
    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const [email, setEmail] = useState("");
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const [password, setPassword] = useState("");
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const [grade, setGrade] = useState("");
    const onChangeGrade = (e) => {
        setGrade(e.target.value + "기");
    };

    const onSubmit = () => {
        console.log(name, email, password, grade);
        Swal.fire({
            title: "성공!",
            text: "회원가입에 성공했습니다",
            icon: "success",
            confirmButtonColor: " #b7de4b",
            timer: 1000,
            showConfirmButton: false,
        });
        //성공했을 시
        /*
        Swal.fire({
            title: "실패...",
            text: "여러가지 이유...로 실패",
            icon: "error",
            confirmButtonColor: " #b7de4b",
            timer: 1000,
            showConfirmButton: false,
        });
        */
        //실패했을 시
    };

    return (
        <div className="SignOnForm">
            <div className="SignOnForm_title">
                <div className="SignOnForm_title_mainTitle">매일리</div>
                <div className="SignOnForm_title_subTitle">
                    우리들의 일정을 관리하자
                </div>
            </div>
            <div className="SignOnForm_inputs">
                {/*이름 / 이메일(dgsw 계정만, 아이디) / 비번 / 기수 선택*/}

                <input
                    type="text"
                    placeholder="이름을 입력해주세요"
                    value={name}
                    onChange={onChangeName}
                    className="SignOnForm_inputs_input"
                />
                {/*이름*/}

                <input
                    type="text"
                    placeholder="이메일(학교)계정"
                    value={email}
                    onChange={onChangeEmail}
                    className="SignOnForm_inputs_input"
                />
                {/*이메일*/}

                <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onChange={onChangePassword}
                    className="SignOnForm_inputs_input"
                />
                {/*비밀번호*/}

                <input
                    type="number"
                    placeholder="기수를 입력해주세요"
                    onChange={onChangeGrade}
                    className="SignOnForm_inputs_input"
                />
                {/*기수*/}

                <input
                    type="button"
                    value="회원가입"
                    className="SignOnForm_inputs_input SignOnForm_inputs_input_submit"
                    onClick={onSubmit}
                />
            </div>

            <div className="gotoLogin">로그인 화면으로</div>
        </div>
    );
}

export default SignOnForm;
