// import { useState } from 'react'
import { Link } from 'react-router-dom'

import Card from '../components/Card'

const Homepage = () => {

    // const [ work,setWork ] = useState([])
    // const [ posts,setPosts ] = useState([])

    return <div>
       <section className='header'>
       <div className="header-title">
       <h2>
        Hi, my name is Justin
        </h2>
        <h3>Web Developer</h3>
       </div>
       <div className="header-copy">
           <p>Need a problem solver? I am passionate in this field and I have the talent to back it up with experience in headless cms, front end development, and design. I am a natural one man team but I can also thrive in collaborative settings. Learn more <Link to='/about'>about me</Link> or see some of <Link to='/work'>my work.</Link></p>
       </div>
       </section>

       <section className='work'>
        <h2>My Work</h2>
        <div className='card-row'>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <button className='link-button' >
        <Link to='/posts'>View All</Link>
    </button>
       </section>
       <section className='posts'>
       <h2>Recent Posts</h2>
       <div className='card-row'>
       <Card/>
       <Card/>
       <Card/>
</div>

    <button className='link-button' >
        <Link to='/posts'>View All</Link>
    </button>

       </section>
       <section className='contact'>
           <div className='contact-container'>
               <div className='contact-copy'>
                   <h2>Contact Me</h2>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
        neque cum numquam itaque accusantium omnis eveniet quia illo, a iste
        excepturi? Esse repellat atque et nesciunt animi quia adipisci
        dolorem.</p>
               </div>
               <div className='contact-form'></div>
           </div>
       </section>
    </div>
}

export default Homepage