import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback, handleDelete}) {
  if (!feedback || feedback.length===0){
    return <h3>No feedback yet!</h3>
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem 
          key={item.id} 
          item={item} 
          handleDelete = {handleDelete}
        />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}
export default FeedbackList