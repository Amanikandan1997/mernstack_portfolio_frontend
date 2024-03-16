import React, { useState } from 'react'
import axios from 'axios';


function Add() {

  const [image, setimage] = useState('');
  const [name ,setname] = useState([]);
  const [name2 ,setname2] = useState([]);
  const [link, setlink] = useState('');
  
  const data= {
    image:image,
    name:name,
    name2:name2,
    link:link} 
  console.log(data)
  const handleImageChange =(e)=>{
    let file = e.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setimage(reader.result);
    };
};
      const handleAddProject  = async (e)=> {
          e.preventDefault();
          
         await axios.post('http://localhost:5000/info/', data).then((response)=>{
          console.log (response)
         alert ("Successfully added")
          
         }).catch((err)=>{
             alert(err)
         })};
          
           
              
          
      
  return (
    <div>
    <h2>Display Images</h2>
    <input type="file"  onChange={handleImageChange} />
    <img src={image} value={image}  onChange={(e)=>setimage(e.target.value)} alt="" width="200px" height="100px" />
    <br />

    <label>PROJECT TITLE</label>
    <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
    <br />

    <label>SUB TITLE</label>
    <input type="text" value={name2} onChange={(e) => setname2(e.target.value)} />
    <br />

    <label>URL</label>
    <input type="text" value={link} onChange={(e) => setlink(e.target.value)} />
    <br />

    <button onClick={handleAddProject}>Add Project</button>
    <br />
</div>
  )
}

export default Add