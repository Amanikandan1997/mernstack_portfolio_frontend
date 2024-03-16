import React from 'react'
import "./profile.css"
import DP from "./assests/perfil.png"
import Project from './Project'
import Skills from "./Skills"
import manicv from "./assests/assets/pdf/mani cv.pdf"
import DarkModeToggleBtn from './DarkModeToggleBtn'
import ScrollToTop from "react-scroll-to-top";
import Course from "./Course"
import { Link } from "@react-email/link";
import Chat from './Chat'


function Profile() {
 

  return (
  
    <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/*=============== FAVICON ===============*/}
    <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon" />
    {/*=============== REMIX ICONS ===============*/}
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
    {/*=============== CSS ===============*/}
    <link rel="stylesheet" href="assets/css/styles.css" />
    <title>MK - Mini React Portfolio </title>
    {/*=============== HEADER ===============*/}
    <header className="profile container">
      <div className="profile__container grid">
        <div className="profile__data">
          <div className="profile__border">
            <div className="profile__perfil">
              {/* Insert your image, according to the example size of the portfolio */}
              <img src={DP} alt="" />
            </div><br/>
    <DarkModeToggleBtn/>
          </div><br/><br/>
          <h2 className="profile__name" style={{fontWeight:"bold"}}>Manikandan A</h2>
          <h3 className="profile_profession"style={{fontFamily:"sans-serif",fontWeight:"bolder" ,fontSize:"20px", color:"orangered"}}>Software Developer & Graphic Designer</h3>
          <ul className="profile__social">
            <a href="https://instagram.com/manikandan_uki?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"  className="profile__social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"/><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"/><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5"/><stop offset=".1" stop-color="#FD5"/><stop offset=".5" stop-color="#FF543E"/><stop offset="1" stop-color="#C837AB"/></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771C8"/><stop offset=".128" stop-color="#3771C8"/><stop offset="1" stop-color="#60F" stop-opacity="0"/></radialGradient></defs></g></svg>
            </a>
            <a href="https://www.linkedin.com/in/manikandan-arunachalam-2b0803262/" className="profile__social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#0A66C2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"/></g></svg>
            </a>
            <a href="https://github.com/Amanikandan1997" className="profile__social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="0.99em" height="1em" viewBox="0 0 256 259.3"><path fill="#9EDCF2" d="M200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1m0 0"/><defs><path id="logosGithubOctocat0" d="M98.1 244.8c1.6 7.5 5.5 11.9 9.4 14.5h41.1c5-3.4 10.1-9.8 10.1-21.8v-31s.6-7.7 7.7-10.2c0 0 4.1-2.9-.3-4.5c0 0-19.5-1.6-19.5 14.4v23.6s.8 8.7-3.8 12.3v-29.2s.3-9.3 5.1-12.8c0 0 3.2-5.7-3.8-4.2c0 0-13.4 1.9-14 17.6l-.3 30h-3.2l-.3-30c-.6-15.6-14-17.6-14-17.6c-7-1.6-3.8 4.2-3.8 4.2c4.8 3.5 5.1 12.8 5.1 12.8v29.5c-4.6-3.3-3.8-12.6-3.8-12.6v-23.6c0-16-19.5-14.4-19.5-14.4c-4.5 1.6-.3 4.5-.3 4.5c7 2.6 7.7 10.2 7.7 10.2v21.7z"/></defs><clipPath id="logosGithubOctocat1"><use href="#logosGithubOctocat0"/></clipPath><path fill="#7DBCE7" d="M200.9 199.8c0 13.9-32.2 25.1-71.9 25.1s-71.9-11.3-71.9-25.1c0-13.9 32.2-25.1 71.9-25.1s71.9 11.2 71.9 25.1m0 0" clip-path="url(#logosGithubOctocat1)"/><path fill="#9EDCF2" d="m46.9 125.9l-2.1 7.2s-.5 2.6 1.9 3.1c2.6-.1 2.4-2.5 2.2-3.2zm0 0"/><path fill="#010101" d="m255.8 95.6l.2-.9c-21.1-4.2-42.7-4.3-55.8-3.7c2.1-7.7 2.8-16.7 2.8-26.6c0-14.3-5.4-25.7-14-34.3c1.5-4.9 3.5-15.8-2-29.7c0 0-9.8-3.1-32.1 11.8c-8.7-2.2-18-3.3-27.3-3.3c-10.2 0-20.5 1.3-30.2 3.9C74.4-2.9 64.3.3 64.3.3c-6.6 16.5-2.5 28.8-1.3 31.8c-7.8 8.4-12.5 19.1-12.5 32.2c0 9.9 1.1 18.8 3.9 26.5c-13.2-.5-34-.3-54.4 3.8l.2.9c20.4-4.1 41.4-4.2 54.5-3.7c.6 1.6 1.3 3.2 2 4.7c-13 .4-35.1 2.1-56.3 8.1l.3.9c21.4-6 43.7-7.6 56.6-8c7.8 14.4 23 23.8 50.2 26.7c-3.9 2.6-7.8 7-9.4 14.5c-5.3 2.5-21.9 8.7-31.9-8.5c0 0-5.6-10.2-16.3-11c0 0-10.4-.2-.7 6.5c0 0 6.9 3.3 11.7 15.6c0 0 6.3 21 36.4 14.2V177s-.6 7.7-7.7 10.2c0 0-4.2 2.9.3 4.5c0 0 19.5 1.6 19.5-14.4v-23.6s-.8-9.4 3.8-12.6v38.8s-.3 9.3-5.1 12.8c0 0-3.2 5.7 3.8 4.2c0 0 13.4-1.9 14-17.6l.3-39.3h3.2l.3 39.3c.6 15.6 14 17.6 14 17.6c7 1.6 3.8-4.2 3.8-4.2c-4.8-3.5-5.1-12.8-5.1-12.8v-38.5c4.6 3.6 3.8 12.3 3.8 12.3v23.6c0 16 19.5 14.4 19.5 14.4c4.5-1.6.3-4.5.3-4.5c-7-2.6-7.7-10.2-7.7-10.2v-31c0-12.1-5.1-18.5-10.1-21.8c29-2.9 42.9-12.2 49.3-26.8c12.7.3 35.6 1.9 57.4 8.1l.3-.9c-21.7-6.1-44.4-7.7-57.3-8.1c.6-1.5 1.1-3 1.6-4.6c13.4-.5 35.1-.5 56.3 3.7m0 0"/><path fill="#F5CCB3" d="M174.6 63.7c6.2 5.7 9.9 12.5 9.9 19.8c0 34.4-25.6 35.3-57.2 35.3S70.1 114 70.1 83.5c0-7.3 3.6-14.1 9.8-19.7c10.3-9.4 27.7-4.4 47.4-4.4s37-5.1 47.3 4.3m0 0"/><path fill="#FFF" d="M108.3 85.3c0 9.5-5.3 17.1-11.9 17.1c-6.6 0-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1c6.6-.1 11.9 7.6 11.9 17.1m0 0"/><path fill="#AF5C51" d="M104.5 85.5c0 6.3-3.6 11.4-7.9 11.4c-4.4 0-7.9-5.1-7.9-11.4c0-6.3 3.6-11.4 7.9-11.4c4.3 0 7.9 5.1 7.9 11.4m0 0"/><path fill="#FFF" d="M172.2 85.3c0 9.5-5.3 17.1-11.9 17.1c-6.6 0-11.9-7.7-11.9-17.1c0-9.5 5.3-17.1 11.9-17.1c6.5-.1 11.9 7.6 11.9 17.1m0 0"/><path fill="#AF5C51" d="M168.3 85.5c0 6.3-3.6 11.4-7.9 11.4c-4.4 0-7.9-5.1-7.9-11.4c0-6.3 3.6-11.4 7.9-11.4c4.4 0 7.9 5.1 7.9 11.4m-37.8 15c0 1.6-1.3 3-3 3c-1.6 0-3-1.3-3-3s1.3-3 3-3c1.6 0 3 1.3 3 3m-9.9 7.5c-.2-.5.1-1 .6-1.2c.5-.2 1 .1 1.2.6c.8 2.2 2.8 3.6 5.1 3.6s4.3-1.5 5.1-3.6c.2-.5.7-.8 1.2-.6c.5.2.8.7.6 1.2c-1 2.9-3.8 4.9-6.9 4.9c-3.1 0-5.9-2-6.9-4.9m0 0"/><path fill="#C4E5D9" d="M54.5 121.6c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4m5.8 3.2c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4m3.5 4.2c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4m3.2 4.8c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4m3.5 4.4c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4m4.8 3.9c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2-.1 2.1.6 2.1 1.4m6.7 2.5c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4m6.7 0c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.2 0 2.1.6 2.1 1.4m6.8-1.1c0 .8-.9 1.4-2.1 1.4c-1.1 0-2.1-.6-2.1-1.4c0-.8.9-1.4 2.1-1.4c1.1 0 2.1.6 2.1 1.4m0 0"/></svg>
            </a>
            <a href="https://www.behance.net/manikandanuki" className="profile__social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><defs><linearGradient id="deviconBehance0" x1="64" x2="64" y1="2.16" y2="125.84" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#005cff"/><stop offset="1" stop-color="#0047ad"/></linearGradient></defs><rect width="123.68" height="123.67" x="2.16" y="2.16" fill="url(#deviconBehance0)" rx="14.59" ry="14.59"/><path fill="#fff" d="M52.63 60.28s10.5-.78 10.5-13.09s-8.59-18.32-19.47-18.32H7.86v68.8h35.8s21.85.69 21.85-20.31c0 0 .96-17.08-12.88-17.08m-29-19.18h20s4.87 0 4.87 7.16s-2.86 8.2-6.11 8.2H23.64zm19.1 44.34H23.64V67.06h20s7.25-.1 7.25 9.45c.02 7.95-5.28 8.85-8.15 8.93zm51.93-39.06c-26.46 0-26.43 26.43-26.43 26.43s-1.82 26.3 26.43 26.3c0 0 23.54 1.34 23.54-18.29h-12.1s.4 7.4-11 7.4c0 0-12.11.81-12.11-12h35.65s3.87-29.84-23.98-29.84m10.76 20.68h-22.6s1.48-10.6 12.11-10.6s10.49 10.6 10.49 10.6M79.86 32.93h28.38v8.47H79.86z"/></svg>
            </a>
            <a href="https://www.naukri.com/mnjuser/homepage" className="profile__social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#2F88FF" stroke="#000" d="M12 33H4V7H44V33H36H12Z"/><path stroke="#fff" stroke-linecap="round" d="M16 22V26"/><path stroke="#000" stroke-linecap="round" d="M24 33V39"/><path stroke="#fff" stroke-linecap="round" d="M24 18V26"/><path stroke="#fff" stroke-linecap="round" d="M32 14V26"/><path stroke="#000" stroke-linecap="round" d="M12 41H36"/></g></svg>
            </a>
       <a href="https://www.youtube.com/channel/UCnTca3JDVBv0x4ebm4-ehjg" className="profile__social-link">
       <svg xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180"><path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/><path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg>
            </a>
          </ul>
        </div>
        <div className="profile__info grid">
          <div className="profile__info-group">
            <h3 className="profile__info-number"style={{fontWeight:"bold"}}>1+</h3>
            <p className="profile__info-description"  style={{fontWeight:"bold"}}>
              Year of <br /> work
            </p>
          </div>
          <div className="profile__info-group">
            <h3 className="profile__info-number"  style={{fontWeight:"bold"}}>30 +</h3>
            <p className="profile__info-description"  style={{fontWeight:"bold"}}>
              Completed <br /> projects
            </p>
          </div>
          <div className="profile__info-group">
            <h3 className="profile__info-number">17 +</h3>
            <p className="profile__info-description" style={{fontWeight:"bold"}}  > satisfied <br/> Customers</p>
          </div>
        </div>
        <div className="profile__buttons">
          {/* Insert your CV */}
          <a download href={manicv} className="button"  style={{textDecoration: 'none'}}>
            Resume  {/*<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"><animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"/></path><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.3s" values="30;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M12 8v7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"/></path></g></svg>*/}</a> 
          <a  className="button" href="mailto:manikandanarunachalam913@gmail.com"   style={{textDecoration: 'none'}}>
          contact<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60"/><path fill="#4285F4" d="M41.636 203.039h31.818v-77.273L28 91.676v97.727c0 7.545 6.114 13.636 13.636 13.636"/><path fill="#34A853" d="M182.545 203.039h31.819c7.545 0 13.636-6.114 13.636-13.636V91.675l-45.455 34.091"/><path fill="#FBBC04" d="M182.545 66.675v59.091L228 91.676V73.492c0-16.863-19.25-26.477-32.727-16.363"/><path fill="#EA4335" d="M73.455 125.766v-59.09L128 107.583l54.545-40.909v59.091L128 166.675"/><path fill="#C5221F" d="M28 73.493v18.182l45.454 34.091v-59.09L60.727 57.13C47.227 47.016 28 56.63 28 73.493"/></g></svg>
         
          </a>
          <div className="profile__buttons-small">
           
            <a href="https://instagram.com/manikandan_uki?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"  style={{textDecoration: 'none', width:"auto", height:"45px"}} target="_blank" className="button button__small button__gray">
              <i className="ri-instagram-fill" />
            </a>
            {/* Insert your brand name or profile */}
            {/* <a href="" target="_blank" class="button button__small button__gray"  style={{textDecoration: 'none'}}>
                        <i class="ri-messenger-line"></i>
                 </a> */}
                  
          </div>
        </div>
      </div>
    </header>
    <ScrollToTop   smooth top={1000} />
    {/*=============== MAIN ===============*/}
   <Chat/>
   <Skills/>
   <Course/>
    <Project/> 
        {/*=============== FILTERS TABS ===============*/}
    
   
       
       
   
    {/* <br><br> */}
    {/* <hr> */}
    {/*=============== FOOTER ===============*/}
    <footer className="footer container">
      <span className="footer__copy">
        © <a href="https://github.com/Amanikandan1997"  style={{textDecoration: 'none',fontWeight:"bold"}}>Manikandan Arunachalam @ 2022 - {new Date().getFullYear()} </a> <br /> All rigths reserved.
      </span>
    </footer>
    <ScrollToTop   smooth top={1000} />
    {/*=============== SCROLLREVEAL ===============*/}
  
    {/*=============== MAIN JS ===============*/}
 </div>
 
  )
}

export default Profile
