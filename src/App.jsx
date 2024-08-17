import { Suspense, lazy } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Sekletonlayout from './Components/Sekletonlayout';
import Login from './Singupandlogin/Login';
import Speeddial from './Components/Speeddial';

// Lazy load components
const Analytics = lazy(() => import("./Pages/Analytics"));
const Home = lazy(() => import("./Pages/Home"));
const Setting = lazy(() => import('./Pages/Setting'));
const Product = lazy(() => import('./Pages/Product'));
const Profile = lazy(() => import('./Pages/Profile'));

const App = () => {
  const { isAuthenticated, loginWithRedirect, isLoading, user, logout } = useAuth0();
  if (isLoading) {
    return (
      <Sekletonlayout />
    );
  }

  return (
    <>
      {!isAuthenticated ? (
        (<Login loginfun={loginWithRedirect} />)
      ) :
        <>
          <HashRouter>
            <Suspense fallback={<Sekletonlayout />}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/analytics" element={<Analytics />} />
                <Route exact path='/product' element={<Product />} />
                <Route exact path="/setting" element={<Setting />} />
                <Route exact path="/profile" element={<Profile isauth={isAuthenticated} user={user} logout={logout} />} />
              </Routes>
            </Suspense>
          </HashRouter>
          <Speeddial />
        </>

      }
    </>
  );
};

export default App;
