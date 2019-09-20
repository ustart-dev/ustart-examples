const axios = require('axios');

const vehicleResolvers = {
  Query: {
    getVehicle: (root, args) => {
      return axios.get(`https://swapi.co/api/vehicles/${args.id}`).then(
        response => response.data
      );
    },
    getVehicles: (root, args) => {
      const params = {};

      if (args.page) {
        params.page = args.page;
      }

      if (args.search) {
        params.search = args.search;
      }

      return axios.get('https://swapi.co/api/vehicles', { params }).then(
        response => response.data.results
      );
    },
  }
};

export default vehicleResolvers;
