import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

export const HeaderComponent = () => {
  const [btnNameState, setbtnNameState] = useState("Login");

  return (
    <div className="header">
      <div className="log-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameState === "Login"
                ? setbtnNameState("Logout")
                : setbtnNameState("Login");
            }}
          >
            {btnNameState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
