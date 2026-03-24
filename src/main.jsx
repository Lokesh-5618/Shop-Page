import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from './Homepage.jsx';
import Shoppage from './Shoppage.jsx';
import Cartcardcontainer from './Cartcardcontainer.jsx';
import { CartProvider } from './CartContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>
  },
  {
    path: "shop",
    element: <Shoppage></Shoppage>
  }, {
    path: "cart",
    element: <Cartcardcontainer></Cartcardcontainer>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
