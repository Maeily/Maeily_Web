import React, { useState } from "react";
import Join from "../../../components/Auth/Join/Join";
import axios from "axios";
import { SERVER } from "../../../server_url";

export default function JoinContainer() {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        chkPwd: "",
        intro: "",
    });
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const { name, email, password, intro } = state;
    const onSubmit = async () => {
        console.log(name, email, password, intro);
        try {
            const joinInfo = await axios.post(`${SERVER}/register`, {
                name: name,
                email: email,
                password: password,
                intro: intro,
            });
            console.log(joinInfo);
        } catch (err) {
            console.log(err);
        }
    };
    return <Join state={state} onChange={onChange} onSubmit={onSubmit} />;
}
