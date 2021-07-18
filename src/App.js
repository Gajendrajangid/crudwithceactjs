 
import React from 'react'; 
import { ToastContainer } from 'react-toastify'; 
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Layout from './Layout/Layout'
function App() {
  return (
    <div className="App">
       <ToastContainer /> 
       <Header/>
       <Layout/>
       <Footer/>
    </div>
  );
}

export default App;
