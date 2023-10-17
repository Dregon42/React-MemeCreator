import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './input.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-l533zzaw0trbepod.us.auth0.com"
      clientId="GitLc8NByApAQJOhh6iFVMTsKI7Z3K43"
      authorizationParams={{
        redirect_uri: 'http://localhost:5173/meme'
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
