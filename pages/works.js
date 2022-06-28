import { fetchData } from '../utils/frontFetch'
import { delayAmt } from '../utils/motionVars'
import Section from '../components/section'
import Listing from '../components/Listing/index'
import TwoThirdsSection from '../components/twoThirdsSection'
import { CopyLink } from '../theme/global.css'

const Work = ({ worksData }) => {
  return (
    <>
      <TwoThirdsSection delay={0.2} direction={'right'}>
        <h1>My Work</h1>
        <div>
          <p>
            Sometimes I find myself coding late in the night and find out that a
            project I&apos;ve been working on turns out to be pretty good.
          </p>
          <p>
            Here are a collection of some of those successes. Also visit my{' '}
            <CopyLink href="https://github.com/justingarcianm" target="_blank">
              Github
            </CopyLink>{' '}
            to see all of my work! I try to add as much info on these projects
            and the technologies I used. But if there are any questions, feel
            free to reach out <CopyLink href="/#contact">here!</CopyLink>
          </p>
        </div>
      </TwoThirdsSection>

      <Section delay={0.4}>
        {worksData.map(work => (
          <Listing
            key={work.id}
            listingTitle={work.attributes.workTitle}
            listingImg={
              work.attributes.workImage.data.attributes.formats.thumbnail.url
            }
            listingSlug={work.attributes.workSlug}
            listingDescription={work.attributes.workDescription}
            repoLink={work.attributes.repoLink}
            liveLink={work.attributes.liveLink}
            work={true}
            delay={delayAmt(work.id)}
          />
        ))}
      </Section>
    </>
  )
}

export async function getServerSideProps() {
  const worksData = await fetchData('works')

  return { props: { worksData } }
}

export default Work
