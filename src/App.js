
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Homepage from './pages/Homepage.jsx';
import Catalogo from './pages/Catalogo.jsx';
import Producto from './pages/Producto.jsx';
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
    path:'catalogo/',
    element: <Catalogo/>,
  },
  {
    path:'catalogo/:categoria',
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

  const [user, setUser] = useState(undefined);

  function updateUser(newValue){
    setUser(newValue);
  }

  return (
    <Provider store={store}> 
      <UserContext.Provider value={{ user, updateUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </Provider>
    
  );
}

export default App;
