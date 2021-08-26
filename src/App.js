import logo from './logo.svg';

import './Styles.css';
import photo from './photo.jpg'
import vid from './video.mp4'


function App() {
  return (
    <div className="App">
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">chocolate</h1>
   <div className='photo' >
    <img    src={photo} alt="" />
  <img src="https://www.verywellhealth.com/thmb/EUeUAXbukeJ0K8QTfkwECDpwLDw=/2496x1664/filters:fill(87E3EF,1)/chocolate-allergy-does-it-exist-1323991-primary-recirc-b157f73ccab54ee59b171a19f1d4a438.jpg" alt="" />
    </div>
  </div>
  <video className='video' width={320} height={240} controls>
    <source src={vid} type="video/mp4" />
  </video>
    </div>
  );
}

export default App;