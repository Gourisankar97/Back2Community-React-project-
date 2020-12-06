import './App.css';
import Navbar from './components/Navbar/Navbar'
import DSA from './components/DataStructures/DSA'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <div className="DSA">
          <DSA></DSA>
      </div> */}
      <DSA></DSA>

      <Footer></Footer>

    </div>
    
    
  );
}

export default App;
