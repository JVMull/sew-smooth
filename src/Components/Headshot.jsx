import {Link} from 'react-router-dom'
import '../css/Headshot.css'
function Headshot(props) {

  return (
    <div>
        <div className="headshot-container">
            <Link to={props.linkname}>
              <img src={props.photo} className="headshot" alt="Member 1"/>
            </Link>
        </div>
        <h5 className='name'>{props.name}</h5>
    </div>
  )
}

export default Headshot