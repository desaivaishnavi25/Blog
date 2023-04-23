import React from 'react'
import './header.css'
export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm1">Share your</span>
            <span className="headerTitleLg">Experience</span>
            <span className="headerTitleSm2">Share your blissful moments with nature</span>
        </div>
        <img className="headerImg" src="https://images.unsplash.com/photo-1612351641432-20a0f196086c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
  )
}

