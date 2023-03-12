// import logo from './logo.svg';
import './App.css';
import HeaderNav from './pages/Header/HeaderNav';
import HeaderBody from './pages/Header/HeaderBody';
import HeaderFooter from './pages/Header/HeaderFooter';
import BodyCase from './pages/body/BodyCase';
import BFooter from './pages/body/BFooter';
import BodyFooter from './pages/body/BodyFooter';
import Style from "../src/pages/Header/Style.module.css"


function App() {
  const button = document.querySelector('.btn');

const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = (event) => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
    console.log(event);
  });
};

displayButton();
scrollToTop();


  return (
    <div className="App">
      <HeaderNav />
      <HeaderBody />
      <HeaderFooter />
      <BodyCase />
      <BFooter/>
      <BodyFooter/>
      <button className={Style.btn}>top</button>
    </div>
  );
}

export default App;
