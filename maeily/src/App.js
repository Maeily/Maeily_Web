import React from "react";
import LoginContainer from "./containers/Auth/Login/LoginContainer";
import JoinContainer from "./containers/Auth/Join/JoinContainer";

const SERVER = `http://10.80.163.100:8080`;

function App() {
    return (
        <>
            <LoginContainer server={SERVER} />
            <JoinContainer server={SERVER} />
        </>
    );
}

export default App;
