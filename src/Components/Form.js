import React, { Component } from "react"
import memesData from "../memesData"

function Form(){

    const [ picture, setPicture ] = React.useState("")

    const [ allMemesImages, setAllMemesImages ] = React.useState(memesData)


    function getData () {
        const pickedPic = allMemesImages.data.memes[Math.floor(Math.random() * 99)].url
        setPicture(pickedPic)
        const meme = {
            topText: "",
            bottomText: "",
            randomImage: pickedPic
        }
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