import { NavLink } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { CgMenu } from 'react-icons/cg'
import DarkModeToggle from './DarkModeToggle'

const Nav = () => {

    const toggleMenu = () => {
        const menu = document.querySelector('.menu-list')
        return menu.classList.toggle('open')
    }

    return <nav>
       <div className="container">
           <div className="nav-container">
           <div id='home-link'>
            <NavLink to='/'>
            <h1>Justin Garcia</h1>
            </NavLink>
        </div>
        <div className="site-links">
            <NavLink to='/about' activeClassName='activeLink'>About</NavLink>
            <NavLink to='/work' activeClassName='activeLink'>Work</NavLink>
            <NavLink to='/posts' activeClassName='activeLink'>Posts</NavLink>
            <a href="https://github.com/justingarcianm/Portfolio-2022">
                <FaGithub/> Source
            </a>
        </div>
        <div className='stacked'>
        <DarkModeToggle/>
            <div className='stacked-menu'>
                <div className="stacked-btn" onClick={toggleMenu}>
                <CgMenu/>
                </div>
                <div className="menu-list">
                <NavLink to='/about' >About</NavLink>
            <NavLink to='/work' activeClassName='activeLink'>Work</NavLink>
            <NavLink to='/posts' activeClassName='activeLink'>Posts</NavLink>
            <a href="https://github.com/justingarcianm/Portfolio-2022">
                <FaGithub/>  Source
            </a>
                </div>
            </div>
        </div>
           </div>
       </div>
    </nav>
}

export default Nav