
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function About() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>this is a react project just for demonstration</p>
        <Link exact to='/'>Go back to home</Link>
      </div>
    </Card>
  )
}

export default About
