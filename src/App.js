import './App.css';
import Navbar from './components/Navbar/Navbar'
import DSA from './components/DataStructures/DSA'
import Footer from './components/Footer/Footer'

// Admin panel
import Admin from './Admin-panel/Admin'


// Imported Data Structures topics
import Arrays from './components/DataStructures/Topics/Arrays'
import LinkedList from './components/DataStructures/Topics/LinkedList'
import StackQueue from './components/DataStructures/Topics/StackQueue'
import Strings from './components/DataStructures/Topics/Strings'
import BinaryTree from './components/DataStructures/Topics/BinaryTree'
import BinarySearchTree from './components/DataStructures/Topics/BinarySearchTree'
import HashMap from './components/DataStructures/Topics/HashMap'
import Heap from './components/DataStructures/Topics/Heap'
import Recursion from './components/DataStructures/Topics/Recursion'
import BackTracking from './components/DataStructures/Topics/BackTracking'
import Graph from './components/DataStructures/Topics/Graph'
import DynamicProgramming from './components/DataStructures/Topics/DynamicProgramming'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {

  document.title = "Back 2 Community";

  return (
    <div className="App">
      <Router>
        {/* Navigation bar */}
        <Navbar></Navbar>

        
        <Switch>
          {/* Admin */}
        <Route path= '/Admin' exact component={Admin}/>
          {/* Data Structure topics Routing*/}
        <Route path= '/Arrays' exact component={Arrays}/>
        <Route path= '/Linked-List' exact component={LinkedList}/>
        <Route path= '/Stack&Queues' exact component={StackQueue}/>
        <Route path= '/String' exact component={Strings}/>
        <Route path= '/Binary-Tree' exact component={BinaryTree}/>
        <Route path= '/Binary-Search-Tree' exact component={BinarySearchTree}/>
        <Route path= '/HashMap' exact component={HashMap}/>
        <Route path= '/Heap' exact component={Heap}/>
        <Route path= '/Recursion' exact component={Recursion}/>
        <Route path= '/Backtracking' exact component={BackTracking}/>
        <Route path= '/Graph' exact component={Graph}/>
        <Route path= '/Dynamic-programming' exact component={DynamicProgramming}/>

        {/* Main DSA list */}
        <Route path= '' exact component={DSA}/>
          
        </Switch>
        
        {/* Footer  */}
        <Footer></Footer>
      </Router>
      

    </div>
    
    
  );
}

export default App;
