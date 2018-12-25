import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import ProfilePic from '../resources/ProfilePic.png'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4} className = 'resume-left-col'>
            <div style={{textAlign: 'center'}}>
              <img
                src={ProfilePic}
                alt="avatar"
                style={{height: '300px', margin:'0', paddingTop: '3em', paddingRight: '10em'}}
                 />
            </div>

            <h2 style={{paddingTop: '1em'}}>Vishal Khatri</h2>
            <h4 style={{color: 'grey'}}>Programmer - Dreamer - Problem Solver</h4>
            <hr style={{borderTop: '5px dotted black', width: '75%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '5px dotted black', width: '75%'}}/>
            <h5>Address</h5>
            <p>5901 Roosevelt Way NE, Apt 309, Seattle - 98105, WA, USA </p>
            <h5>Phone</h5>
            <p>(206) 427-0515</p>
            <h5>Email</h5>
            <p>vishalak@uw.edu</p>
            <h5>Alternate Email</h5>
            <p>vishalak92@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />
               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '5px dotted black', width: '75%'}}/>
              <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobTitle="Title"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobTitle="Title"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '5px dotted black', width: '75%'}}/>
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
              <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
              <Skills
                    skill="NodeJS"
                    progress={50}
                    />
              <Skills
                      skill="React"
                      progress={25}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
