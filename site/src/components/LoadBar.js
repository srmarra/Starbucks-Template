import sy from "./LoadBar.module.css"
import React, { useState } from "react"


function LoadBar(props){
    const [BarWit,setBarWit] = useState(props.temp)

    let Style = {
        width: props.temp+'%'
    }

    

    return(
        <div style={Style}  className={sy.LoadBar}></div>
    )
}

export default LoadBar