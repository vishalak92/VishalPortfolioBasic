import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import ProfilePic from '../resources/ProfilePic.png'
//import {List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2> Vishal Khatri </h2>
            <img
            src = {ProfilePic}
            alt = "avatar"
            style = {{height: "250px"}} />
            <p style={{width:"75%", margin: "auto", paddingTop: "1em"}}> Put some text here. Put some text here.Put some text here.Put some text here.Put some text here.Put some text here.Put some text here.Put some text here.Put some text here.Put some text here.Put some text here.Put some text here.Put some text here.Put some text here.</p>
          </Cell>
          <Cell col={6}>
            <h2> Contact Me </h2>
            <hr/>
          <div className = "contact-list">
          <Grid>
            <Cell col={3}>
                  <i className= "fa fa-phone-square" aria-hidden = "true"/>
            </Cell>
            <Cell col={9}>
            <h2> (206) 427-0515 </h2>
             </Cell>
          </Grid>

          <Grid>
            <Cell col={3}>
                  <i className= "fa fa-envelope" aria-hidden = "true"/>
            </Cell>
            <Cell col={9}>
            <h2> vishalak@uw.edu </h2>
             </Cell>
          </Grid>

          <Grid>
            <Cell col={3}>
                  <i className= "fa fa-envelope" aria-hidden = "true"/>
            </Cell>
            <Cell col={9}>
            <h2> vishalak92@gmail.com </h2>
             </Cell>
          </Grid>
          </div>

          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Contact;
