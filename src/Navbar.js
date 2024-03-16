import React from 'react'

function Navbar() {
  return (
    <div>
    <ul className="profile__social">
    <a href="/profile" className="profile__social-link">
       
    <i class="ri-profile-fill"></i>
    </a>
    <a href="/skils" className="profile__social-link">
    <i class="ri-briefcase-fill"></i>
    </a>
    <a href="/project" className="profile__social-link">
    <i class="ri-layout-4-fill"></i>
    </a>
    <a href="/contact" className="profile__social-link">
    <i class="ri-contacts-book-2-fill"></i>
    </a>
    <a href="/course" className="profile__social-link">
    <i class="ri-hotel-fill"></i>
    </a>
    
    
  </ul>
  </div>
  )
}

export default Navbar