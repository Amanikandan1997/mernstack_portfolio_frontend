import React from 'react'
import html from "./assests/html.png"
import css from "./assests/css.png"
import github from "./assests/git.png"
import js from"./assests/js.png"
import bootstrap from "./assests/boot.png"
import react from './assests/react1.png'
import ps from './assests/ps.png'
import ai from './assests/ai.png'
import ae from './assests/ae.png'
import vn from './assests/vn.png'
import figma from './assests/figma.png'
import flimora from './assests/flimora.png'

function Skills() {
  return (
    <>
     <main className="main">
      <section className="filters container">
        {/*=============== FILTERS TABS ===============*/}
        <ul className="filters__content">
          <button className="filters__button filter-tab-active" data-target="#skills">
            Skills
          </button>
          
        </ul>
        <div className="filters__sections">
          
         
          {/*=============== SKILLS ===============*/}
          <div className="skills__content grid filters__active" data-content id="skills">
            <div className="skills__area">
              <h3 className="skills__title">Frontend Developer</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                  <img src={html} width="40" height="30"/>
                    <div>
                      <h3 className="skills__name">HTML</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>
                  <div className="skills__data">
                  <img src={css} width="40" height="30"/>
                    <div>
                      <h3 className="skills__name">CSS</h3>
                      <span className="skills__level">Advanced</span>
                    </div>
                  </div>
                  <div className="skills__data">
                  <img src={js} width="40" height="30"/>
                    <div>
                      <h3 className="skills__name">JavaScript</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                  <img src={react} width="40" height="30"/>
                    <div>
                      <h3 className="skills__name">React</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                  <div className="skills__data">
                  <img src={bootstrap} width="40" height="30"/>
                    <div>
                      <h3 className="skills__name">Bootstrap</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                  <div className="skills__data">
                  <img src={github} width="40" height="30"/>
                    <div>
                      <h3 className="skills__name">Git/Github</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills__area">
              <h3 className="skills__title">Design Source</h3>
              <div className="skills__box">
                <div className="skills__group">
                  <div className="skills__data">
                  <img src={ps} width="40" height="5"/>
                    <div>
                      <h3 className="skills__name">Photoshop</h3>
                      <span className="skills__level">Basic</span>
                    </div>
                  </div>
                  <div className="skills__data">
                  <img src={ai} width="40" />
                    <div>
                      <h3 className="skills__name">illustartor</h3>
                      <span className="skills__level">Basic</span>
                    </div>
                  </div>
                  <div className="skills__data">
                  <img src={ae} width="40" />
                    <div>
                      <h3 className="skills__name">AfterEffect</h3>
                      <span className="skills__level">Basic</span>
                    </div>
                  </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data">
                  <img src={flimora} width="40" height="1"/>
                    <div>
                      <h3 className="skills__name">Flimora</h3>
                      <span className="skills__level">Basic</span>
                    </div>
                  </div>
                  <div className="skills__data">
                  <img src={vn} width="40" height="30"/>
                    <div>
                      <h3 className="skills__name">VN editor</h3>
                      <span className="skills__level">Intermediate</span>
                    </div>
                  </div>
                  <div className="skills__group">
                    <div className="skills__data">
                    <img src={figma} width="40" height="30"/>
                      <div>
                        <h3 className="skills__name">Figma</h3>
                        <span className="skills__level">Basic</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></section>
       </main>
    </>
  )
}

export default Skills