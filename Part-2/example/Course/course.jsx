'use strict';
import Header from "./Header/header";
import Content from "./Content/Content";
const Course = ({courses}) =>{

    return(
        <div>
          {
            courses.map(course =>
                <div>
                 <Header key ={course.id} courses = {course} />
                <Content key = {course.id} courses = {course}/>
                </div>
            )
          }
         
        </div>
    )
}
export default Course;