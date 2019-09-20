const axios = require('axios');

const filmResolvers = {
  Query: {
    getFilm: (root, args) => {
      return axios.get(`https://swapi.co/api/films/${args.id}`).then(
        response => response.data
      );
    },
    getFilms: (root, args) => {
      const params = {};

      if (args.search) {
        params.search = args.search;
      }

      return axios.get('https://swapi.co/api/films', { params }).then(
        response => response.data.results
      );
    },
  },
  Film: {
    vehicles(film) {
      // console.log(film.vehicles);
      // return null;
      let promisesArr = film.vehicles.map(v => axios.get(v));
      return Promise.all(promisesArr).then(res => res.map(r => r.data));
    }
  }
};

export default filmResolvers;
