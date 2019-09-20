const axios = require('axios');

const peopleResolvers = {
  Query: {
    getPerson: (root, args) => {
      return axios.get(`https://swapi.co/api/people/${args.id}`).then(response => response.data);
    },
    getPeople: (root, args) => {
      const params = {};

      if (args.page) {
        params.page = args.page;
      }

      if (args.search) {
        params.search = args.search;
      }

      return axios.get('https://swapi.co/api/people', { params }).then(
        response => response.data.results
      );
    },
  },
  People: {
    homeworld(people) {
      // console.log(people);
      // return null;
      return axios.get(people.homeworld).then(response => response.data);
    }
  }
};

export default peopleResolvers;
