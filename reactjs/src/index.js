import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './scenes/store/index';
import { Provider } from 'react-redux';
import axios from 'axios';
import cookie from 'js-cookie'
import jwt, { decode } from 'jsonwebtoken'

const jwt_token = 'Fh8Jyvp4PJnma5r8Ck8KpmCPuJhN2YcDh4sLtaEpp7GJeCfKaQzFcByia0iUKfY0'

let token = cookie.get("token");

if(token){
  jwt.verify(token, jwt_token, (err, decoded) => {
    if(err) {
      cookie.remove("token");
      token = null;
    }else{
      if(decoded.iss !== 'http://localhost:8000/api/auth/login'){
        cookie.remove("token");
        token = null;
      }
    }
  });
}


const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if(token)
{
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  axios.post("http://localhost:8000/api/auth/me").then(res => {
    store.dispatch({type:"SET_LOGIN", payload: res.data})
    render();
  });
}else{
  render();
}




