import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { FaGithubSquare, FaLink } from 'react-icons/fa'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import Section from '../../components/section'
import { fetchData } from '../../utils/frontFetch'
import { WorkHeading, WorkLinks, WorkContent } from '../../styles/Index.css'

const WorkSingle = ({ post }) => {
  return (
    <>
      <Section delay={0.2}>
        <WorkHeading image={post.attributes.workImage.data.attributes.url}>
          <div>
            <h1>{post.attributes.workTitle}</h1>
            <p>{post.attributes.workDescription}</p>
            <WorkLinks>
              <Link href={post.attributes.repoLink} target="_blank">
                <span>
                  <FaGithubSquare /> Repo Link
                </span>
              </Link>
              <Link href={post.attributes.liveLink} target="_blank">
                <span>
                  <FaLink /> See the Site
                </span>
              </Link>
            </WorkLinks>
          </div>
        </WorkHeading>
      </Section>
      <Section delay={0.4}>
        <WorkContent>
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={nightOwl}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {post.attributes.workContent}
          </ReactMarkdown>
        </WorkContent>
      </Section>
    </>
  )
}

export async function getServerSideProps(context) {
  const post = await fetchData(`works/${context.query.slug}`)

  return { props: { post } }
}

export default WorkSingle
