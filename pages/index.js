// import { useState, useEffect } from 'react'
import Link from 'next/link'

// import Card from '../components/Card'
import Contact from '../components/Contact'
import { Button, GridTwo } from '../components/theme/theme'
import { Section } from '../lib/CustomElements'
// import { fetchData } from '../lib/ApiCalls'
// import { PageDiv } from '../lib/CustomElements'

const Homepage = () => {
  // const [works, setWorks] = useState([])
  // const [posts, setPosts] = useState([])

  // useEffect( () => {
  //   fetchData('works','pagination[limit]=3').then(works => setWorks(works))
  //   fetchData('posts','pagination[limit]=3').then(posts => setPosts(posts))
  // }, [])

  return <>
        <Section delay={.2}>
            <GridTwo>
              <div>dsfas</div>
              <div>asdf</div>
            </GridTwo>
        </Section>
    </>
}

export default Homepage
