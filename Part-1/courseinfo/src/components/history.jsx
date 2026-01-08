export const History = (props) => {
    if(props.allClicks.length === 0) {
        return (<div>No Clicks Yet</div>)   
        
    }  
    return(
        <div>
         button clicks {props.allClicks.join(' ')}
        </div>
    )
}
