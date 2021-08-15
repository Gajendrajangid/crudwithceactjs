import  React from 'react';  
import  Home from './Home';  
import  About from './About';  
import  Contact from './Contact';  
import  AddPlayer from './Player/AddPlayer';  
import  PlayerList from './Player/PlayerList';  
import  PageNotFound from './PageNotFound';  
const routes = [  
    { path: '/Home',exact: true,  component: Home },  
    { path: '/About',exact: true,  component: About},  
    { path: '/Contact', exact: true,  component: Contact},
    { path: '/playerlist', exact: true,  component: PlayerList },  
    { path: '/addPlayer', exact: true,  component: AddPlayer},  
    { path: '/addPlayer/:id', exact: true,  component: AddPlayer}, 
    { path: '',exact: true,  component: Home},  
    { component:PageNotFound }
];  
  
export default routes;  
