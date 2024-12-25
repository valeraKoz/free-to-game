import { createRoot } from 'react-dom/client'
import './index.css'
import './output.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router";
import {Provider} from "react-redux";
import {persistor, store} from './store';
import {PersistGate} from "redux-persist/integration/react";

createRoot(document.getElementById('root')).render(
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <BrowserRouter basename={import.meta.env.BASE_URL}>
                  <App />
              </BrowserRouter>
          </PersistGate>
      </Provider>

)
