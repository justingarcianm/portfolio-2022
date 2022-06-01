import { useEffect,useState } from "react"

import Section from "../section"
import Card from "../Card/card"
import { fetchData } from "../../utils/frontFetch"

/*
    This component only shows if the posts state has at least one item
*/

const RelatedPosts = ({categories, slug}) => {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        setData(categories)
    },[])

    const setData = async cats => {
        // maps categories with api call style
        let queries = cats.map( (cat, idx) => `filters[$or][${idx}][catTitle][catLabel][$eq]=${cat}` ).join('&')
        // Sets limit of 3 posts that are within the categories (organized by date) and excludes the current post
        let concatQueries = `${queries}&filters[$and][${cats.length}][postSlug][$ne]=${slug}&pagination[limit]=3&populate=*`
        console.log(concatQueries)
        let data = await fetchData('posts/?', concatQueries )
        return await setPosts(data)
    }

    return <>
        { posts.length > 0 && <h2>Related Posts</h2>}
            <Section cols={3} >
                {posts.length > 0 && posts.map( post => {
                    return <Card 
                    key={post.id}
                    cardTitle={post.attributes.postTitle}
                    cardSlug={post.attributes.postSlug}
                    cardImg={post.attributes.postImage.data.attributes.formats.thumbnail.url}
                    cardPath={'posts'}
            />
                } )}
            </Section>
    </>
}

export default RelatedPosts