import React from "react";
import Profile from "../components/Main/Profile/Profile";
import Cafeteria from "../components/Main/Cafeteria/Cafeteria";
import Channel from "../components/Main/Channel/Channel";

function MainPage() {
    return (
        <>
            <Profile></Profile>
            <Cafeteria></Cafeteria>
            <Channel></Channel>
        </>
    );
}

export default MainPage;
