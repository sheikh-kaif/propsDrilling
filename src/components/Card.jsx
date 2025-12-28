import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return (
    <div className="parent">
    <div className="card">
          <div className="top">
            <img src={props.logo}/>
            <button>Save <Bookmark size={16} /></button>
          </div>
          <div className="center">
            <h3>{props.company} <span>{props.date}</span></h3>
            <h2>{props.post}</h2>
            <div className="tag">
              <button>{props.tag1}</button>
              <button>{props.tag2}</button>
            </div>
          </div>
          <div className="bottom">
            <div className='add'>
              <h4>${props.pay}/hr</h4>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
        </div>
  )
}

export default Card
