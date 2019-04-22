import React from 'react'


function Header() {
    return (
        <header>
            <h1 id="branding"><a href="#"><span class="highlight">jmdmacapagal</span> | Online Portfolio</a></h1>
            <nav>
                <ul>
                    <li><a href="#" class="current">Home</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header