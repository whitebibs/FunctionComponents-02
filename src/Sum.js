import React from "react"

export function Sum (props){
    return(
        <h1>The sum is: {props.numbers.reduce((prevValue, currentValue)=> prevValue + currentValue, 0)} </h1>
    )
}