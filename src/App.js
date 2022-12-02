
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar1 from './Components/Navbar/Navbar1';
import Body from './Components/Body/Body';
import Body2 from './Components/Body2/Body2';
import Body3 from './Components/Body3/Body3';
import Body4 from './Components/Body4/Body4';
import Body5 from './Components/Body5/Body5';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar1/> 
     <Banner/>
      <Body/> 
      <Body2/>
      <Body3/>
      <Body4/>
      <Body5/>
      <Footer/>
    </div>
  );
}

export default App;
