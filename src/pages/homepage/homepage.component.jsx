//= Import
import React from "react";

//= Styles scss
import "./homepage.styles.scss";

//= Import component
import Directory from "../../components/directory/directory.component";

//HomePage
const HomePage = ({ history }) => (
  <div className="homepage">
    <Directory history={history} />
  </div>
);

export default HomePage;
