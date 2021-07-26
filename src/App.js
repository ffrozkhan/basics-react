import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import LearningCss from "./Components/LearningCss";
import SecondFile from "./Components/SecondFile";
import Thirdfile from "./Components/Thirdfile";
import Landing from "./Components/Landing/Landing";
import { Button, Carousel } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <Button variant="info"> Button </Button>



      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
      <Landing/>
      <Header />
      <LearningCss />
      <SecondFile />
      <Thirdfile />
    </div>
  );
}

export default App;
