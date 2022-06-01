import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { FaGithubSquare, FaLink } from 'react-icons/fa'

import Section from '../../components/section'
import { fetchData } from "../../utils/frontFetch"
import { WorkHeading, WorkLinks, WorkContent } from "../styles/Index.css"

const WorkSingle = ({ post }) => {

  return <>
    <Section delay={.2}>
    <WorkHeading image={post.attributes.workImage.data.attributes.url} >
        <div>
            <h1>{post.attributes.workTitle}</h1>
            <p>{post.attributes.workDescription}</p>
            <WorkLinks>
              <Link href={post.attributes.repoLink} target="_blank">
                <span>
                  <FaGithubSquare/> Repo Link
                </span>
                </Link>
              <Link href={post.attributes.liveLink} target="_blank">
                <span>
                  <FaLink/> See the Site
                </span>
                </Link>
            </WorkLinks>
        </div>
    </WorkHeading>
    </Section>
    <Section delay={.4}>
      <WorkContent>
      <ReactMarkdown 
        children={post.attributes.workContent}
        components={{
            code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={nightOwl}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
            }
        }}
        />
      </WorkContent>
    </Section>
  </>
}

export async function getServerSideProps(context) {

  const post = await fetchData(`works/${context.query.slug}`)

  return { props: { post } }
}

export default WorkSingle