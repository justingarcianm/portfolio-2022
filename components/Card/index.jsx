import Link from 'next/link'
import Image from 'next/image'
import { CardContent, CardWrapper } from './Card.css'
const Card = ({ cardTitle, cardSlug, cardImg, cardPath }) => {

  return <Link href={`${cardPath}/${cardSlug}`}>
          <CardWrapper>
          <Image 
          src={cardImg}
          alt={cardTitle}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          />
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
          </CardWrapper>
          </Link>
}

export default Card
