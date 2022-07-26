// Importing packages
import React, {useEffect, useReducer} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// Import components
import AgeVerification from './components/AgeVerification'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import UserProfile from './components/UserProfile'
import SignUp from './components/SignUpForm'
import LogIn from './components/LogInForm'
import Navigation from './components/Navigation'
import About from './components/About'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

// Import Data
import initialProductList from './data/product-list.json'

// Import reducer
import reducer from './utils/reducer'

// Import state context
import {StateContext} from './utils/stateContext'

const App = () => {
  // Set initial states
  const initialState = {
    loggedInUser: "",
    ageVerification: ""
  }

  // Initialising the reducer
  const [store, dispatch] = useReducer(reducer, initialState)

  // Unpacking the store
  const {loggedInUser, ageVerification} = store

  // Initialising the data which must be present on load
  useEffect(() => {
    dispatch({
      type: 'setProductList',
      data: initialProductList
    })
  },[])

  return (
    <div >      
        <StateContext.Provider value={{store,dispatch}}>          
          <Router>
            <Navigation />            
            <Routes>
              {/* Age verification loads initially, if this is true then homepage loads */}
              {/* <Route path='/' element={
                !ageVerification ?                
                  <AgeVerification />
                :
                  <Home />
              }/> */}

              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={<LogIn />} />
              
              <Route path='/products' element={<Products />} />
              <Route path='/products/:id' element={<ProductDetails />} />
              <Route path='/user' element={<UserProfile />} />
              <Route path="/about" element={<About />} />
              {/* Use the '*' to redirect all other routes to the NotFound component */}
              <Route path="*" element={<NotFound />} />
              
            </Routes>
            <Footer />
          </Router>
        </StateContext.Provider>
    </div>
  )
}

export default App
