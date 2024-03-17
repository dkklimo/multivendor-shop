// import React, { useEffect } from 'react'
// import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import {LoginPage,SignupPage,ActivationPage,HomePage,ProductsPage,BestSellingPage,EventsPage,FAQPage,ProductDetailsPage} from './Routes.js'
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Store from './redux/store.js';
// import { loadUser } from './redux/actions/user.js';

// const App = () => {

//   useEffect(()=>{
//     Store.dispatch(loadUser());
//   },[])
//   return (
//     <BrowserRouter>
//       <Routes>
//       <Route path='/' element= {<HomePage/>}/>
//         <Route path='/login' element= {<LoginPage/>}/>
//         <Route path='/sign-up' element= {<SignupPage/>}/>
//         <Route path='/products' element={<ProductsPage/>}/>
//         <Route path='/best-selling' element={<BestSellingPage/>}/>
//         <Route path='/product/:name' element={<ProductDetailsPage/>}/>
//         <Route path='/events' element={<EventsPage/>}/>
//         <Route path='/faq' element={<FAQPage/>}/>
//         <Route
//           path="/activation/:activation_token"
//           element={<ActivationPage />}
//         />
        
//       </Routes>
//       <ToastContainer
//         position="bottom-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//         />
//     </BrowserRouter>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, SignupPage, ActivationPage, HomePage, ProductsPage, BestSellingPage, EventsPage, FAQPage, ProductDetailsPage,CheckoutPage,ProfilePage } from './Routes.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from './redux/store.js';
import { loadUser } from './redux/actions/user.js';
import Loader from './components/Loader/Loader.jsx'; // Import the Loader component

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Store.dispatch(loadUser())
      .finally(() => setIsLoading(false)); // Mark loading as complete after loadUser finishes
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Loader /> // Show the loader if isLoading is true
      ) : (
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignupPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/best-selling' element={<BestSellingPage />} />
          <Route path='/product/:name' element={<ProductDetailsPage />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
        </Routes>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
