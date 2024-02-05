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


import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
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
            <Route path='reviews' element={<Reviews />} />            
        </Route>    
      </Route>        
    </Routes>
  </BrowserRouter>
  );
}

export default App;

{/* <Route path='vans' >
<Route index element={<VansPage />} />
<Route path=':vanId' element={<VanDetail />} />
</Route>   */}