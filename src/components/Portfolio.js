import React from 'react'
import engagement from '../img/engagementSite.PNG'
import janken from '../img/janken.PNG'
import tempConverter from '../img/tempConverter.PNG'
import todo from '../img/todo.PNG'


function Portfolio() {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div class="container">
                <div class="project">
                    <a href="#"><img src={engagement} alt="engagement website" /></a>
                    <h3>Engagement Website</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, consectetur.</p>
                </div>
                
                <div class="project">
                    <a href="#"><img src={janken} alt="" /></a>
                    <h3>Janken Game</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, consectetur.</p>
                </div>

                <div class="project">
                    <a href="#"><img src={tempConverter} alt="" /></a>
                    <h3>Temperature Converter</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, consectetur.</p>
                </div>

                <div class="project">
                    <a href="#"><img src={todo} alt="" /></a>
                    <h3>Todo App</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, consectetur.</p>
                </div>
            </div>
        </section>
    )
}

export default Portfolio