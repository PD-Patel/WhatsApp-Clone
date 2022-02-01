import React from "react";
import "./Home.css";
import Sidebar from "./Sidebar";

function Home({ currentUser, signOut }) {
  return (
    <div className="home">
      <div className="home-container">
        {/* SideBar */}
        <Sidebar currentUser={currentUser} signOut={signOut} />
        {/* a container with whatsapp-logo */}
        <div className="home-bg">
          <img src="./WhatsAppbg.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
