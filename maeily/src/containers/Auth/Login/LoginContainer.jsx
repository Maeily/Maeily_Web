import React from "react";
import { useState } from "react";
import Login from "../../../components/Auth/Login/Login";
import axios from "axios";
import { SERVER } from "../../../server_url";

export default function LoginContainer() {
    const [id, setId] = useState();
    const [password, setPassword] = useState();

    const onSubmit = async () => {
        try {
            const loginInfo = await axios.post(`${SERVER}/login`, {
                email: id,
                password: password,
            });
            localStorage.setItem("token", loginInfo.data.data.token);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Login
            id={id}
            setId={setId}
            password={password}
            setPassword={setPassword}
            onSubmit={onSubmit}
        />
    );
}
