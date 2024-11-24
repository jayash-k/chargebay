import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// Use this ↑ for deploying on AWS (uncomment)
// import { HashRouter as Router, Route ,Routes } from 'react-router-dom';
// Use this ↑ for deploying on GitHuB (uncomment)
import './App.css';
import HomePage from './Pages/chargebayHome';
import MultiFamilyHostPage from './Pages/MultiFamilyHostPage';
import UnderConstructionPage from './Pages/UnderConstructionPage';
import DriversPage from './Pages/DriversPage';
import GetInTouch from './Pages/ContactPage';
import ResellerPage from './Pages/ResellerPage';
import BussinessModelPage from './Pages/BussinessModelPage';
import CommercialHostPage from './Pages/CommercialHostPage';
import QAPage from './Pages/QAPage';
import ProductsPage from './Pages/ProductsPage';
import PrivacyPolicy from './Pages/PrivacyPolicyPage';
import TermsConditions from './Pages/TermsConditionsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/underconstruction' element={<UnderConstructionPage />} />
        <Route path='*' element={<UnderConstructionPage/>}/>  
        <Route path='/home' element={<HomePage />} />
        <Route path='/host-multifamily' element={<MultiFamilyHostPage />} />
        <Route path='/drivers' element={<DriversPage />} />
        <Route path='/contact-us' element={<GetInTouch />} />
        <Route path='/reseller' element={<ResellerPage/>}/>
        <Route path='/bussiness-model' element={<BussinessModelPage/>}/>
        <Route path='/host-commercial' element={<CommercialHostPage/>}/>
        <Route path='/Q&A' element={<QAPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>

        <Route path='/privacy-policy' element={<PrivacyPolicy/>}></Route>
        <Route path='/T&C' element={<TermsConditions/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
