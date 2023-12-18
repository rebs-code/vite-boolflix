import { reactive } from "vue";

export const store = reactive({
  // API variables
  apiMovieDB: {
    defaultURL: "https://api.themoviedb.org/3/search/",
    apiKey: "api_key=ff9eae8c479e9b59757c60bd96cde4b0",
    movie: "movie?",
    tv: "tv?",
    imgURL: "https://image.tmdb.org/t/p/w342",
  },
  searchQuery: "",
  searchResultsMovie: [],
  searchResultsTV: [],
});
