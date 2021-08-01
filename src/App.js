import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserContextProvider } from './contexts/UserContext'
import { CartContextProvider } from './contexts/CartContext'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import DetailProduct from './pages/DetailProduct/DetailProduct'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'

const App = () => {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/product/:id'>
              <DetailProduct />
            </Route>
            <Route exact path='/carts'>
              <Cart />
            </Route>
            <Route exact path='/checkout'>
              <Checkout />
            </Route>
          </Switch>
        </Router>
      </CartContextProvider>
    </UserContextProvider>
  )
}

export default App
