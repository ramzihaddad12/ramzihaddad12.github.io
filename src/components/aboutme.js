import React, {Component} from 'react'

class Aboutme extends Component{
    render(){
        return(
            <div style = {{marginTop: '-25px',paddingTop: '-5px', height: '100%', background: 'url("https://wallpapercave.com/wp/wp7666360.jpg")  center / cover'}}>
                <div style ={{fontFamily: 'monospace'}}>
                    <h2 style = {{fontFamily: 'monospace', fontSize: '55px', paddingLeft: '1em'}}> About Me</h2>
                    
                    <p style = {{fontSize: '35px', paddingLeft: '5em', paddingBottom: '10%', paddingRight: '2em', lineHeight: '1'}}>
                        {/* My name is Ramzi Haddad, and I’m a Lebanese-American developer. 
                        I am always expanding my horizons and enhancing my software skills to become a better developer.
                        I am passionate about building software applications for the real world from both a frontend and 
                        a backend perspective. */}
                        
                        I acknowledge that this is somewhat optimistic/unrealistic, but I try to view life as a non-zero-sum game, where everyone can “win”. 
                        <ul style = {{fontSize: '35px', paddingLeft: '5em', paddingBottom: '10%', paddingRight: '2em', lineHeight: '1'}}>
                            <li>Vim over Emacs</li>
                            <li>Tabs over spaces</li>
                            <li>Linux over everything else</li>
                        </ul>

                        The favorites: 
                        <ul style = {{fontSize: '35px', paddingLeft: '5em', paddingBottom: '10%', paddingRight: '2em', lineHeight: '1'}}>
                        <li>Favorite number: 1729, the smallest positive number that is the sum of 2 cubes in 2 different ways: (9, 10) and (1, 12). This number, referred to as a taxicab number, has a fascinating <a href = "https://mathworld.wolfram.com/Hardy-RamanujanNumber.html">story </a> 
                            involving the mathematical legend that is Ramanujan.</li>
                        <li>Favorite data structure: A Bloom filter. Although it’s not a deterministic structure, the <a href = "https://brilliant.org/wiki/bloom-filter/">theory</a> behind a Bloom filter seems pretty cool to me.</li>
                        </ul>
                        
                    <br/><br/>
                    I also love football (real football not american football), chess, videogames, and Alfredo's pizza cafe.</p>
                </div>
            </div>
        )
    }
}

export default Aboutme;