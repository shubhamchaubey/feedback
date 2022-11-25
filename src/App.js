import './App.css';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';


function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure that you want to delete it?')){
      setFeedback(feedback.filter((item)=>item.id !== id))
    }
    
  }
  return (
    <>
    <Header text = "Feedback UI" />
    <div className='container'>
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
    </>
  );
}

export default App;
