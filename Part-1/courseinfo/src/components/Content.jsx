import React from "react";
import { Part } from "./Part";
export const Content = (props) =>{
    return (
        <div>
            <Part Part={props.part1} Exercises={props.exercises1} />
            <Part Part={props.part2} Exercises={props.exercises2} />
            <Part Part={props.part3} Exercises={props.exercises3} />
        </div>
    )
}