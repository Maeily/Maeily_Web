import React from "react";
import "./Join.scss";

export default function Join({ state, onChange, onSubmit }) {
    const { email, intro, name, password, chkPwd } = state;
    return (
        <div className="JoinDiv">
            <h1 className="JoinDiv_title">회원가입</h1>
            <div className="JoinDiv_form">
                <input
                    type="text"
                    placeholder="이름을 입력해주세요"
                    name="name"
                    value={name}
                    onChange={onChange}
                />
                <input
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    name="email"
                    value={email}
                    onChange={onChange}
                />
                <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    name="password"
                    value={password}
                    onChange={onChange}
                />
                <input
                    type="password"
                    placeholder="비밀번호 다시!"
                    name="chkPwd"
                    value={chkPwd}
                    onChange={onChange}
                />
                <textarea
                    placeholder="나를 소개하는 한마디!"
                    name="intro"
                    value={intro}
                    onChange={onChange}
                />
                <button onClick={onSubmit}>회원가입</button>
            </div>
        </div>
    );
}
