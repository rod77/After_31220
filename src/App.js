import React from 'react' 

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'; 

import './App.css'
import { RepasoHooks } from './components/RepasoHooks/RepasoHooks';

function App() {
  return (
    <>
            <Navbar />
            <ItemListContainer greetings="Bienvenidos al Ecommercer"/>
            {/* <RepasoHooks /> */}
    </>
  );
}

export default App;
