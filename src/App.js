import React from 'react';
import { Router, Switch, Route, Link } from 'wouter';
import Home from './pages/Home';
import SettingsPages from './pages/Settings';
import PageNotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';



 


function App() {
  return (
    <Router>
      <Switch>
            {/* Ruta a Home protegida */}
            <Route path='/home'>
                <ProtectedRoute>
                    <Home/>
                </ProtectedRoute>
            </Route>
            {/* Ruta a Settings protegida */}
            <Route path='/settings'>
                <ProtectedRoute>
                    <SettingsPages/>
                </ProtectedRoute>
            </Route>
            {/* Ruta a Home protegida */}
            <Route path='/'>
                <ProtectedRoute>
                    <Home/>
                </ProtectedRoute>
            </Route>
            {/* Ruta para iniciar sesión */}
            <Route path='/login'>
                <Login/>
            </Route>
            {/* Ruta por default en caso de ingresar a una liga inexistente */}
            <Route component={PageNotFound}/>
      </Switch>
  </Router>
  );
}

export default App;


 


