
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Layout from './Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';  
function App() {
  return (
    <div className="App">
      <ToastContainer />
        <Layout />
      <Footer />
    </div>
  );
}
export default App;
