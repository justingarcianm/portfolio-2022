import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { pageVariant, pageTransition } from '../../utils/motionVars'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../lib/ApiCalls'

const WorkSingle = () => {
  const [work, setWork] = useState({})
  const url = useParams()
  const img = work.workImage
    ? work.workImage.data.attributes.formats.single.url
    : ''
  useEffect(() => {
    fetchData(`works/${url.slug}`).then(work => setWork(work.attributes))
  }, [url])

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
      <section className="work-header">
        <h2>{work.workTitle}</h2>
        <img src={img} alt={work.workTitle} />
      </section>
      <section className="work-body">{work.workContent}</section>
    </motion.div>
  )
}

export default WorkSingle
