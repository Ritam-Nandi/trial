import React from 'react'
import "./intro.scss"
import { init } from 'ityped'
import { useEffect,useRef } from 'react'

export default function Intro() {
    const textRef = useRef ();
    useEffect(() => {
        init(textRef.current, { showCursor: false, backSpeed:  20, backDelay:  1000, strings: ['Weekdays - TSE at Akamai ', 'Weekends - Ameture Developer' ] })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="images/myself.png" alt="myself"/>
                </div>

            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello Stranger !!! </h2>
                    <h1>This is Ritam</h1>
                    <h3>
                         <span ref={textRef}></span>
                    </h3>

                </div>
                <a href="#portfolio">
                    <img src="images/finger.png" alt="arrow"/>
                </a>
            </div>
        </div>
    )
}
