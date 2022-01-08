import React, {Component} from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component{

    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
          return(
            <div className="projects-grid">

              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{textAlign: 'center', color: '#000000', height: '176px', background: 'url(https://raw.githubusercontent.com/ramzihaddad12/PacMan-AI/main/pacman.jpg) center / cover'}} >PacMan-AI</CardTitle>
                <CardText>
                Applying search and RL techniques to the Pac-Man video game using Python
                </CardText>
                <CardActions border style={{textAlign: 'center'}}>
                  <Button colored ><a href="https://github.com/ramzihaddad12/PacMan-AI" target="_blank">GitHub</a></Button>
                </CardActions>
              </Card>

              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{textAlign: 'center', color: '#000000', height: '176px', background: 'url(https://raw.githubusercontent.com/ramzihaddad12/Convex-Optimization/main/Optimized%20Avoidance.jpg) center / cover'}} >Convex Optimization</CardTitle>
                <CardText>
                Generating collision-free trajectories in 3D space for multiple quadcopters within seconds using Sequential Convex Programming (SCP)
                </CardText>
                <CardActions border style={{textAlign: 'center'}}>
                  <Button colored ><a href="https://github.com/ramzihaddad12/Convex-Optimization" target="_blank">GitHub</a></Button>
                </CardActions>
              </Card>
    
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://raw.githubusercontent.com/ramzihaddad12/Arabizi-Sentiment-Analysis/main/Solution.jpg) center / cover'}} >Arabizi Sentiment Analysis</CardTitle>
                <CardText>
                Translating Arabic Tweets to Arabizi (Arabic using Roman letters) and detecting offensive content in Arabizi using different types of models such as multinomial Naive Bayes, BiLSTM, CNN-LSTM , and pre-trained BERT
                </CardText>
                <CardActions border style={{textAlign: 'center'}}>
                  <Button colored ><a href="https://github.com/ramzihaddad12/Arabizi-Sentiment-Analysis" target="_blank">GitHub</a></Button>
                </CardActions>

                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>
    
    
          )
        } else if(this.state.activeTab === 1) {
          return (
            <div>
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{textAlign: 'center', color: '#000000', height: '176px', background: 'url(https://apk-s.io/wp-content/uploads/2020/12/Maze-Dungeon-Cover.jpg) center / cover'}} >Maze Game</CardTitle>
                <CardText>
                An action maze chase game using the MVC pattern in Java (Upon Request)
                </CardText>
                {/* <CardActions border style={{textAlign: 'center'}}>
                  Upon Request
                </CardActions> */}
              </Card>

              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{textAlign: 'center', color: '#000000', height: '176px', background: 'url(https://img.favpng.com/13/18/18/automated-teller-machine-what-s-inside-the-box-bank-symbol-png-favpng-DV201A2S1CVbLVyLwdGC7BD9M.jpg) center / cover'}} >ATM System</CardTitle>
                <CardText>
                A Bank ATM System using Object Oriented Programming (OOP) in Java
                </CardText>
                <CardActions border style={{textAlign: 'center'}}>
                  <Button colored ><a href="https://github.com/ramzihaddad12/ATMSystem" target="_blank">GitHub</a></Button>
                </CardActions>
              </Card>

              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{textAlign: 'center', color: '#000000', height: '176px', background: 'url(https://www.bluewhyte.com/assets/images/school-management-icon.png) center / cover'}} >School Management System</CardTitle>
                <CardText>
                A coordinated and organized system to manage a school's finances in terms of student tuition and teacher salaries using Object Oriented Programming in Java
                </CardText>
                <CardActions border style={{textAlign: 'center'}}>
                  <Button colored ><a href="https://github.com/ramzihaddad12/SchoolManagementSystem" target="_blank">GitHub</a></Button>
                </CardActions>
    
              </Card>
            </div>
          )
        } else if(this.state.activeTab === 2) {
          return (
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{textAlign: 'center', color: '#000000', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >React Website</CardTitle>
              <CardText>
              This website
              </CardText>
              <CardActions border style={{textAlign: 'center'}}>
                <Button colored ><a href="https://github.com/ramzihaddad12/ramzihaddad12.github.io" target="_blank">GitHub</a></Button>
              </CardActions>
            </Card>
          </div>
          )
        } else if(this.state.activeTab === 3) {
          return (
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{textAlign: 'center', color: '#fff', height: '176px', background: 'url(https://raw.githubusercontent.com/ramzihaddad12/Quanser-3DOF-Hover-Quadcopter-usingLQR/main/PHOTO-2019-12-03-16-04-56.jpg) center / cover'}} >Stabilizing Quadcopter using LQR</CardTitle>
              <CardText>
              Stabilizing and controlling a quadcopter via LQR using MATLAB & Simulink.

              </CardText>
              <CardActions border style={{textAlign: 'center'}}>
                <Button colored ><a href="https://github.com/ramzihaddad12/Quanser-3DOF-Hover-Quadcopter-usingLQR" target="_blank">GitHub</a></Button>
                <Button colored ><a href="https://www.youtube.com/watch?v=5JWGHGbgSzg" target="_blank">Demo 1</a></Button>
                <Button colored ><a href="https://www.youtube.com/watch?v=gwqz1upNY5E" target="_blank">Demo 2</a></Button>
              </CardActions>
            </Card>
  
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{textAlign: 'center', color: '#fff', height: '176px', background: 'url(https://raw.githubusercontent.com/ramzihaddad12/Quanser-3DOF-Hover-Quadcopter-usingAdaptiveControllers/main/PHOTO2.jpg) center / cover'}} >Stabilizing Quadcopter using MRAC and STR</CardTitle>
              <CardText>
              Stabilizing and controlling a quadcopter via Adaptive controllers using MATLAB & Simulink.

              </CardText>
              <CardActions border style={{textAlign: 'center'}}>
                <Button colored ><a href="https://github.com/ramzihaddad12/Quanser-3DOF-Hover-Quadcopter-usingAdaptiveControllers" target="_blank">GitHub</a></Button>
              </CardActions>
            </Card>
          </div>
          )
        }
    
      }
    render(){
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>ML/AI</Tab>
                    <Tab>Java</Tab> 
                    <Tab>Web</Tab>
                    <Tab>Robotics</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>


        )
    }
}

export default Projects;