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
        url : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`
    },
    fetchComedyMovies :{
        title : 'Comedy',
        url : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`
    },
    fetchHorrorMovies :{
        title : 'Horror',
        url : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`
    },
    fetchRomanceMovies :{
        title : 'Romance',
        url : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`
    },
    fetchUpcoming :{
        title : 'Upcoming',
        url : `/movie/upcoming/?api_key=${API_KEY}&language=en-US&with_genres=9648`
    },
    fetchNowPlaying :{
        title : 'Now Playing',
        url : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`
    },
    fetchDocumentaries :{
        title : 'Western',
        url : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`
    },
    fetchAnimation :{
        title : 'Animation',
        url : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`
    },
    fetchTV :{
        title : 'TV Movies',
        url : `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10770`
    }
};