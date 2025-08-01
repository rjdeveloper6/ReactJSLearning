import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

export const HeaderComponent = () => {
  const [btnNameState, setbtnNameState] = useState("Login");

  useEffect(() => {
    // Perform side effect here
  }, []);

  return (
    <div className="header">
      <div className="log-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
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
