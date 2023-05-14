import React from 'react'

export default function Navbar() {
    return (
        <header id="header" class="navbar">
            <div class="logo">
                <h1 class="text-light title">
                    <a href="/home">
                        <span><img src="logo.png" class="img-flui" /></span>
                    </a>
                    &nbsp;Sentinels
                </h1>
            </div>
            <nav class="navbar">

                <ul>
                    <li><a class="active navbtn" href="/home">Home</a></li>
                    <li><a class="active navbtn " href="/about">Project</a></li>
                    <li><a class="active navbtn " href="/team">Team</a></li>
                </ul>
            </nav>
        </header>
    )
}
