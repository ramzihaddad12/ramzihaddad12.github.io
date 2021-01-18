import React, {Component} from 'react'

class Aboutme extends Component{
    render(){
        return(
            <div style = {{marginTop: '-25px',paddingTop: '-5px', height: '100%', background: 'url("https://wallpapercave.com/wp/wp7666360.jpg")  center / cover'}}>
                <div style ={{fontFamily: 'monospace'}}>
                    <h2 style = {{fontFamily: 'monospace', fontSize: '55px', paddingLeft: '1em'}}> About Me</h2>
                    
                    <p style = {{fontSize: '35px', paddingLeft: '5em', paddingBottom: '10%', paddingRight: '2em', lineHeight: '1'}}>
                        My name is Ramzi Haddad, and I’m a Lebanese-American developer. Contrary to many folks in the software industry, I do not have a computer science background. I majored in Mechanical Engineering and obtained a B.E with distinction from the American University of Beirut in 2020. I am a self taught programmer that is passionate about implementing A.I systems in the real world.
                    <br/><br/>
                    I also love football (real football not american football), chess, videogames, and Alfredo's pizza cafe.</p>
                </div>
            </div>
        )
    }
}

export default Aboutme;