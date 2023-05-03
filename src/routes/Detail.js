import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Detail = () => {
    const [data, setData] = useState([])
    const [genres, setGenres] = useState([])
    const {id} = useParams()
    const getMovie = async(id) => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        setData(json.data.movie)
        setGenres(json.data.movie.genres)
        console.log(json.data.movie)
    }

    const GenresList = () =>{
    return (
        <ul>
            {genres && genres.map((g)=>{
                return <li className="detail-list" key={g}>{g}</li>
            })}
        </ul>
        )
    }
 
    useEffect(()=>{
        getMovie(id)
    },[id])

    return (
        <div className="Detail-page">
            <div className="left">
                <img src={data.large_cover_image} alt="poster" />
            </div>
            <div className="right">
                <h2>{data.title_long}</h2>
                <span className="borderR">Rate : {data.rating}</span>
                <span className="borderR">Year : {data.year}</span>
                <span>Runtime : {data.runtime} min</span>
                <GenresList />
                <p>{data.description_intro}</p>
            </div>
        </div>
    )
}

export default Detail