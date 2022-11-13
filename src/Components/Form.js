import React, { Component } from "react"
import { isCompositeComponent } from "react-dom/test-utils"
import memesData from "../memesData"

function Form(){

    const [ picture, setPicture ] = React.useState("")

    const [ allMemesImages, setAllMemesImages ] = React.useState(memesData)

    const [ meme, setMeme ] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    
    )


    function getData () {
        const pickedPic = allMemesImages.data.memes[Math.floor(Math.random() * 99)].url
        setPicture(pickedPic)
        setMeme(prevMeme => {
            return (
                {...prevMeme, randomImage: pickedPic}
            )
        })
    }
    return (
        <div className = "main-container">
            <div className = "form">
                <input className = "first-input" placeholder = "Shut up"></input>
                <input className = "second-input" placeholder = "and take my money"></input>
            </div>
            <div className = "img-container">
                <button className = "submit" onClick = {getData}>Get a new image 🖼️</button>
                <img className = "meme-pic" src={meme.randomImage}/>
            </div>

        </div>
    )
}


export default Form