import propTypes from "prop-types"
import { Link } from "react-router-dom"

const Movie = ({id, coverImg, title, genres}) => {
    return(
    <figure>
        <Link to={`/movie/${id}`}>
        <img src={coverImg} alt="poster" className="poster" />
        <figcaption>
            <h2 className="title">{title}</h2>
            <ul>
            {genres.map((g)=>(
                <li className="home-list" key={g}>{g}</li>
            ))}
            </ul>
        </figcaption>
        </Link>
    </figure>
    )
}

Movie.propTypes = {
    id:propTypes.number.isRequired,
    coverImg:propTypes.string.isRequired,
    title:propTypes.string.isRequired,
    genres:propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie