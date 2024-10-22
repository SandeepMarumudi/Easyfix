import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navigations from './navigation/navigation_stack.jsx'
import { Provider } from 'react-redux'
import { reduxstore } from './redux/store.js'





createRoot(document.getElementById('root')).render(
  <Provider store={reduxstore}>
  <BrowserRouter>
  <StrictMode>
    {/* <App /> */}
    <Navigations/>
  </StrictMode>,
  </BrowserRouter>
  </Provider>
)
