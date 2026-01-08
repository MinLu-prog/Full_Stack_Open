export const StatisticsLine = (props) =>{
    return(
        <div>
            <table>
            <tbody>
                <tr>
             <td>{props.text}</td>
                <td>{props.value}</td>
                </tr>
             
            </tbody>
            </table>
       
        </div>
    )
}