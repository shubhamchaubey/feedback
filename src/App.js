import './App.css';
import FeedbackList from './components/FeedbackList'
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
  
  return (
    <FeedbackProvider>
    <Router>
    <Header text = "Feedback App" />
    <div className='container'>
      <Routes>
      <Route exact path='/' 
        element={
        <>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
        </>
      }>
      
      </Route>
      <Route path="/about" element={<About/>}/>
      </Routes>
      
    </div>
    <AboutIconLink />
    </Router>
    </FeedbackProvider>
  );
}

export default App;
