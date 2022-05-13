import { pageVariant } from '../utils/motionVars'
import { SectionDiv } from '../utils/CustomElements'

const Section = ({ delay, children, cols }) => {
  return (
    <SectionDiv
      initial="out"
      animate="in"
      variants={pageVariant}
      transition={{ delay: delay || 0, duration: 1 }}
      cols={cols}
    >
      {children}
    </SectionDiv>
  )
}

export default Section
