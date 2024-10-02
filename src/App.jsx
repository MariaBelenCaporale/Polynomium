import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/homeScreen/HomeScreen';
import NavBar from './components/Navbar/NavBar';




function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />

      </Routes>
    </Router>
  );
}

export default App;

