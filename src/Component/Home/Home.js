import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import Layout from './Layout/Layout';



 class Home extends Component {
    render() {
        return (
            <div style={{alignitems:'center' }} className="Home_contanier">
             <Carousel/>
             <br>
             </br>
             <br></br>
             <h1 style={{fontWeight:'bold',fontSize:'30px',alignItems:'centre',padding:'30px'}}>Here are the 10 most popular programming languages:</h1>
             <p style={{fontWeight:'bold',fontSize:'15px'}}>
             Programmers are in high demand these days--their fluency in coding language is invaluable. Knowing various programming languages is a no-brainer for engineers, but a basic understanding of the languages can benefit anyone, even if you're not looking to become a master coder. Grasping some general understanding of coding can help you make the right hires for your business needs, communicate better with the engineers on your team, and prevent any awkward misunderstandings (Ruby isn't a gem, and Java isn't an excellent cup of coffee). Plus, with the high salaries earned for coding, you might want to consider it for a future career move! So what do you need to know?
             </p>
             <br></br>
          <Layout/>
            </div>
        )
    }
}
export default Home
