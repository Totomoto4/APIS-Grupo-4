
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Homepage from './pages/Homepage.jsx';
import Catalogo from './pages/Catalogo.jsx';
import Producto from './pages/Producto.jsx';
import AdminInterface from './pages/AdminInterface.jsx';
import { UserContext } from './context/UserContext.tsx';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store.jsx';

const router = createBrowserRouter([
  {
    path:'login',
    element: <Login/>
  },
  {
    path:'register',
    element: <Register/>
  },
  {
    path: 'administration',
    element: <AdminInterface/>
  },
  {
    path:'catalogo/',
    element: <Catalogo/>,
  },
  {
    path:'catalogo/categoria/:categoria',
    element: <Catalogo/>,
  },
  {
    path:'producto/:productoID',
    element: <Producto/>
  },
  {
    path: '/*',
    element: <Homepage/>
  }
])

function App() {
  const [user, setUser] = useState();

  function updateUser(newValue){
    setUser(newValue);
  }

  return (
    <Provider store={store}> 
      <UserContext.Provider value={{ user, updateUser }}>
        <RouterProvider router={router}>

        </RouterProvider>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
