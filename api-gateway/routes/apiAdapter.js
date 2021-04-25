const axios = require('axios');

const instance = (url) => {
	return axios.create({
		baseURL: url
	})
}

module.exports = instance;