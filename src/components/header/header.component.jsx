//= Import
import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import { auth } from "../../firebase/firebase.utils";
import {createStructuredSelector} from 'reselect'

import { ReactComponent as Logo } from "../../assets/crown.svg";

//=Component
import CartIcon from '../cart-icon/cart-icon-component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'

import "./header.styles.scss";

const Header = ({ currentUser, hidden}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      {" "}
      {/* Me permet de revenir sur lahome en cliquant sur le logo*/}
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        {" "}
        {/* Lien vers le shop*/}
        SHOP
      </Link>
      <Link className="option" to="/shop">
        {" "}
        {/* Lien vers contact*/}
        CONTACT
      </Link>
       {/* Si currentUser est true alors affiche sign out sinon affiche sign in */}
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
    {/*Gestion de l'affichage de cartDropdown */}
   { 
     hidden ? null : 
      <CartDropdown/>
   }
  </div>
);

//Gestion de l'affichage du cartDropdown 
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden

});

export default connect(mapStateToProps)(Header);
