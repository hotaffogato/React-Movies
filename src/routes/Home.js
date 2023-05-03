import Movie from "../components/Movie"
import { useState, useEffect } from 'react'

const Home = () => {

    const [ loading, setLoading ] = useState(true)
    const [ movies, setMovies ] = useState([])
  
    const getMovies = async() => {
      const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year')
      const json = await response.json()
      setMovies(json.data.movies)
      setLoading(false)    
    }
  
    useEffect(()=>{
      getMovies()
    },[])

        return (
          <div className="App">
            {loading ? <h1 className="loading">Loading...</h1> : <div>{movies.map((item)=>(
              <Movie
              key={item.id}
              id={item.id}
              coverImg={item.medium_cover_image}
              title={item.title}
              summary={item.summary}
              genres={item.genres}
              />
              )
            )}</div>}
        </div>
    );
}

export default Home;