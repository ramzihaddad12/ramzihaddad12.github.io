import React from "react";
import LandingPage from './landingpage';
import Projects from './projects';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Hivemate from './hivemate';


import {Switch, Route} from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'

// import { Route, Switch } from "react-router";

const Main = () =>(
    <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/projects" component={Projects} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route path="/hivemate" component={Hivemate} />
    </Switch>
)

export default Main;