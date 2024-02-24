import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Layout from './Component/Layout';
import Home from './Component/Home';
import About from './Component/About';
import Van from './Component/Van';
import VanDetail from './Component/VanDetail';
import Dashboard from './Component/Host/Dashboard';
import Income from './Component/Host/Income';
import Reviews from './Component/Host/Reviews';
import Hostvans from './Component/Host/Hostvans';
import HostvansDetails from './Component/Host/HostvansDetails';
import HostLayout from './Component/Host/HostLayout';
import Details from './Component/Host/HostDetails/Details';
import Pricing from './Component/Host/HostDetails/Pricing';
import Photo from './Component/Host/HostDetails/Photo';
import Notfound from './Component/Notfound';
import Login from './Component/Login';
import AuthRequired from './AuthRequired';

function App(){
  return(
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='about' element={<About />}/>
      
      <Route path='vans'>
      <Route index element={<Van />}/>
      <Route path=':id' element={<VanDetail />}/>
      </Route>
      <Route path='login'element={<Login />}/>
      <Route  element={<AuthRequired/>}>
      <Route path='Host' element={<HostLayout />}>
        <Route index element={<Dashboard/>}/>
      <Route path='Income' element={<Income />}/>
      <Route path='Reviews' element={<Reviews />}/>
      <Route path='vans' element={<Hostvans />}/>
      <Route path='vans/:id' element={<HostvansDetails />}>
        <Route index element={<Details/>} />
        <Route path='pricing' element={<Pricing/>} />
        <Route path='Photo' element={<Photo/>} />
        </Route>
      </Route>
      </Route>
      <Route path='*' element={<Notfound />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App