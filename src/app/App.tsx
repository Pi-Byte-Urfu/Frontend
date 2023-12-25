
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Root from '../root/Root';
import router from '../router/router';


const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;