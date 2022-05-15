import Link from 'next/link'
import notFoundImage from '../public/images/undraw_taken_night.svg'

const NotFound = () => {
  return (
    <div>
      <div className="notFound-container">
        <img src={notFoundImage} alt="not found" />
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
