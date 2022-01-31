import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faApple, faGooglePlay, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";
import Cart from './Cart'
import NavBar from './NavBar';

function Header() {
    return (
        <>
            <div className='container-top'>
                <ul>
                    <li>
                        <span>Download app</span>
                        <div>
                            <a href='https://www.apple.com/in/app-store/'>
                            <FontAwesomeIcon icon={faApple} />
                            </a>
                        </div>
                        <div>
                            <a href="https://play.google.com/">
                            <FontAwesomeIcon icon={faGooglePlay} />
                            </a>
                        </div>
                    </li>
                    <li>
                        <span className='contact'>
                        <img className='mobile' src='https://img.freepik.com/free-icon/auricular-phone_318-1028.jpg?size=338&ext=jpg&ga=GA1.2.1455925845.1640044800' alt='contact number'></img>
                        <a href='tel:+917667276672'>(+91) 76672 76672</a></span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <a href="https://wa.me/+917667276672" target="_blank" rel="noreferrer">Whatsapp</a>
                    </li>
                </ul>
                <NavBar />
                {/* <ul >
                    <li>
                        <a href='/about-us'>About Us</a>
                        <a className='navigation-links' href='/blog'>Blog</a>
                        <a className='navigation-links' href='/certificates'>Certificates</a>
                        <a className='navigation-links' href='/find-out-store'>Find out store</a>
                        <a className='navigation-links' href='/on-wheels'>On wheels</a>
                    </li>
                </ul> */}
                
            </div>
            <div className='container-middle'>
                <div>
                    <div clasName="search">
                    <input type="text" className="searchTerm"  />
                    <button type="submit" className="searchButton">
                    <FontAwesomeIcon icon={faSearch} />
                    </button>
                    </div>
                </div>
                
                <img id="profile" src='https://icons-for-free.com/iconfiles/png/512/avatar+human+man+profile+icon-1320085876716628234.png' alt='profile'></img>
                <Cart />
            </div>

        </>
        
    );
}

export default Header;