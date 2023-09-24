const API_KEY = "3bc42bf45aeeacb02b1b8e960d246cc9";

type Categories = Record<
  string,
  {
    key: string;
    title: string;
    url: string;
  }
>;

const categories: Categories = {
  trending: {
    key: "trending",
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  },
  "top-rated": {
    key: "top-rated",
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  },
  action: {
    key: "action",
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  comedy: {
    key: "comedy",
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  horror: {
    key: "horror",
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  romance: {
    key: "romance",
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  mystery: {
    key: "mystery",
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  "sci-fi": {
    key: "sci-fi",
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  western: {
    key: "western",
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  animation: {
    key: "animation",
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  "tv-show": {
    key: "tv-show",
    title: "TV-Show",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};

export default categories;
