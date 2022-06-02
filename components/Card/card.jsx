import Link from 'next/link'
import { CardContent, CardWrapper } from './Card.css'
const Card = ({ cardTitle, cardSlug, cardImg, cardPath }) => {
  return (
    <div>
      <CardWrapper bg={cardImg}>
        <Link href={`/${cardPath}/${cardSlug}`} passHref>
          <CardContent
            initial={{
              opacity: 0
            }}
            whileHover={{
              opacity: 1
            }}
          >
            <h3>{cardTitle}</h3>
          </CardContent>
        </Link>
      </CardWrapper>
    </div>
  )
}

export default Card
