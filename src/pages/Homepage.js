import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Card from '../components/Card'
import Contact from '../components/Contact'
import { pageVariant, pageTransition } from '../lib/variants'
import { fetchData } from '../lib/ApiCalls'
const Homepage = () => {

  const [ works,setWorks ] = useState([])
  const [ posts,setPosts ] = useState([])
  const [ loaded,setLoaded ] = useState(false)

  useEffect(() => {
    fetchData('works')
    .then( works => setWorks(works) )
    fetchData('posts')
    .then( posts => setPosts(posts) )

    setLoaded(true)

  },[])
  

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <section className="header">
        <div className="header-title">
          <h2>Hi, my name is Justin</h2>
          <h3>Web Developer</h3>
        </div>
        <div className="header-copy">
          <p>
            Need a problem solver? I am passionate in this field and I have the
            talent to back it up with experience in headless cms, front end
            development, and design. I am a natural one man team but I can also
            thrive in collaborative settings. Learn more{' '}
            <Link to="/about">about me</Link> or see some of{' '}
            <Link to="/work">my work.</Link>
          </p>
        </div>
      </section>

      <section className="work">
        <h2>My Work</h2>
        <div className="card-row">
         { loaded && works.map( work => <Card 
                                          key={work.id} 
                                          cardTitle={work.attributes.workTitle}
                                          cardImg={work.attributes.workImage.data.attributes.formats.medium.url}
                                          cardSlug={work.attributes.workSlug}
                                          cardPath='work'
                                          /> ) }
        </div>
        <motion.button
          className="link-button"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Link to="/posts">View All</Link>
        </motion.button>
      </section>
      <section className="posts">
        <h2>Recent Posts</h2>
        <div className="card-row">
        { loaded && posts.map( post => <Card 
                                          key={post.id} 
                                          cardTitle={post.attributes.workTitle}
                                          cardImg={post.attributes.workImage.data.attributes.formats.medium.url}
                                          cardSlug={post.attributes.workSlug}
                                          cardPath='post'
                                          /> ) }
        </div>

        <motion.button
          className="link-button"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Link to="/posts">View All</Link>
        </motion.button>
      </section>
      <section className="contact">
        <Contact />
      </section>
    </motion.div>
  )
}

export default Homepage
