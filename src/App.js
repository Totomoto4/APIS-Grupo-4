
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';
import { UserContext } from './context/UserContext.tsx';
import { useState } from 'react';

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

  const [user, setUser] = useState(undefined);

  function updateUser(newValue){
    setUser(newValue);
  }

  return (
    <UserContext.Provider value={{user, updateUser}}>
      <RouterProvider router={router}/>
    </UserContext.Provider>
    
  );
}

export default App;
