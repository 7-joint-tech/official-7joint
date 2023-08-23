import React from 'react';
import All from './Header/All';
import Team from '../Pages/Team';
import Contact from '../Pages/Contact';
import Portfolio from '../Pages/Portfolio';
import Services from '../Pages/Services';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./Layout";
import BTT from "./BackTotop";

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
        
     </Layout>
     
     <BTT />   
    </BrowserRouter>
  );
};

export default App;








