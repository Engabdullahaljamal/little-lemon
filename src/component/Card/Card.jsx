import { Link } from 'react-router-dom'
import './Card.css'

function Card({ cards_details }) {
    return (
        <div className="card">
            <h4>{cards_details.title}</h4>
            <img src={cards_details.image} alt="" />
            <p>
                {cards_details.desc}
            </p>
            <Link to={cards_details.link_url}>{cards_details.link_title} </Link>
        </div>
    )
}

export default Card