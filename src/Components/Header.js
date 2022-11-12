import troll from '../images/troll.png'


export default function Header(){
    return (
        <header>
            <img src={troll} />
            <h1>Meme Generator</h1>
            <span className = "header-span">
                React Course - Project 3
            </span>
        </header>
    )
}