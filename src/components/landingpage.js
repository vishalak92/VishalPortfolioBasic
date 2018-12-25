import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import ProfilePic from '../resources/ProfilePic.png'

class Landing extends Component{
  render(){
    return(
      <div style={{width: "100%", margin: "auto", overflow: "auto"}}>
        <Grid className= "landing-grid">
          <Cell col={12}>
            <img
              src = {ProfilePic}
              alt = "avatar"
              className = "avatar-img"
            />

            <div className = "banner-text">
              <h1> Hi! I am Vishal Khatri. </h1>

              <hr/>

              <p> Areas of Interest: Data Engineering || Business Intelligence || Data Analysis || Data Visualization || Product Management </p>
              <p> Tools and Technologies: SQL || PL/SQL || JAVA || Python || Tableau </p>

              <div className = "social-links">

                {/* LinkedIn */}
                <a href = "https://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden = "true" />
                </a>

                {/* Github */}
                <a href = "https://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden = "true" />
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
