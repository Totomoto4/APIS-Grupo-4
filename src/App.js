
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <Homepage/>
  },
  {
    path:'login',
    element: <Login/>
  },
  {
    path:'register',
    element: <Register/>
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
