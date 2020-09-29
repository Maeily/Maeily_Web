import React from "react";
import "./LoginForm.scss";

const Swal = require("sweetalert2");

const onSubmit = () => {
    Swal.fire({
        title: "성공!",
        text: "로그인에 성공했습니다",
        icon: "success",
        confirmButtonColor: " #b7de4b",
        timer: 1000,
        showConfirmButton: false,
    });
    //성공 시

    Swal.fire({
        title: "실패!",
        text: "로그인에 실패했습니다",
        icon: "error",
        confirmButtonColor: " #b7de4b",
        timer: 1000,
        showConfirmButton: false,
    });
    //실패 시
};

function LoginForm() {
    return (
        <div className="LoginForm_wrapper">
            <div className="title">
                <div className="title_mainTitle">매일리</div>
                <div className="title_subTitle">우리들의 일정을 관리하자</div>
            </div>
            <div className="login">
                <input
                    type="id"
                    name=""
                    className="login_id"
                    placeholder="아이디(대소고 이메일)를 입력해주세요"
                />
                <br />
                <input
                    type="password"
                    name=""
                    className="login_pw"
                    placeholder="비밀번호를 입력해주세요"
                />
                <br />
                <input
                    type="button"
                    value="로그인"
                    className="login_submit"
                    onClick={onSubmit}
                />
            </div>
            <div className="signOn">
                <div className="signOn_text">회원이 아니신가요?</div>
                <div className="signOn_link">회원가입</div>
            </div>
        </div>
    );
}

export default LoginForm;
