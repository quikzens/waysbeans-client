import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserContextProvider } from './contexts/UserContext'
import { CartContextProvider } from './contexts/CartContext'
import UserRoute from './routes/UserRoute'
import AdminRoute from './routes/AdminRoute'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import DetailProduct from './pages/DetailProduct/DetailProduct'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Profile from './pages/Profile/Profile'
import Admin from './pages/Admin/Admin'
import AddProduct from './pages/AddProduct/AddProduct'

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
            <UserRoute exact path='/carts' component={Cart} />
            <UserRoute exact path='/checkout' component={Checkout} />
            <UserRoute exact path='/profile' component={Profile} />
            <Route exact path='/admin'>
              <Admin />
            </Route>
            <AdminRoute exact path='/addproduct' component={AddProduct} />
          </Switch>
        </Router>
      </CartContextProvider>
    </UserContextProvider>
  )
}

export default App
