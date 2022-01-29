const API_KEY = "a933ca4c4e9cdbd88d6837079447b93b";

 const requests = {
     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
     fetchOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
     fetchTopRated: `/movies/top_rated?api_key=${API_KEY}&langauge=en-US`,
     fetchActionMovies: `/discover/movies?api_key=${API_KEY}&with_genres=28`,
     fetchComedyMovies: `/discover/movies?api_key=${API_KEY}&with_genres=35`,
     fetchHorrorMovies: `/discover/movies?api_key=${API_KEY}&with_genres=27`,
     fetchRomanceMovies: `/discover/movies?api_key=${API_KEY}&with_genres=10749`,
     fetchDocumentries: `/discover/movies?api_key=${API_KEY}&with_genres=99`,
 }

 export default requests;
  