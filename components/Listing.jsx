import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLink } from 'react-icons/fa'
import { Paragraph, ListingDiv, Button, ListingLinks } from '../utils/CustomElements'
import { listingVariant } from '../utils/motionVars'

const Listing = ({  
  delay,
  listingTitle,
  listingImg,
  listingSlug,
  listingDescription,
  repoLink,
  liveLink,
  work }) => {

  return (
    <ListingDiv
      initial='out'
      animate='in'
      transition={{ delay: delay || 0, duration: 1.2, type: 'spring' }}
      variants={listingVariant}
    >
      <div>
        <Image
          src={listingImg}
          alt={listingTitle}
          width={400}
          height={200}
          style={{borderRadius:'var(--border-radius)'}}
        />
      </div>
      <div className="listing-content">
        <h3 style={{fontSize:'1.5rem'}}>{listingTitle}</h3>
        <div style={{margin:'1rem 0'}}>
          <Paragraph>{listingDescription}</Paragraph>
        </div>
        <ListingLinks>
          <div>
            <Button>
              <Link href={`${listingSlug}`}>Read More</Link>
            </Button>
          </div>
          { work && <div>
            <Link href={`${repoLink}`} passHref>
              <motion.a target="_blank" whileHover={{ color: 'var(--accent-color)' }} style={{marginRight:'1rem'}} >
                <FaGithub /> Repo
              </motion.a>
            </Link>
            <Link href={`${liveLink}`} passHref >
              <motion.a target="_blank" whileHover={{ color: 'var(--accent-color)' }}>
                <FaLink /> Demo
              </motion.a>
            </Link>
          </div> }
        </ListingLinks>
      </div>
    </ListingDiv>
  )
}

export default Listing
