import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Card from '../components/Card'
import Contact from '../components/Contact'
import { fetchData } from '../lib/ApiCalls'
import { PageDiv } from '../lib/CustomElements'

const Homepage = () => {
  const [works, setWorks] = useState([])
  const [posts, setPosts] = useState([])

  useEffect( () => {
    fetchData('works','pagination[limit]=3').then(works => setWorks(works))
    fetchData('posts','pagination[limit]=3').then(posts => setPosts(posts))
  }, [])

  return (
    <PageDiv title='Home' description='Welcome to my portfolio site!' >
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
          {works.length > 0 && works.map(work => (
              <Card
                key={work.id}
                cardTitle={work.attributes.workTitle}
                cardImg={
                  work.attributes.workImage.data.attributes.formats.thumbnail.url
                }
                cardSlug={work.attributes.workSlug}
                cardPath="work"
              />
            ))}
        </div>
        <motion.button
          className="link-button"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Link to="/work">View All</Link>
        </motion.button>
      </section>
      <section className="posts">
        <h2>Recent Posts</h2>
        <div className="card-row">
          {posts.length > 0 && posts.map(post => (
              <Card
                key={post.id}
                cardTitle={post.attributes.postTitle}
                cardImg={
                  post.attributes.postImage.data.attributes.formats.thumbnail.url
                }
                cardSlug={post.attributes.postSlug}
                cardPath="post"
              />
            ))}
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
    </PageDiv>
  )
}

export default Homepage
