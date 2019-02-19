import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../styles/images/pig-logo.png'
import { removeUser } from '../../actions';
import { connect } from 'react-redux';

export const Header = (props) => {
  return (
    <header>
      <div className="container">
        <div className="header-logo">
          <h1>from<span>the</span>farm</h1>
          <img id="logo" src={image} alt="from the farm cute pig logo"/>
          <p>menu<i className="fas fa-caret-right"></i></p>
          <div className="menu">
            <Link to="/buy"><i className="fas fa-carrot"><p>buy</p></i></Link>
            <Link to="/profile"><i className="fas fa-user-circle"><p>my profile</p></i></Link>
            <Link to="/add-product"><i className="fas fa-plus-circle"><p>inventory</p></i> </Link>
            <Link to="/" onClick={() => props.removeUser()}><i className="fas fa-sign-out-alt"><p>sign out</p></i></Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  removeUser: () => dispatch(removeUser())
})

export default connect(null, mapDispatchToProps)(Header);