import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
// import  {bg} from "reactstrap"
import HeroSection from './Pages/HeroSection/HeroSectionComponent'
import AboutMeComponent from './Pages/AboutMeSection/AboutMeComponent';
import SkillsComponent from './Pages/SkillsSection/SkillsComponent';
import ProtfolioSectionComponent from './Pages/ProtfolioSection/ProtfolioSectionComponent';
import FooterSectionComponent from './Pages/FooterSection/FooterSectionComponent';
// import { Container } from 'reactstrap';

function App() {
  return (
    <>
     <HeroSection/>
      <AboutMeComponent/>
      <SkillsComponent/>
      <ProtfolioSectionComponent/>
      <FooterSectionComponent/>
   </>
  
  );
}

export default App;
