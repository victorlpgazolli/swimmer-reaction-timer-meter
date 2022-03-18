import './App.css';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { Toaster } from 'react-hot-toast';
import Router from 'Router';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  html, body, #root {
    height: 100%;
  }
`
function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Router />
    </>
  );
}

export default App;
