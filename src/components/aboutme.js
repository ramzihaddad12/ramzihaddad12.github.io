import React, {Component} from 'react'

class Aboutme extends Component{
    render(){
        return(
            <div style = {{marginTop: '-25px',paddingTop: '-5px', height: '100%', background: 'url("https://wallpapercave.com/wp/wp7666360.jpg")  center / cover'}}>
                <div style ={{fontFamily: 'monospace'}}>
                    <h2 style = {{fontFamily: 'monospace', fontSize: '55px', paddingLeft: '1em'}}> About Me</h2>
                    
                    <p style = {{fontSize: '35px', paddingLeft: '5em', paddingBottom: '10%', paddingRight: '2em', lineHeight: '1'}}>   
                    I acknowledge that this is somewhat optimistic/unrealistic, but I try to view life as a non-zero-sum game, 
                    where everyone can “win”. To me, humility is an essential component to “winning”, and therefore, I always attempt
                    to be, as Dijkstra puts it, a <a href = "https://www.cs.utexas.edu/users/EWD/transcriptions/EWD03xx/EWD340.html" >“Very Humble Programmer”</a>.
                    <br/>
                    Here’s where I stand on some of the age-old arguments amongst programmers:
                    <ul style = {{fontSize: '35px', paddingLeft: '5em', paddingBottom: '10%', paddingRight: '2em', lineHeight: '1'}}>
                        <li>Vim over Emacs</li>
                        <li>Tabs over spaces</li>
                        <li>Linux over everything else</li>
                    </ul>
                    <br/>
                    The favorites: 
                    <ul style = {{fontSize: '35px', paddingLeft: '5em', paddingBottom: '10%', paddingRight: '2em', lineHeight: '1'}}>
                    <li>Favorite number: 1729, the smallest positive number that is the sum of 2 cubes in 2 different ways: (9, 10) and (1, 12). This number, referred to as a taxicab number, has a fascinating <a href = "https://mathworld.wolfram.com/Hardy-RamanujanNumber.html">story</a> 
                         involving the mathematics legend that is Ramanujan.</li>
                    <br/>
                    <li>Favorite data structure: A Bloom filter. Although it’s not a deterministic structure, the <a href = "https://brilliant.org/wiki/bloom-filter/">theory</a> behind a Bloom filter seems pretty cool to me.</li>
                    <br/>
                    <li>Favorite random story: A very interesting <a href = "http://calteches.library.caltech.edu/4106/1/Samos.pdf">method</a> of how ancient Greeks managed to dig a tunnel through a mountain using right triangles in the 6th century B.C.</li>
                    <br/>
                    <li>Favorite song: I don’t really have a favorite song, but <a href = "https://open.spotify.com/playlist/1omuUOn3egTYwxb6QQv2pK?si=d48050e8bf21480b">here’s</a> a playlist I listen to often, especially useful for, what Cal Newport describes as, “deep work”.</li>
                    <br/>
                    <li></li>
                    </ul>
                        
                    <br/>
                    In my free time, I enjoy devoting time to football (real football not american football), chess, reading about history, and Alfredo's pizza cafe.</p>
                </div>
            </div>
        )
    }
}

export default Aboutme;