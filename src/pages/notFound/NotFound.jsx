import {Link} from 'react-router-dom';
import './notFound.css';
import NotFoundImg from '../../images/notfound-fitness.svg';

const NotFound = () => {
  return (
    <>
    <section className='notfound'>
      <div className="container notfound_container">
        <div className='notfound-image'>
          
          <img src={NotFoundImg} alt='notfound-fitness'/>
        </div>
        <h2 className='notfound-title'>Page Not Found</h2>
        <Link to="/" className='btn'>Go Back Home</Link>
      </div>
    </section>
    </>
  )
}

export default NotFound