import React, { Component } from 'react'
import Course from './Course'


 class Courses extends Component {
     state={
        courses:[
          {id:1,name:'Mayar',email:'mayarabdelrazik968@gmail.com' ,phone:'01116083189'},
          {id:2,name:'Sayed',email:'sayed@gmail.com' ,phone:'111-111-222'},
          {id:3,name:'Abdelrazik',email:'abdelrazik@gmail.com' ,phone:'66-666-999'}
      ]
     };
     deleteCourse = id => {
         const{courses}=this.state;
         const newCourses = courses.filter(course=>
            course.id!==id);
            this.setState({
                courses:newCourses
            });
     }
    render() {
      const {courses}=this.state;
        return (
            <React.Fragment>
                {courses.map(course=>(
                    <Course
                    key={course.id}
                    course={course} 
                    deleteClickHandler={this.deleteCourse.bind(this,
                        course.id)}
                  
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default Courses;
