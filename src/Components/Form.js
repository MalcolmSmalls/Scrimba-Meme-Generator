import React, { Component } from "react"

function Form(){
    return (
        <div className = "form-container">
            <form>
                <input className = "first-input" placeholder = "Shut up"></input>
                <input className = "second-input" placeholder = "and take my money"></input>
                <button className = "submit">Get a new image 🖼️</button>
            </form>
        </div>
    )
}


export default Form