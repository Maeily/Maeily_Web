import React from "react";
import LoginContainer from "./containers/Auth/Login/LoginContainer";
import JoinContainer from "./containers/Auth/Join/JoinContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const SERVER = `http://10.80.163.100:8080`;

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/join" component={JoinContainer} />
                <Route
                    path="*"
                    render={() => {
                        return <h1>NOT FOUND</h1>;
                    }}
                />
            </Switch>
        </BrowserRouter>

        // <LoginContainer server={SERVER} />
        // <JoinContainer server={SERVER} />
    );
}

export default App;
