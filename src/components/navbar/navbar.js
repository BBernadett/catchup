import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logoIcon from "../../img/wheel.png";

function NavItems(props) {
  return (
    <div className="list-group flex-row list-group-flush header-content mt-5 nav-text">
      <div className="list-group flex-row ">
        <img src={logoIcon} alt="logo-icon" className="logo-icon" />
        <p className="fs-1 ps-2 fw-bold m-auto">Padlógáz</p>
      </div>
      <ul className="list-group flex-row list-group-flush mt-2">
        {props.list_items.map((item, index) => (
          <li key={index} className="fs-4 ps-4 fw-bold text-uppercase m-auto">
            {item}
          </li>
        ))}
      </ul>
      <button className="p-2 ps-5 pe-5 rounded-pill fw-bold fs-5 text-white header-button">
        Jelentkezés
      </button>
    </div>
  );
}

function NavbarList() {
  const nav_list = [
    "Tanfolyamok",
    "kategóriák",
    "oktatási díjak",
    "oktatóink",
    "e-learning",
  ];
  return <NavItems list_items={nav_list} />;
}
export default NavbarList;
