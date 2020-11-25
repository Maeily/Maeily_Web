import React, { useState } from "react";
import Join from "../../../components/Auth/Join/Join";
import axios from "axios";

export default function JoinContainer({ server }) {
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
            const joinInfo = await axios.post(`${server}/register`, {
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
