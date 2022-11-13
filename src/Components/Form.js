import React, { Component } from "react"
import memesData from "../memesData"

function Form(){

    const [ picture, setPicture ] = React.useState("")


    function getData () {
        const pickedPic = memesData.data.memes[Math.floor(Math.random() * 99)].url
        setPicture(pickedPic)
    }
    return (
        <div className = "main-container">
            <div className = "form">
                <input className = "first-input" placeholder = "Shut up"></input>
                <input className = "second-input" placeholder = "and take my money"></input>
            </div>
            <div className = "img-container">
                <button className = "submit" onClick = {getData}>Get a new image 🖼️</button>
                <img className = "meme-pic" src={picture}/>
            </div>

        </div>
    )
}


export default Form