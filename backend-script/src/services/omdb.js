const axios = require('axios');

const Service = {};

Service.searchMovie = (searchWord, page) => axios.get(process.env.OMDB_API, {
  method: 'GET',
  params: {
    apikey: process.env.OMDB_API_KEY,
    s: searchWord,
    page,
  },
  headers: { 'Content-Type': 'application/json' },
});

Service.getDetailMovie = (imdbId) => axios.get(process.env.OMDB_API, {
  method: 'GET',
  params: {
    apikey: process.env.OMDB_API_KEY,
    i: imdbId,
  },
  headers: { 'Content-Type': 'application/json' },
});

module.exports = Service;
