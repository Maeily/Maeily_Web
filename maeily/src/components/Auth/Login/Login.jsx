import React from "react";
import "./Login.scss";

export default function Login({ id, setId, password, setPassword, onSubmit }) {
    return (
        <div className="LoginDiv">
            <h1 className="LoginDiv_title">로그인</h1>
            <div className="LoginDiv_form">
                <input
                    type="text"
                    placeholder="이메일을 입력해주세요"
                    onChange={(e) => {
                        setId(e.target.value);
                    }}
                    value={id}
                />
                <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                />
                <button onClick={onSubmit}>로그인</button>
            </div>
        </div>
    );
}
