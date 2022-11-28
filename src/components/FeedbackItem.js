import PropTypes from 'prop-types'
import Card from "./shared/Card"
import { FaTimes } from 'react-icons/fa'


function FeedbackItem({item, handleDelete}) {

  // const handleClick = () => {
    
  // }

  return (
    <Card>
    <div>
        <div className='num-display'>{item.rating}</div>
        <button onClick={ () => handleDelete(item.id)} className='close'>
          <FaTimes color='purple'/>
        </button>
        <div className='text-display'>{item.text}</div>
    </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}
export default FeedbackItem