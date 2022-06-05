import { pageVariant } from '../utils/motionVars'
import { SectionDiv } from '../theme/global.css'

const Section = ({ delay, children, cols, ...props }) => {
  return (
    <SectionDiv
      initial="out"
      animate="in"
      variants={pageVariant}
      transition={{ delay: delay || 0, duration: 1 }}
      cols={cols}
      {...props}
    >
      {children}
    </SectionDiv>
  )
}

export default Section
