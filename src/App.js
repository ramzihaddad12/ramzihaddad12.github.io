import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, HeaderRow, Textfield} from 'react-mdl'
import Main from './components/main';
import {Link , HashRouter, Router, Route, BrowserRouter} from 'react-router-dom';
import Resume from './components/resume';
import AboutMe from './components/aboutme';
import HiveMate from './components/hivemate';
import Projects from './components/projects';
import Contact from './components/contact';
import { Switch } from 'react-mdl';
import ReactDOM from 'react-dom';

function App () {
  return (
    <div className="demo-big-content">
    <Layout>
            <Header title={<a href="/">Title</a>} className = "header-color" title="Ramzi Haddad" scroll>

            <Navigation>
               {/*<Link to="/resume">Resume</Link>*/}
              <Link to="/aboutme">About Me</Link>
              <Link to="/hivemate">HiveMate</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Ramzi Haddad">
            <Navigation>

                {/*<Link to="/resume">Resume</Link>*/}
              <Link to="/aboutme">About Me</Link>
              <Link to="/hivemate">HiveMate</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
    
</div>
  );
}

export default App;
