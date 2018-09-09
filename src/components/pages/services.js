import React, { Component } from 'react';
import Background from './images/service.jpg';
var sectionStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${Background})`
};
class Services extends Component {
  render() {
    return (
      <div className="service">

      <section style={ sectionStyle }>
        </section>
      </div>
    );
  }
}

export default Services;
