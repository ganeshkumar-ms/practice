import React from "react";
import './home.css';
import { Outlet } from "react-router-dom";

function Home() {
    return (
        <div className="sample">
            <h2>Home Page JSX File..!</h2>
            {/* <img src="https://us.123rf.com/450wm/last19/last191804/last19180400184/100595887-photographer-asian-woman-travel-nature-travel-relax-nature-study-in-the-jungle-thailand.jpg?ver=6" alt="" /> */}
            <div className="demorouting">
                <div className="sidebar">
                    <li><a href="/home/home1">Home 1</a></li>
                    <li><a href="/home/home2">Home 2</a></li>
                    <li><a href="/home/home3">Home 3</a></li>
                    <li><a href="/home/home4">Home 4</a></li>
                </div>
                <div className="mainoutput">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Home;