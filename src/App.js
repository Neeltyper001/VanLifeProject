import IntroPage from './pages/IntroPage/IntroPage';
import AboutPage from './pages/AboutPage/AboutPage';
import VansPage from './pages/VansPage/VansPage';
import VanDetail from './pages/VanDetail/VanDetail';
import HomePage from './pages/homepage/HomePage';
import HostPage from './pages/hostpages/HostPage';
import Dashboard from './components/host-components/dashboard/dashboard';
import Income from './components/host-components/income/income';
import Reviews from './components/host-components/reviews/reviews';
import VanHost from './components/host-components/vans/VanHost';
import NestedHostVans from './Layouts/nested-host-vans/NestedHostVans';
import Details from './components/host-components/nestedVanComponents/details/details';
import Photos from './components/host-components/nestedVanComponents/photos/photos';
import Pricing from './components/host-components/nestedVanComponents/pricing/pricing';
import { SpeedInsights } from '@vercel/speed-insights/react';



import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <SpeedInsights />
    <BrowserRouter>      
    <Routes>
      <Route path='/' element={<IntroPage/>} > 
        <Route index element={<HomePage />}  />
        <Route path='about' element={<AboutPage/>} />
        <Route path='vans' element={<VansPage />}/>  
        <Route path='vans/:vanId' element={<VanDetail />} />
        <Route path='host' element={<HostPage />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />                               
            <Route path='vans' element={<VanHost />} />   
            {/* <Route path='vans/:vanId' element={<NestedHostVans />} />  */}
            <Route path='vans/:vanId' element={<NestedHostVans />} >
                <Route index element={<Details />} />                
                <Route path='pricing' element={<Pricing/>} />
                <Route path='photos' element={<Photos/>} />
            </Route>
            <Route path='reviews' element={<Reviews />} />            
        </Route>    
      </Route>        
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;

