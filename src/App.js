import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserContextProvider } from './contexts/UserContext'
import { CartContextProvider } from './contexts/CartContext'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import DetailProduct from './pages/DetailProduct/DetailProduct'

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
          </Switch>
        </Router>
      </CartContextProvider>
    </UserContextProvider>
  )
}

export default App
