import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.scss";

function HeaderList(props) {
  return (
    <div className="header-content">
      <ul className="list-group d-flex flex-row list-group-flush mt-2 lh-2 pb-2 header-info">
        {props.sub_items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Header() {
  const header_items = [
    "Tanpálya: 1190, Budapest, Kossith Lajos utca 74.",
    "Iroda: 1120 Budapest, Maros utca 3.",
    "Tel: +36 1 333 98 76",
    "Facebook: autosiskola",
    "E-mail: hello@autosiskola.com",
  ];
  return <HeaderList sub_items={header_items} />;
}

export default Header;
