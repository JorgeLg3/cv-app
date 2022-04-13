import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
if(module.hot){
  module.hot.accept('./App', () => {
    ReactDOM.render(<App/>,document.getElementById('root'))
  });
}
