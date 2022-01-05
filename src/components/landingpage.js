import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import profilepic2 from './media/pp2.jpg';
import profilepic2 from './pp2.jpg';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={profilepic2}
              alt="avatar"
              className="avatar-img"/>

              <div className="banner-text">
              <h1>Software Developer</h1>

            <hr/>

          <p>Java | C++ | Python | ML/AI </p>

        <div className="social-links">

          <a href="https://www.linkedin.com/in/ramzi-haddad-59136215a/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          <a href="https://github.com/ramzihaddad12" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          <a href="https://twitter.com/ramzih15" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>

          <a href="https://www.instagram.com/ramzih15/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;