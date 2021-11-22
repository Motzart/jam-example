/* eslint-disable quote-props */
import axios from 'axios';
import nanoid from 'nanoid';
import merge from 'merge-deep';

// Configs
import ENV from '../config';

const defaultOptions = {
  headers: {
    'language': 'en_GB',
  },
};

const getApiUrl = (path) => {
 let baseUrl = 'https://test.io';
 return `${baseUrl}/${path}/api`
};

const getData = async (params) => {
  const options = params.options ? merge(defaultOptions, params.options) : defaultOptions;
  if (!options.headers['request-id']) {
    options.headers['request-id'] = `react-server_${nanoid()}`;
  }
  const apiUrl = getApiUrl(params.path);

  try {
    return await axios(apiUrl, options);
  } catch (error) {
    throw error;
  }
};

export { getData };