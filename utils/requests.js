const API_KEY = process.env.API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    fetchTrending :{
    title : 'Trending',
    url : `/trending/all/weeks?api_key=${API_KEY}&language=en=US`
    },
    fetchTopRated :{
        title : 'Top Rated',
        url : `/movie/top_rated?api_key=${API_KEY}&language=en=US`
    },
    fetchActionMovies :{
        title : 'Action',
        url : `/discover/movie?api_key=${API_KEY}&with_genre=28`
    },
    fetchComedyMovies :{
        title : 'Comedy',
        url : `/discover/movie?api_key=${API_KEY}&with_genre=35`
    },
    fetchHorrorMovies :{
        title : 'Horror',
        url : `/discover/movie?api_key=${API_KEY}&with_genre=27`
    },
    fetchRomanceMovies :{
        title : 'Romance',
        url : `/discover/movie?api_key=${API_KEY}&with_genre=10749`
    },
    fetchUpcoming :{
        title : 'Upcoming',
        url : `/movie/upcoming/?api_key=${API_KEY}&with_genre=9648`
    },
    fetchNowPlaying :{
        title : 'Now Playing',
        url : `/discover/movie?api_key=${API_KEY}&with_genre=878`
    },
    fetchWestern :{
        title : 'Western',
        url : `/discover/movie?api_key=${API_KEY}&with_genre=37`
    },
    fetchAnimation :{
        title : 'Animation',
        url : `/discover/movie?api_key=${API_KEY}&with_genre=16`
    },
    fetchTV :{
        title : 'TV Movies',
        url : `/discover/movie?api_key=${API_KEY}&with_genre=10770`
    }
};