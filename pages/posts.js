// import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
// import { fetchData } from '../lib/ApiCalls'
import Listing from '../components/Listing' 

const Posts = () => {

  // const [ posts, setPosts ] = useState([])
  // // const [ categories, setCategories ] = useState([])
  // const [loaded, setLoaded] = useState(false)

  // useEffect(() => {
  //   fetchData('posts').then( data => setPosts(data) )
  //   setLoaded(true)
  //   // let catTitles = posts.map( post => post.attributes.categories )
  //   // 
  // },[])

  return (
    <div>
      <div className="post-header">
        <h2>Posts</h2>
      </div>

      <div className='post-categories'>
        <div className='cat-titles'>
        <h3>Categories</h3>
        <motion.div 
        className='underline' 
        initial={{ width: 0 }}
        animate={{ width: '60%' }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{margin:'auto'}}
        />
        </div>
        <div className='cat-container'>

        </div>
      </div>

      <div className="post-list">
        {/* { loaded &&
        posts.map( post => <Listing 
          key={post.key}
          postTitle={post.attributes.postTitle}
          postImg={
                  post.attributes.workImage.data.attributes.formats.large.url
                }
          postSlug={post.attributes.workSlug}
          postPath="post"
          />)
        } */}
      </div>
    </div>
  )
}

export default Posts
