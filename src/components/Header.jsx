import React from "react"
import '../styles.css'
import Trollface from '../images/troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <img 
                src={Trollface}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}