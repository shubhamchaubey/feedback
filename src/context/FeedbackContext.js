import { createContext, useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

        const deleteFeedback = (id) => {
        if(window.confirm('Are you sure that you want to delete it?')){
          setFeedback(feedback.filter((item)=>item.id !== id))
        }
      }

      useEffect(()=> {
        fetchFeedback()
      }, []) 

      //Fetch feedback

      const fetchFeedback = async() =>{
        const response = await fetch(`http://localhost:5000/feedback`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
      }

      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      } 

      
    return <FeedbackContext.Provider value = {{
        feedback,
        isLoading,
        deleteFeedback,
        addFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext