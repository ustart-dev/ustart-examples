const axios = require('axios');

const planetResolvers = {
  Query: {
    getPlanet: (root, args) => {
      return axios.get(`https://swapi.co/api/planets/${args.id}`).then(
        response => response.data
      );
    },
    getPlanets: (root, args) => {
      const params = {};

      if (args.page) {
        params.page = args.page;
      }

      if (args.search) {
        params.search = args.search;
      }

      return axios.get('https://swapi.co/api/planets', { params }).then(
        response => response.data.results
      );
    },
  }
};

export default planetResolvers;
