import React from "react";
import LoginFormWrapper from "./components/Login/LoginFormWrapper";
import LoginForm from "./components/Login/LoginForm.js";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <LoginFormWrapper>
                <div className="Login_content_box"></div>
                <LoginForm></LoginForm>
            </LoginFormWrapper>
        </div>
    );
}

export default App;
