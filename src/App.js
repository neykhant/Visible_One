import './App.css';
import HeaderNav from './pages/Header/HeaderNav';
import HeaderBody from './pages/Header/HeaderBody';
import HeaderFooter from './pages/Header/HeaderFooter';
import BodyCase from './pages/body/BodyCase';
import BFooter from './pages/body/BFooter';
import BodyFooter from './pages/body/BodyFooter';
import ScrollToTop from './pages/body/ScrollToTop';


function App() {

  return (
    <div className="App">
      <ScrollToTop/>
      <HeaderNav />
      <HeaderBody />
      <HeaderFooter />
      <BodyCase />
      <BFooter/>
      <BodyFooter/>
    </div>
  );
}

export default App;
