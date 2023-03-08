
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";



function App() {
  return (
    
    <div className="App">
      <Router>
<NavBar/>

<Routes>
          <Route exact path="/science" element={<News key='science' pageSize={6} country='us' category='science'/>}/>
          <Route exact path="/business" element={<News key='business' pageSize={6} country='us' category='business'/>}/>
          <Route exact path="/" element={<News key='general' pageSize={6} country='us' category='general'/>}/>
          <Route exact path="/technology" element={<News key='technology' pageSize={6} country='us' category='technology'/>}/>
          <Route exact path="/entertainment" element={<News key='entertainment' pageSize={6} country='us' category='entertainment'/>}/>
          <Route exact path="/sports" element={<News key='sports' pageSize={6} country='us' category='sports'/>}/>
          <Route exact path="/general" element={<News key='general' pageSize={6} country='us' category='general'/>}/>
          <Route exact path="/science" element={<News key='science' pageSize={6} country='us' category='science'/>}/>
          
                 </Routes>
        </Router>
    </div>
    
  );
}

export default App;
