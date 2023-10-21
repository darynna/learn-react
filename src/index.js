import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import './index.css';
import {App} from './components/App'
// import {DetailsContextProvider } from 'components/Context/Details.context';

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <DetailsContextProvider>
// <App /></DetailsContextProvider>
// );
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Provider store={store}>
  {/* <PersistGate persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
</BrowserRouter>
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// // import { ThemeProvider } from 'styled-components';
// // import { GlobalStyle } from 'components/GlobalStyle';
// import { Reader } from 'components/Reader/Reader';
// import publications from './publications.json';
// import './index.css';
// import { Example1 } from 'components/Example1';

// const theme = {};

// ReactDOM.render(
// //   <React.StrictMode>
// //     <ThemeProvider theme={theme}>
// //       <GlobalStyle />
// //       <Reader items={publications} />
// //     </ThemeProvider>
// //   </React.StrictMode>,
// {/* <Reader items={publications}/>, */}
// <
//   document.getElementById('root')
// );