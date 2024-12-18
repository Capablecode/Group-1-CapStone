import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.png'
import Menu1 from '../../assets/Menu-Button-item.png'
import Menu2 from '../../assets/Menu-Button-item2.png'
import Menu3 from '../../assets/Menu-Button-item3.png'
import Menu4 from '../../assets/Menu-Button-item4.png'
import Menu5 from '../../assets/Menu-Button-item5.png'
import Search from '../../assets/Search.png'
import Profile from '../../assets/Profile-Pic-S.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt='Insta logo' className='logo'/>

        <div className='search-box'>
            <img src={Search}alt='icon'/>
            <input type='text' placeholder='Search'/>
        </div>

        <div className='menus'>
            <img src={Menu1} alt='menu1' className='menu'/>
            <img src={Menu2} alt='menu2' className='menu'/>
            <img src={Menu3} alt='menu3' className='menu'/>
            <img src={Menu4} alt='menu4' className='menu'/>
            <img src={Menu5} alt='menu5' className='menu'/>
            <img src={Profile} alt='profile' className='menu'/>
        </div>
    </div>
  )
}

export default Navbar
