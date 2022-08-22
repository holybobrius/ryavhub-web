import React, { FC } from "react";
import LoginButton from "../../components/LoginButton/LoginButton";
import "./LockedHome.css";

const LockedHome: FC = () => (
  <section className="section-locked">
    <div className="img-box">
      <img
        src={require("../../assets/images/sadface.png")}
        alt="Sad face Emoji"
      />
    </div>
    <div className="text-box">
      <h1 className="heading">РявХаб</h1>
      <p className="info-text">Дружище, дальше придется залогиниться...</p>
      <LoginButton />
    </div>
  </section>
);
export default LockedHome;
