import './App.css';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';


function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
    <Header text = "Feedback UI" />
    <div className='container'>
      <FeedbackList feedback={feedback} />
    </div>
    </>
  );
}

export default App;
