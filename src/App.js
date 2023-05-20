
import './App.css';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainBody from './components/MainBody';
import Electronics from './components/Electronics';
import Header from './components/Header';
import Footer from './components/Footer';
import SingleProductPage from './components/SingleProductPage';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
      <>
      <Header/>
      <RouterProvider router={appRouter}/>
      <Footer/>
      </>
  );
}

const appRouter= createBrowserRouter([
  {
  path:'/',
  element:<MainBody/>
  },
  {
    path:'/electronics',
    element:<Electronics/>
  },
  {
    path:'/singleproductpage',
    element:<SingleProductPage/>
  },
  {
    path:'*',
    element:<ErrorPage/>
  }
]
)

export default App;
