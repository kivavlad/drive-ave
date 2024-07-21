import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './app';
import store from "./store";
import "./styles/reset.css";
import "./styles/normalize.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App/>
  </Provider>
)
