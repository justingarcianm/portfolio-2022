import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLink } from 'react-icons/fa'
import { ListingLinks, ListingDiv } from './Listing.css'
import { listingVariant } from '../../utils/motionVars'
import PageLink from '../pageLink'

const Listing = ({
  delay,
  listingTitle,
  listingImg,
  listingSlug,
  listingDescription,
  repoLink,
  liveLink,
  work
}) => {
  return (
    <ListingDiv
      initial="out"
      animate="in"
      transition={{ delay: delay || 0, duration: 1.2, type: 'spring' }}
      variants={listingVariant}
    >
      <div>
        <Image
          src={listingImg}
          alt={listingTitle}
          width={400}
          height={200}
          style={{
            borderRadius: 'var(--border-radius)',
            boxShadow: 'var(--box-shadow)'
          }}
        />
      </div>
      <div className="listing-content">
        <h3>{listingTitle}</h3>
        <div>
          <p>{listingDescription}</p>
        </div>
        <ListingLinks>
          <div>
            <PageLink
              href={work ? `/work/${listingSlug}` : `/posts/${listingSlug}`}
            >
              Read More
            </PageLink>
          </div>
          {work && (
            <div>
              <motion.a
                href={`${repoLink}`}
                target="_blank"
                style={{ marginRight: '1rem' }}
              >
                <FaGithub /> Repo
              </motion.a>
              <motion.a href={`${liveLink}`} target="_blank">
                <FaLink /> Demo
              </motion.a>
            </div>
          )}
        </ListingLinks>
      </div>
    </ListingDiv>
  )
}

export default Listing
