//=Import
import React from "react";
//=Component
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

//=Styles
import "./sign-in-and-sign-up.component.styles.scss";

const SignInAnSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAnSignUpPage;
