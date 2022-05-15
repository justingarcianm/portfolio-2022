import { fetchData } from '../utils/frontFetch'
import { delayAmt } from '../utils/motionVars'
import Section from '../components/section'
import Listing from '../components/listing'
import { SectionTitle, Underline } from '../utils/CustomElements'

const Posts = ({ postsData, catTitles }) => {
  // const usedCategories = catTitles.filter( (cat,index) => cat.attributes.catLabel.find(postsData[index].attributes.catTitle.data.attributes.catLabel) )
  console.log(postsData)
  console.log(catTitles)
  return (
    <>
      <Section delay={.2}>
        <SectionTitle>Posts</SectionTitle>
      </Section>

      <Section delay={.4}>
        <div style={{position:'relative', maxWidth:'fit-content', margin:'auto'}}>
          <SectionTitle>Categories</SectionTitle>
            <Underline 
            style={{margin:'0 auto'}}
            initial={{width:0}}
            animate={{width:'60%'}}
            transition={{ delay:.3, duration:1.2 }}
          />
        </div>
        <div className="cat-container"></div>
      </Section>

      <Section delay={.6}>
        { postsData.map( post => <Listing 
          key={post.key}
          listingTitle={post.attributes.postTitle}
          listingImg={
                  post.attributes.postImage.data.attributes.formats.thumbnail.url
                }
          listingDescription={post.attributes.postDescription}      
          listingSlug={post.attributes.postSlug}
          work={false}
          delay={delayAmt(post.key + 4)}
          />)
        }
      </Section>
    </>
  )
}

export async function getServerSideProps() {
  const postsData = await fetchData('posts')
  const catTitles = await fetchData('categories')
  return { props: { postsData, catTitles } }
}

export default Posts
