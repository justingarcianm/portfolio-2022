import { useEffect, useState } from 'react'
import Image from 'next/image'

import notFoundImage from '../public/images/undraw_taken_night.svg'
import { CopyLink} from '../theme/global.css'
import { NotFoundLayout } from '../styles/Index.css'

const NotFound = () => {
  
  const [ query, setQuery ] = useState('')

  useEffect(() => {
    
  },[])

  return (
    <NotFoundLayout>
        <Image src={notFoundImage} alt="query not found" width={1280} height={500} priority />
          <h1>Seems like this page is missing...</h1>
            <CopyLink href="/">
              Go Home
            </CopyLink>
    </NotFoundLayout>
  )
}

export default NotFound
