import { fetchData } from '../utils/frontFetch'
import { delayAmt } from '../utils/motionVars'
import Section from '../components/section'
import Listing from '../components/listing'
import { SectionTitle } from '../utils/CustomElements'

const Work = ({ worksData }) => {
  return (
    <Section delay={.2}>
      <div className="work-header">
        <SectionTitle>My Work</SectionTitle>
      </div>
      <Section delay={.4} >
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
    </Section>
  )
}

export async function getServerSideProps() {
  const worksData = await fetchData('works')

  return { props: { worksData } }
}

export default Work
