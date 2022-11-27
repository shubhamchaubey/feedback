import './App.css';
import { useState } from 'react';
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure that you want to delete it?')){
      setFeedback(feedback.filter((item)=>item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  } 
  return (
    <>
    <Header text = "Feedback UI" />
    <div className='container'>
      <FeedbackForm handleAdd={addFeedback}/>
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
    </>
  );
}

export default App;
