import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import ReactMarkdown from 'react-markdown'

import { PostContainer } from './Post.css'

const PostContent = ({ content }) => {
    return <PostContainer>
        <ReactMarkdown 
        children={content}
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
    </PostContainer>
}

export default PostContent