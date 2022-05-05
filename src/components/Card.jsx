import { Link } from 'react-router-dom'

// @props - ({ cardTitle,cardSlug,cardType,cardImg })
const Card = () => {

    const activeToggle = e => !e.target.classList.contains('hover') && e.target.classList.add('hover')
    const activeUnToggle = e => e.target.classList.contains('hover') && e.target.classList.remove('hover')

    return  <Link to='/posts/dfa' className='card' style={{backgroundImage:`url(https://bit.ly/dan-abramov)`}}>
        <div className="card-content" onMouseEnter={e => activeToggle(e)} onMouseLeave={e => activeUnToggle(e)}>
        <h3>Card Title goes here</h3>
        </div>
        </Link>
}

export default Card