import React from "react";
import "./Join.scss";

export default function Join() {
    return (
        <div className="JoinDiv">
            <h1 className="JoinDiv_title">회원가입</h1>
            <div className="JoinDiv_form">
                <input type="text" placeholder="이름을 입력해주세요" />
                <input type="email" placeholder="이메일을 입력해주세요" />
                <input type="password" placeholder="비밀번호를 입력해주세요" />
                <input type="password" placeholder="비밀번호 다시!" />
                <textarea placeholder="나를 소개하는 한마디!" />
                <button>회원가입</button>
            </div>
        </div>
    );
}
