import logo from "../../Images/assets/LUSD.png";
import React from 'react';
import "./section2.css";

function exchangeInfoCard() {
    return (
      <div className="liberty__bond">
        <div className="wrapper">
          <h2 className="liberty__ldr">Liberty Bond</h2>
          <div className="ldr">
            <h2 className="liberty__ldr ldr_h2">LBB</h2>
            <img src={logo} alt="LUSD"></img>
          </div>
          <h1 className="ldr__price">$81.4</h1>
          <p className="ldr__current">Current Price</p>
          <hr />
          <h1 className="ldr__count">3,000,000</h1>
          <p className="ldr__supply">Circulating Supply</p>
          <hr />
        </div>
      </div>
    );
}
export default exchangeInfoCard