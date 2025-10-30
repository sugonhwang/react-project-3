import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ auth, setAuth }) => {
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      {auth ? (
        <div className="login-button" onClick={() => setAuth(false)}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그아웃</div>
        </div>
      ) : (
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      )}

      <div className="nav-section">
        <Link to="/">
          <img src="https://images.seeklogo.com/logo-png/52/2/hm-logo-png_seeklogo-520857.png" width={100} alt="" />
        </Link>
      </div>

      <div className="menu-area">
        <button className="hamburger-btn hamburger-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className={`menu-list ${isMenuOpen ? "menu-open" : ""}`}>
          <button className="hamburger-btn hamburger-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <div className="input-box">
            <input className="search-area" type="text" placeholder="Search" onKeyPress={(event) => search(event)} />
            <span className="under-line"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
