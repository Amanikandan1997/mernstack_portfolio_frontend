
// import KBM from "./assests/kbm.png"
// import Kite from "./assests/kite j.png"
// import EC2 from "./assests/project1.jpg"
// import Port from "./assests/project4.jfif"
// import Trans from "./assests/trans.png"
// import StageDesign from "./assests/stage copy.jpg"
// import CapeComorinAward from "./assests/project3.jpg"
// import KK from "./assests/kk.jpeg"
// import honey from "./assests/mtm honey 1.jpg"
// import honey2 from "./assests/mtm honey 2.jpg"
// import kit from "./assests/kit.jpg"
// import chips from "./assests/work4.jpg"
// import aasai from "./assests/aasai candy.jpg"
// import lanyard from "./assests/work13 (2).jpg"
// import idtag from "./assests/work13 (1).jpg"
// import idcard from "./assests/id.jpg"
// import surabhi from "./assests/surabhi.png"
// import ecomm from "./assests/ecommerce.png"
// import ec22 from "./assests/project2.jpg"
// import dsr from "./assests/dsr.png"
// import ludo from "./assests/ludo 1st design.jpg"
// import kite2 from "./assests/kite j.png"
// import kiteflyer from "./assests/KITE BROUCHER.jpg"
// import kiteflyer2 from "./assests/kite python.jpg"
// import vjlogo from "./assests/vj.jpeg"
// import mklogo from "./assests/mk logo replace.jpg"
// import sb1 from "./assests/sb1.jpg"
// import sb2 from "./assests/sb2.jpg"
// import job from "./assests/jobdas.png"
// import sachin1 from "./assests/sachin.jpg"
// import sachin2 from "./assests/sachin 2.jpg"
// import book1 from "./assests/b1.jpg"
// import book2 from "./assests/b2.jpg"
// import QR from "./assests/QR.png"
// import Currency from "./assests/Currency.png"
// import manimart from "./assests/manimart.png"
// import weather from "./assests/weather.png"
// import porkalam from "./assests/por.jpeg"
// import porkalam1 from "./assests/por1.jpeg"
// import jewell from './assests/jewell.png'
// import Navbar from './Navbar'

// import  Calendar  from './assests/calendar.jpeg'
import React, { useEffect, useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap';

import axios from 'axios'
import { Link } from 'react-router-dom';
import { Flex } from "antd"

function Project() {
  const [project,setproject]=useState([]);
  console.log('project:' ,project);
  const getApidata = async () =>{
    await axios
    .get("http://localhost:5000/info/")
    .then(response=>{
      console.log(response.data)
       setproject(response.data)
    })
    .catch((error)=>{console.log('Error:', error)})
  
  }
  useEffect(()=>{getApidata()},[])
  return (
    
    <>
 <ul className="filters__content"> <button className="filters__button filter-tab-active" data-target="#skills">
            Projects
           
          </button></ul>
         
      
          
         <Row lg={4} xs={1} sm={1} className='my-3 ' style={{ padding: '20px', margin: '10px' }} > 
               
                
         
          {project.map((profile)=>(
 
        <div className="projects__content grid  " data-content id="projects" style={{ padding: '20px', textAlign: 'center', justifyContent:"center", alignItems:"center", display:"flex" }}>
          
            <article className="projects__card" key={profile.id}>
              {/* Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) */}
              <img src={profile.image} alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">{profile.name}</span>
                  <h3 className="projects__title">{profile.name2}</h3>
                  <a href={profile.link} target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                </div>
              </div>
            </article>
         
      
          </div>))}
              
     </Row>
    
    </>
  )
}

export default Project
