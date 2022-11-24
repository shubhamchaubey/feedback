import Card from "./shared/Card"


function FeedbackItem({item}) {
  return (
    <Card>
    <div>
        <div className='num-display'>{item.rating}</div>
        <div className='text-display'>{item.text}</div>
    </div>
    </Card>
  )
}
export default FeedbackItem