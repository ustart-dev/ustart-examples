const axios = require('axios');

const peopleResolvers = {
  Query: {
    getPerson: (root, args) => {
      return axios.get(`https://swapi.co/api/people/${args.id}`).then(response => response.data);
    },
  }
};

export default peopleResolvers;
