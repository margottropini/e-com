//= Import
import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

//MenuItem
const MenuItem = (
  { title, imageUrl, size, history, linkUrl, match } // Je récupère les props de .Directory
) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

//Export avec WithRouter pour avoir accès a history
export default withRouter(MenuItem);
