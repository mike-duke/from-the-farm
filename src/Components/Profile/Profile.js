import React, { Component } from 'react';
import { Redirect } from 'react-router';
import ProductList from '../ProductList/ProductList';
import farmImage from '../../styles/images/farm.jpeg';
import { connect } from 'react-redux';

export class Profile extends Component {

  render() {
    const { name, bio, address, phone, email, city, state, id, products } = this.props.user
    let redirect
    
    if (!name) {
      redirect = <Redirect to="/login"/>
    } 
    
    return (
      <section className="profile">
        { redirect }
        <h3>{name}</h3>
          <section className="vender-info">
            <div className="img-container">
              <img id="farm" src={farmImage} alt="Farm"/>
            </div>
            <div className="contact-info">
              <h4>{address}</h4>
              <h4>{city}, {state}</h4>
              <h4>{email}</h4>
              <h4>{phone}</h4>
            </div>
          </section>
          <p>{bio}</p>
          <section className="vender-products">
            <ProductList products={products} />
          </section>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Profile);