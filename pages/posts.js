import { useState, useEffect } from 'react'
import { CopyLink } from '../theme/global.css'
import { motion } from 'framer-motion'
import { fetchData } from '../utils/frontFetch'
import { delayAmt } from '../utils/motionVars'
import Section from '../components/section'
import Listing from '../components/Listing/index'
import TwoThirdsSection from '../components/twoThirdsSection'
import { CategoryContainer, UnderLine } from '../styles/Index.css'

const Posts = ({ postsData }) => {
  const [activeCategories, setActiveCategories] = useState([])
  const [activePosts, setActivePosts] = useState([])
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    allCategories(postsData)
  }, [postsData])

  const allCategories = allPosts => {
    setActivePosts(allPosts)
    let categories = allPosts
      .map(post =>
        post.attributes.catTitle.data.map(cat => cat.attributes.catLabel)
      )
      .reduce((a, b) => a.concat(b), [])

    setActiveCategories(categories)
  }

  const fetchByCat = async () => {
    let activeAct = document.querySelector('.active.category').innerHTML
    let filteredData = await fetchData(
      'posts',
      `?filters[catTitle][catLabel][$eq]=${activeAct}&populate=*`
    )
    setDisplay(true)
    return await setActivePosts(filteredData)
  }

  const handleToggle = e => {
    let active = e.target
    let allCat = document.querySelectorAll('.category')
    allCat.forEach(single => {
      if (single.innerHTML !== active.innerHTML) {
        single.classList.remove('active')
      } else if (!single.classList.contains('active')) {
        single.classList.add('active')
      }
    })
    fetchByCat()
  }

  const resetAll = () => {
    let allCat = document.querySelectorAll('.category')
    allCat.forEach(
      single =>
        !single.classList.contains('active') && single.classList.add('active')
    )
    setDisplay(false)
    return allCategories(postsData)
  }

  return (
    <>
      <TwoThirdsSection delay={0.2} direction={'right'}>
        <h1 style={{ textAlign: 'center' }}>Posts</h1>
        <div>
          <p>
            Here are a collection of posts where I mostly focus on front end
            technologies like HTML, CSS, Javascript, with various frameworks and
            libraries that make being a web developer hopefully a little easier.
          </p>
          <p>
            Have any thoughts? Or maybe some tips or tricks to share? Feel free
            to reach out <CopyLink href="/#contact">here.</CopyLink>{' '}
          </p>
        </div>
      </TwoThirdsSection>

      <Section delay={0.4}>
        <h2>Categories</h2>
        <UnderLine
          initial={{ width: 0 }}
          animate={{ width: '10%' }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ margin: '0 auto', bottom: '20%' }}
        />
      </Section>
      <Section delay={0.4}>
        <CategoryContainer>
          {activeCategories.map(cat => (
            <motion.span
              key={cat}
              onTap={handleToggle}
              className="active category "
            >
              {cat}
            </motion.span>
          ))}
        </CategoryContainer>
        <p
          style={{
            textAlign: 'center',
            cursor: 'pointer',
            display: `${display ? 'block' : 'none'}`
          }}
          onClick={resetAll}
        >
          Reset All
        </p>
      </Section>

      <Section delay={0.6}>
        {activePosts &&
          activePosts.map(post => (
            <Listing
              key={post.id}
              listingTitle={post.attributes.postTitle}
              listingImg={
                post.attributes.postImage.data.attributes.formats.thumbnail.url
              }
              listingDescription={post.attributes.postDescription}
              listingSlug={post.attributes.postSlug}
              work={false}
              delay={delayAmt(post.id + 0.2)}
            />
          ))}
      </Section>
    </>
  )
}

export async function getServerSideProps() {
  const postsData = await fetchData('posts')
  return { props: { postsData } }
}

export default Posts
