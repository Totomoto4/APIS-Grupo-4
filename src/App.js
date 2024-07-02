
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Homepage from './pages/Homepage.jsx';
import Catalogo from './pages/Catalogo.jsx';
import Producto from './pages/Producto.jsx';
import AdminInterface from './pages/AdminInterface.jsx';
import { Provider } from 'react-redux';
import store from './store.jsx';
import NewProd from './components/NewProd.jsx';

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
    path: 'newProduct',
    element: <NewProd/>,
  },
  {
    path: '/*',
    element: <Homepage/>
  }
])

function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  );
}

export default App;
