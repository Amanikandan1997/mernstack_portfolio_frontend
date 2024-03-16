import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Main() {
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
    <Link to="/add" className="button">Add</Link>
    <Row lg={2} >
     
     
  {/* <ul className="filters__content"> <button className="filters__button filter-tab-active" data-target="#skills">
            Projects
          </button></ul> */}
        
          {project.map((profile)=>(
     
        <div className="projects__content grid " data-content id="projects" style={{ marginBottom: '20px',display:'flex',width:'300px' ,height:"290px"}}>
        
            <article className="projects__card" key={profile.id}>
              {/* Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) */}
              <img src={profile.image}  alt="" className="projects__img" />
              <div className="projects__modal">
                <div>
                  <span className="projects__subtitle">{profile.name}</span>
                  <h3 className="projects__title">{profile.name2}</h3>
                  <a href={profile.link} target="_blank" className="projects__button button button__small">
                    <i className="ri-link" />
                  </a>
                  <Button href={profile.link} target="_blank" className="projects__button button button__small "style={{gap:'3px'}}>
                    Update
                  </Button>
                  <Button href={profile.link} target="_blank" className="projects__button button button__small  " style={{gap:'3px'}}>
                    delete
                  </Button>
                </div>
              </div>
            </article>
            </div> ))}
</Row>
</>
  )
}

export default Main