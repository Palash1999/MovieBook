import React from 'react'; 

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote)=> {
    if(vote>=8) {
        return 'green';
    }
    else if(vote>6) {
        return 'orange';
    }
    else 
        return 'red';
}

const IMG_URL = 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

const Movie = ({title, poster_path, overview, vote_average}) => (
    <div className="movie">
        
         <img src={poster_path? (IMAGE_API + poster_path) : IMG_URL} alt={title} />
         <div className = "movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
         </div>
         <div className="movie-over">
             <h2>Overview:</h2>
             <p>{overview}</p>
         </div> 
    </div>
);

export default Movie;