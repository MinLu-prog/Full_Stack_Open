import { StatisticsLine } from "./StatLine"

export const Statistics = (props) => {
    if(props.good === 0 && props.neutral === 0 && props.bad === 0){
        console.log(props);
        return(
            <div>
                <h2>statistics</h2>
                <p>No feedback given</p>

            </div>
        )
    }
    return(
        <div>
         <StatisticsLine text="Good" value={props.good}/>
        <StatisticsLine text='Neutral' value={props.neutral}/>
        <StatisticsLine text="Bad" value={props.bad}/>
        
        <table>
            <tbody>
     <tr>
                <td>All {props.good + props.neutral + props.bad}</td>
            </tr>
            <tr>
                <td>Average {(props.good - props.bad)/(props.good + props.neutral + props.bad)}</td>
            </tr>
            <tr>
                <td>Positive {((props.good)/(props.good + props.neutral + props.bad))*100} %</td>
            </tr>
            </tbody>
       
        </table>

        </div>
    
    )
}