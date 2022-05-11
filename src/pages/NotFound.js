import { PageDiv } from '../lib/CustomElements'
import { Link } from 'react-router-dom'
import notFoundImage from '../images/undraw_taken_night.svg'

const NotFound = () => {

  return <PageDiv title='Not Found' description='Looks like this page was not found.'>
      <div className='notFound-container'>
        <img 
        src={notFoundImage} 
        alt='not found'
        />
        <div className='notFound-copy'>
          <h2>Seems like this page is missing...</h2>
          <p> <Link to='/' className='notFound-link' >Go Home</Link> </p>
        </div>
      </div>
    </PageDiv>
  
}

export default NotFound
