import React, { Component } from 'react';
import Background from './images/background2.jpg';

var sectionStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${Background})`
};
class Homepage extends Component {
  render() {
    return (
    

        <section style={ sectionStyle }>
        </section>
    
    );
  }
}

export default Homepage;
