import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './context';
import { UserContextProvider } from './context/userContext';
import { LayoutContextProvider } from './context/layoutContext';
import './assets/styles/index.css';
import actionCable from 'actioncable';
import { APP_CABLE_URL } from './constants';
import rootReducer from './reducer/rootReducer';
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


const CableApp = {};
CableApp.cable = actionCable.createConsumer(APP_CABLE_URL);


const root = ReactDOM.createRoot(document.getElementById('root'));
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(applyMiddleware(thunk));
const store = createStore(rootReducer, composedEnhancers);


root.render(
  <React.StrictMode>
     <Provider store={store}>
    <UserContextProvider>
     <ThemeContextProvider>
       <LayoutContextProvider>
       <App cableApp={CableApp}/>
      </LayoutContextProvider>
    </ThemeContextProvider>
    </UserContextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
