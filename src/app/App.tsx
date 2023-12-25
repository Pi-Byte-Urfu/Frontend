
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import TodoPage from '../example/TodoPage';
import IndexPage from '../example/IndexPage';
import { Link } from 'react-router-dom';
import UsersPage from '../example/UsersPage';
import UserItemPage from '../example/UserItemPage';
import Root from '../root/Root';
import router from '../router/router';


const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;