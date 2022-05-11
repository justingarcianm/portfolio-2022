import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { PageDiv } from '../lib/CustomElements'
import { fetchData } from '../lib/ApiCalls'

import Listing from '../components/Listing'

const Work = () => {
  const [works, setWorks] = useState([])

  useEffect(() => {
    fetchData('works').then(data => setWorks(data))
  }, [])

  return (
    <PageDiv title='Works' description='A list of projects completed by Justin Garcia' >
      <div className="work-header">
        <h2>My Work</h2>
      </div>
      <div className="work-list">
        <AnimatePresence>
          {works.length > 0 &&
            works.map(work => (
              <Listing
                key={work.id}
                workTitle={work.attributes.workTitle}
                workImg={
                  work.attributes.workImage.data.attributes.formats.single.url
                }
                workSlug={work.attributes.workSlug}
                work={work.attributes}
              />
            ))}
        </AnimatePresence>
      </div>
    </PageDiv>
  )
}

export default Work
