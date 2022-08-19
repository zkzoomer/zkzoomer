import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

import App from './pages/App';
import store from './state';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
