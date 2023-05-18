
import './App.css';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainBody from './components/MainBody';
import Electronics from './components/Electronics';

function App() {
  return (
      <>
      <MainBody/>
      <RouterProvider router={appRouter}/>
       
      </>
  );
}

const appRouter= createBrowserRouter([{
  path:'/',
  element:<MainBody/>,
  children:[
    {
      path:'/electronics',
      element:<Electronics/>
    }
  ]
}
])

export default App;
