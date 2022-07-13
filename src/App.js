import Navbar from "./component/Navbar";
import About from "./component/About";
import Carousel  from "./component/Carousel";
import PizzaType from "./component/PizzaType";
import Footer from "./component/Footer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Carousel />
      <About />
      <PizzaType />
      <Footer/>  
 </div>
  
  );
}

export default App;
