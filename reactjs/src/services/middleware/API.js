  /* *
 * This concept was taken from:
 * https://thinkster.io/tutorials/react-redux-ajax-middleware
 *
 * Codebase on:
 * https://github.com/gothinkster/react-redux-realworld-example-app
 * */

  import superagentPromise from 'superagent-promise';
  import _superagent from 'superagent';
  import { API_BASE_URL } from "../../.env";
  import { authHeader, errHandler, responseBody } from './';
  
  const superagent = superagentPromise(_superagent, global.Promise);
  
  const API = {
  
      // Internal API
      post: async (endpoint, requestBody, requestHeaders) => {
          let headers = await authHeader(requestHeaders);
          return new Promise((resolve, reject) => {
              superagent.post(`${ API_BASE_URL}${endpoint}`, requestBody)
                  .set(headers)
                  // .withCredentials(true)
                  .then(res => resolve(responseBody(res)))
                  .catch(err => {
                      errHandler(err);
                      reject(err);
                  });
          })
      },
  
      get: async (endpoint, requestHeaders) => {
          let headers = await authHeader(requestHeaders);
          return new Promise((resolve, reject) => {
              superagent.get(`${API_BASE_URL}${endpoint}`)
                  .set(headers)
                  // .withCredentials(true)
                  .then(res => resolve(responseBody(res)))
                  .catch(errHandler)
          })
      },
  
      getQuery: async (endpoint, query, requestHeaders) => {
          let headers = await authHeader(requestHeaders);
          return new Promise((resolve, reject) => {
              superagent.get(`${API_BASE_URL}${endpoint}`)
                  .query(query)
                  .set(headers)
                  // .withCredentials(true)
                  .then(res => resolve(responseBody(res)))
                  .catch(errHandler)
          })
      },
  
      put: async (endpoint, requestBody, requestHeaders) => {
          let headers = await authHeader(requestHeaders);
          return new Promise((resolve, reject) => {
              superagent.put(`${API_BASE_URL}${endpoint}`)
                  .set(headers)
                  .send(requestBody)
                  // .withCredentials(true)
                  .then(res => resolve(responseBody(res)))
                  .catch(err => {
                      errHandler(err);
                      reject(err);
                  });
          })
      },
  
      patch: async (endpoint, requestBody, requestHeaders) => {
          let headers = await authHeader(requestHeaders);
          return new Promise((resolve, reject) => {
              superagent.patch(`${API_BASE_URL}${endpoint}`)
                  .set(headers)
                  .send(requestBody)
                  // .withCredentials(true)
                  .then(res => resolve(responseBody(res)))
                  .catch(errHandler)
          })
      },
  
      del: async endpoint => {
          let headers = await authHeader();
          return new Promise((resolve, reject) => {
              superagent.del(`${API_BASE_URL}${endpoint}`)
                  .set(headers)
                  // .withCredentials(true)
                  .then(res => resolve(responseBody(res)))
                  .catch(errHandler)
          })
      },
  
      file: async (endpoint, file) => {
          let headers = await authHeader();
          return new Promise((resolve, reject) => {
              superagent.post(`${API_BASE_URL}${endpoint}`)
                  .set(headers)
                  // .withCredentials(true)
                  .attach('file', file)
                  .then(res => resolve(responseBody(res)))
                  .catch(errHandler)
          })
      }
  
  }
  
  // External API
  export const customAPI = {
      get: (endpoint, query = {}) => {
          return superagent.get(endpoint)
              .query(query)
              .then(res => {
                  return res.body ? res.body : res;
              })
      }
  }
  
  export default API;