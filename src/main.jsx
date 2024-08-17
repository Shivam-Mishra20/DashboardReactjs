
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { ToggleTheme } from './Context/Dark&LightMode.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-dovz5dcjxvuendud.us.auth0.com"
    clientId="y5azTYLG9W5TAb6ogOfN3jnfQgDGwHzA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ToggleTheme>

      <App />



    </ToggleTheme>


  </Auth0Provider>
)
