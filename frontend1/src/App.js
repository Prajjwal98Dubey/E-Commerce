
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainBody from './components/MainBody';
import Electronics from './components/Electronics';
import SinglePageProduct2 from './components/SinglePageProduct2';
import ErrorPage from './components/ErrorPage';
import MenWear from './components/MenWear';
import WomenWear from './components/WomenWear';
import ChildWear from './components/ChildWear';
import Decorations from './components/Decorations';
import Beauty from './components/Beauty';
import SportsEquipment from './components/SportsEquipment';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Carrer from './components/Carrer';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import AddToCart from './components/AddToCart';
import BuyProduct from './components/BuyProduct';
import Search from './components/Search';
import PayOut from './components/PayOut';
import CheckOutPage from './components/CheckOutPage';

function App() {
  return (
    <>
    <RouterProvider router={appRouter} />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainBody />
  },
  {
    path: '/singleproductpage',
    element: <SinglePageProduct2/>
  },
  {
    path: '/electronics',
    element: <Electronics />
  },
  {
    path: '/mens-wear',
    element: <MenWear />
  },
  {
    path: '/women-wear',
    element: <WomenWear />
  },
  {
    path: '/child-wear',
    element: <ChildWear />
  },
  {
    path: '/decorations',
    element: <Decorations />
  },
  {
    path: '/beauty',
    element: <Beauty />
  },
  {
    path: '/sports-equipment',
    element: <SportsEquipment />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
  ,{
    path:'/home',
    element:<MainBody/>
  },
  {
    path:'/about-us',
    element:<AboutUs/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/carrer',
    element:<Carrer/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  {
    path:'/addtocart',
    element:<AddToCart/>
  },
  {
    path:'/buy',
    element:<BuyProduct/>
  },
  {
    path:'/search',
    element:<Search/>
  },
  {
    path:'/payout',
    element:<PayOut/>
  },
  {
    path:'/checkout',
    element:<CheckOutPage/>
  }
]
)

export default App;
