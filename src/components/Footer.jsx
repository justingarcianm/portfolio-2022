import { Link } from 'react-router-dom'

const Footer = () => {
    return <footer>
        <div className="container">
            <div className="footer-flex">
                <div className="copyright">
                    juj
                </div>
                <div className="footer-links">
                <Link to='/about'>About</Link>
            <Link to='/work'>Work</Link>
            <Link to='/posts'>Posts</Link>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer