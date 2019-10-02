import React, { Component } from 'react'
import  './Course.css'
import { Jumbotron, Container } from 'reactstrap';


 class Course extends Component {
     state={
         showCourseInfo:true
     };
     onDeleteClick=()=>{
     this.props.deleteClickHandler();
     }

    render() {
        const {name,email,phone}=this.props.course;
        const {showCourseInfo}=this.state;
        return (
            <div className="Container_course">
                <div>   
                     <h2 className="mr-5">
                         <span>Course</span> 
                         instructor
                         </h2> 
                      </div>
            <div className="card card-body mb-3 sm">
            
              <h4>{name}
              <i  onClick={()=>
              this.setState({showCourseInfo:
             !this.state.showCourseInfo })}
            class="fa fa-sort-down" aria-hidden="true" style={{cursor:'pointer'}}>
            </i>
            <li className=" fa fa-times"
            style={{cursor:'pointer', float:'right',color:'red'}}
            onClick={this.onDeleteClick}
            >
            </li>
              </h4>{ showCourseInfo?(<ul className="list-group">
                  <li className="list-group-item">
                      Email:{email}
                      </li>
                  <li className="list-group-item">phone:{phone}</li>
              </ul> ):null}
            
            </div>
            <div>
          <Jumbotron  JavaScript  className="jumb">
          <Container JavaScript>
          <h1 className="display-3"></h1>
          <p className="lead"><span style={{fontWeight:'bold'}}>JavaScript,</span>
          <h3 style={{fontSize:'20px'}}> often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification.</h3>
          </p>
          </Container>
          </Jumbotron>
      </div>
            </div>
        )
    }
}

export default Course;
