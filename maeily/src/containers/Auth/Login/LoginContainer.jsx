import React from "react";
import { useState } from "react";
import Login from "../../../components/Auth/Login/Login";
import axios from "axios";

export default function LoginContainer({ server }) {
    const [id, setId] = useState();
    const [password, setPassword] = useState();

    const onSubmit = async () => {
        try {
            const loginInfo = await axios.post(`${server}/login`, {
                email: id,
                password: password,
            });
            console.log(loginInfo);
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
