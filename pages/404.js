import Link from 'next/link'
import Image from 'next/image'

import notFoundImage from '../public/images/undraw_taken_night.svg'

const NotFound = () => {
  return (
    <div>
      <div className="notFound-container">
        <Image src={notFoundImage} alt="not found" layout='fill' />
        <div className="notFound-copy">
          <h2>Seems like this page is missing...</h2>
          <p>
            {' '}
            <Link href="/" className="notFound-link">
              Go Home
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
