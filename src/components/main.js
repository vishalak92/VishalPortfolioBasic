import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


const Main = () => (
  <Route render={({location}) => (
    <TransitionGroup>
      <CSSTransition
      key={location.key}
      timeout={300}
      classNames="fade"
      >
        <Switch location ={location}>
          <Route exact path = "/" component = {LandingPage} />
          <Route path = "/contact" component = {Contact} />
          <Route path = "/projects" component = {Projects} />
          <Route path = "/resume" component = {Resume} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>

  )} />

)

export default Main;
