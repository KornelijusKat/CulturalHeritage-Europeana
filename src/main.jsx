import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/App'
import { AppProvicer } from './searchContext'
import {BrowserRouter as Router} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvicer>
      <Router>
        <App/>
      </Router>
    </AppProvicer>
  </StrictMode>,
)
