//=Import
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {connect} from "react-redux"
import {createStructuredSelector} from 'reselect'


//= Import components
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from './pages/checkout /checkout.componenet'


import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'


class App extends React.Component {
  //Plus besoin de cette partie puisque j'ai le reducer 


  /*constructor() {
    super();

    //State local
    this.state = {
      currentUser: null,
    };
  } */

  unsubscrubeFromAuth = null;

  //Détermine si le user est authentifier ou pas
  componentDidMount() {
    const {setCurrentUser} = this.props;


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);

      //console.log(setCurrentUser)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Router>
          <Header />
          {/* Mettre le header a dessus du switch, me permet de l'avoir de partout */}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route 
            exact  
            path="/signin" 
            render={() => 
            this.props.currentUser ? (
            <Redirect to ='/' />
            ) : (
              <SignInAndSignUpPage />
              )
              }
               />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


// user.actions.js
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user=> dispatch(setCurrentUser(user))

})
export default connect(mapStateToProps,mapDispatchToProps)(App);
