import React, {Component} from 'react'
import hivematelogo from './hivemate_logo.jpeg';
import outside from './outside.jpg';
import inside from './inside.jpg';

class Hivemate extends Component{
    render(){
        return(

            <div style ={{fontFamily: 'monospace'}}>
            <img src={hivematelogo} style={{width: 200, height: 250, paddingLeft: '45em'}} />
            <p style = {{fontSize: '25px', paddingLeft: '5em', paddingBottom: '3%', paddingRight: '2em', lineHeight: '1'}}>In 2019, My friends (Yves Daoud, Dimitri Saad, Karim Samaha) and I founded a startup called HiveMate. The project started off being our Final Year Project (FYP) during our last year of undergrad at the American University of Beirut (AUB). We entered the <a href = "https://www.aub.edu.lb/msfea/news/Pages/fyp-accelerator-2020.aspx">AUB Accelerator Program</a> and obtained 1st place securing a $20,000 investment for our startup. Find out more <a href = "https://www.aub.edu.lb/fafs/news/Pages/2020_MSFEAstudent.aspx">here</a>.
            </p>
            <img
                    src={outside}
                    alt="avatar"
                    style={{width: 250, height: 200, paddingLeft: '35em'}}
                     />
            <img
                    src={inside}
                    alt="avatar"
                    style={{height: '200px'}}
                     />
            <p style = {{fontSize: '25px', paddingLeft: '5em', paddingTop: '3%', paddingRight: '2em', lineHeight: '1'}}>HiveMate uses artificial intelligence to assist beekeepers in remotely monitoring their beehives, helping them prevent swarming prior to 3 weeks, as well as detecting live occurrences of swarming, Colony Collapse Disorder, and absconding, all of which lead to the same losses in bees and honey.
 To learn more about HiveMate, please follow the page on Instagram <a href = "https://www.instagram.com/the_hivemate/"><i>@the_hivemate</i></a> </p>

            </div>
        )
    }
}

export default Hivemate;