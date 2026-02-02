

const Content = ({courses}) =>{
   
    return(
        <div>
  
            <ul>
            {courses.parts.map((part) => 
                <li key = {part.id}>{part.name} {part.exercises} </li>
                        )}
            
            <li>
            Total of  {
                courses.parts.reduce((sum,part) => sum+part.exercises,0)
            } exercises
            </li>
            </ul>
           
        </div>
    )
} 
export default Content;
