import React,{useState} from 'react'
import {NavLink}  from 'react-router-dom'
import logo from './logo.png'
import './App.css';
import Hamburger from 'hamburger-react'

export default function Navbar(props) {
    const [isOpen, setOpen] = useState(false)



    return (
        <nav>
            <NavLink to="/Increment-Button"><img src={logo} alt="logo" className='logo' /></NavLink>
            <div className="hiddenToggle " style={{marginRight:"2rem"}}>
                <Hamburger toggled={isOpen} toggle={setOpen}  />

            </div>
                
             <ul className={!isOpen ? 'hidden' : null}>
               <NavLink to="/daily"  activeclassname='active'> <li>Daily</li></NavLink>
               <NavLink to="/archive"> <li>Archive</li></NavLink>
            </ul>
        </nav>
    )
}
