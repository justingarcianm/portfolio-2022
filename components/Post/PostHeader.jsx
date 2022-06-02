import Image from 'next/image'
import Moment from 'react-moment'
import { PostHeading, CategoryContainer, AuthorMeta } from './Post.css'

const PostHeader = ({
  title,
  time,
  authorName,
  authorImage,
  categories,
  postImage
}) => {
  return (
    <PostHeading image={postImage}>
      <div>
        <CategoryContainer>
          <p>Categories:</p>
          <span>{categories.map(cat => cat).join(' ')}</span>
        </CategoryContainer>
        <h1>{title}</h1>
        <AuthorMeta>
          <Image src={authorImage} width={65} height={65} alt={title} />
          <div>
            <h4>Created By: {authorName}</h4>
            <h5>
              Published: <Moment date={time} format="MMM DD, YYYY" />
            </h5>
          </div>
        </AuthorMeta>
      </div>
    </PostHeading>
  )
}

export default PostHeader
