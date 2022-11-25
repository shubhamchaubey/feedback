import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback}) {
  if (!feedback || feedback.length===0){
    return <h3>No feedback yet!</h3>
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem 
          key={item.id} 
          item={item} 
          handleDelete = {(id) => {
            console.log(id)
        }}/>
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}
export default FeedbackList