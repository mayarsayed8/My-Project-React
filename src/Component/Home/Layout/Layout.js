import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardBody } from 'reactstrap';
import  './Layout.css'

const Example = (props) => {
  return (
    <CardDeck className ="card_container">
      <Card>
        <CardImg top width="100%" src="https://images.pexels.com/photos/1537008/pexels-photo-1537008.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">Java</CardTitle>
          <CardText>
          Java is top pick as one of the most popular programming languages, used for building server-side applications to video games and mobile apps. It's also the core foundation for developing Android apps, making it a favorite of many programmers.
      </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://images.pexels.com/photos/7374/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">Python</CardTitle>
          <CardText>
          Python is a one-stop shop. There's a Python framework for pretty much anything, from web apps to data analysis. In fact, WordStream is written in Python! You're the best bud. Python is often heralded as the easiest programming language to learn, with its simple and straightforward syntax.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top height="60%" width="100%" src="https://images.pexels.com/photos/1451447/pexels-photo-1451447.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">JavaScript</CardTitle>
          <CardText>JavaScript (which, confusingly, is not at all related to Java) is another favorite programming language because it's so ubiquitous on the web--it's basically everywhere. </CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Example;