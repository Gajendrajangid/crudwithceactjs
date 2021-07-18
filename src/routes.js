import  React from 'react';  
import  Home from './Home';  
import  About from './About';  
import  Contact from './Contact';  
import  AddStudent from './Student/AddStudent';  
import  StudentList from './Student/StudentList';  
import  PageNotFound from './PageNotFound';  
const routes = [  
    { path: '/Home',exact: true,  component: Home },  
    { path: '/About',exact: true,  component: About},  
    { path: '/Contact', exact: true,  component: Contact},
    { path: '/studentlist', exact: true,  component: StudentList },  
    { path: '/addstudent', exact: true,  component: AddStudent},  
    { path: '/addstudent/:id', exact: true,  component: AddStudent}, 
    { path: '',exact: true,  component: Home},  
    { component:PageNotFound }
];  
  
export default routes;  
