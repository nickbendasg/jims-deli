=== File: src/App.js ===
=== Content ===
import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Board from './pages/board/Board';
import Press from './pages/printing/Press';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import NotFound from './pages/notfound/NotFound';
import Settings from './pages/settings/Settings';
import Slide from './pages/slide/Slide';
// import Navbar from './components/navbar/Navbar';
// import Footer from './components/footer/Footer';
import Leftbar from './components/global/Leftbar';
import Rightbar from './components/global/Rightbar';
import { useEffect } from 'react';

function App() {
  const { user, authIsReady } = useAuthContext();


  const { pathname } = useLocation();

  console.log('pathname', pathname);

  const pathAr = pathname.split('/').slice(1,pathname.length);
  var pathBool = false;
  if(pathAr[0] == 'board' && pathAr[1] !== undefined){
    pathBool = true;
  };
  if(pathAr[0] == 'slide'){
    pathBool = true;
  }

  if(pathAr[0] == undefined){
    pathBool = true;
  };


  useEffect(() => {

  }, [pathname]);

  return (
    <div className="app">
      {authIsReady && (
          <>
            {user && <Leftbar hide={pathBool} />}
            <div className='mainbody'>
              <Routes>
                <Route
                  path="/"
                  element={true ? <Home /> : <Home />}
                />
                <Route
                  path="/menu/:type"
                  element={user ? <Menu /> : <NotFound />}
                />
                <Route
                  path="/menu"
                  element={user ? <Menu /> : <NotFound />}
                />
                <Route
                  path="/printingpress"
                  element={user ? <Press /> : <NotFound />}
                />
                <Route
                  path="/printingpress/:type"
                  element={user ? <Press /> : <NotFound />}
                />
                <Route
                  path="/board"
                  element={user ? <Board /> : <NotFound />}
                />
                <Route
                  path="/board/:type"
                  element={user ? <Board /> : <NotFound />}
                />
                <Route
                  path="/dashboard"
                  element={user ? <Dashboard /> : <NotFound />}
                />
                <Route
                  path="/login"
                  element={!user ? <Login /> : <Navigate to="/" /> }
                />
                <Route
                  path="/signup"
                  element={!user ? <Signup /> : <Navigate to="/" /> }
                />
                <Route
                  path="/slide"
                  element={user ? <Slide /> : <Slide /> }
                />
                <Route
                  path="/settings"
                  element={user ? <Settings /> : <Navigate to="/" /> }
                />

                <Route path='*' element={<NotFound />} />
              </Routes>

            </div>
            {user && <Rightbar hide={pathBool} />}
            {/* <Footer /> */}
          </>
      )}
    </div>
  );
}

export default App;

=== End of src/App.js ===

