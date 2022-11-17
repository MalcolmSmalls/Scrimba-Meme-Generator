import React, { Component } from "react"
import { isCompositeComponent } from "react-dom/test-utils"


function Form(){

    const [ picture, setPicture ] = React.useState("")

    const [ allMemes, setAllMemes ] = React.useState()

    const [ meme, setMeme ] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            isSet: false
        }
    
    )


    // function getData () {
    //     const pickedPic = allMemesImages.data.memes[Math.floor(Math.random() * 99)].url
    //     setPicture(pickedPic)
    //     console.log(picture)
    //     console.log(meme)
    //     setMeme(prevMeme => {
    //         return (
    //             {...prevMeme, randomImage: pickedPic}
    //         )
    //     })
    // }

    function handleChange(event){

        const { name, value } = event.target
        setMeme(prevMeme => {
            return (
                {...prevMeme, 
                [name]: value,
                }
            )
        })

    }

    function handleSubmit(event){
        event.preventDefault()
        const pickedPic = allMemes[Math.floor(Math.random() * 99)].url
        setMeme(prevMeme => {
            return (
                {...prevMeme,
                randomImage: pickedPic,
                isSet: !prevMeme.isSet}
            )
        })
    }

    React.useEffect( () => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])
    

    // const styles = {
    //     display: meme.isSet === false ? 'none' : 'block',   
    // }

    return (
        <div className = "main-container">
            
                <form onSubmit = {handleSubmit}>
                    <div className = "form">
                        <input 
                            type="text"
                            className = "first-input"
                            name="topText" 
                            placeholder = "Shut up"
                            onChange = {handleChange}
                            value={meme.textTop}
                        />
                        <input 
                            type="text"
                            name="bottomText"
                            className = "second-input" 
                            placeholder = "and take my money"
                            onChange = {handleChange}
                            value={meme.bottomText}
                        />
                    </div>
                    <div className="btn-container">
                        <button className = "submit">Get a new image 🖼️</button>
                    </div>
                </form>
            <div className = "img-container">
                {/* <button className = "submit" onClick = {getData}>Get a new image 🖼️</button> */}
                {/* <img className = "meme-pic" src={meme.randomImage}/> */}
                <div className="meme">
                <img className = "meme-pic" src={meme.randomImage}/>
                {/* <img src={meme.randomImage} className="meme--image" /> */}
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            </div>


        </div>
    )
}


export default Form