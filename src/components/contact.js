import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import profilepic from './pp.jpg';


class Contact extends Component{
    render(){
        return(
            <div className = "contact-body">
                <Grid className = "contact-grid">
                    <Cell col = {6}> 
                        <h2>Ramzi Haddad</h2>
                        <img src = {profilepic} alt="avatar" style = {{height: '250px'}}/>
                        {/* <p style = {{width:'75%', margin:'auto', paddingTop: '1em'}}></p> */}
                    </Cell>
                
                    <Cell col = {6}>
                        <h2> Contact Me</h2>
                        <hr/>
                        <div className = "contact-list">
                            <List>
                            <ListItem>
                                <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className = "fa fa-phone-square" aria-hidden="true"/>
                                    +1 857 559 3920
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                            <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className = "fa fa-envelope" aria-hidden="true"/>
                                    ramzi.haddad12@gmail.com
                                </ListItemContent>
                            </ListItem>

                
                            </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;