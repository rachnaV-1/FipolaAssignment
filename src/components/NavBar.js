import React, {useState, useEffect} from 'react';
import './NavBar.css'

export default function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);
        return () => {
            window.addEventListener('resize', changeWidth);
        }
    }, [])
    return(
        <nav>
            {(toggleMenu || screenWidth > 250) && (
                <ul className='list'>
                <li className='items'>About us</li>
                <li className='items'>Blog</li>
                <li className='items'>Certificates</li>
                <li className='items'>Find out store</li>
                <li className='items'>On wheels</li>
                </ul>
            )}
            
            <button onClick= {toggleNav} className='btn'>BTN</button>
        </nav>
    )
}