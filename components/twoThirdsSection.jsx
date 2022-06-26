import { pageVariant } from '../utils/motionVars'
import { TwoThirdsDiv } from '../theme/global.css'

const TwoThirdsSection = ({ delay, children, direction, ...props }) => {
  return (
    <TwoThirdsDiv
      initial="out"
      animate="in"
      variants={pageVariant}
      transition={{ delay: delay || 0, duration: 1 }}
      direction={direction}
      {...props}
    >
      {children}
    </TwoThirdsDiv>
  )
}

export default TwoThirdsSection
