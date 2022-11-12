import React, { Component } from "react"
import memesData from "../memesData"

function Form(){
    function getData () {
        console.log(memesData.data.memes[Math.floor(Math.random() * 99)].url)
    }
    return (
        <div className = "form-container">
            <div className = "form">
                <input className = "first-input" placeholder = "Shut up"></input>
                <input className = "second-input" placeholder = "and take my money"></input>
                <button className = "submit" onClick = {getData}>Get a new image 🖼️</button>
            </div>
        </div>
    )
}


export default Form