import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { pageVariant, pageTransition } from '../lib/variants'
import { fetchData } from '../lib/ApiCalls'

import Listing from '../components/Listing'

const Work = () => {
  const [works, setWorks] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetchData('works').then(data => setWorks(data))
    setLoaded(true)
  }, [works])

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <div className="work-header">
        <h2>My Work</h2>
      </div>
      <div className="work-list">
        <AnimatePresence>
          {loaded &&
            works.map(work => (
              <Listing
                key={work.id}
                workTitle={work.attributes.workTitle}
                workImg={
                  work.attributes.workImage.data.attributes.formats.large.url
                }
                workSlug={work.attributes.workSlug}
              />
            ))}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Work
