import { StyledCard } from './styledCard';
import PropTypes from 'prop-types'

const Card = ({color = 'black', backgroundColor = '#fff', mainImg = 'https://www.w2media.org/wp-content/uploads/5/5-what-mattress-should-i-buy-for-my-back.jpg',
 title = 'This is the title of new Card component', 
 subTitle = 'And this is the subtitle of new component',
 profilePic = 'http://vision.gel.ulaval.ca/~jflalonde/cours/4105/h19/tps/results/tp3/111126876/images/04-Mathieu.jpg',
 author = 'Jack the author', date = '21 Jan 2002' }) =>
{

   
    return (
        <StyledCard  color = {color} backgroundColor={backgroundColor} className='card'>
            <header>
                <img src={mainImg} alt="Here goes the main pic of the card"/>
            </header>
            <div className='cardSub'>
                <h3 className='text'>{title}</h3>
                <p className='text'>{subTitle}</p>
                <div>
                    <div className="profilePicContainer">
                        <img src={profilePic} alt="This is where you put the creators' profile pic"/>
                    </div>
                    <div classname = 'text'>
                        <p className="profileName text">{author}</p>
                        <p className="profileDate text">{date}</p>
                    </div>
                </div>
            </div>
        </StyledCard>

    )
}

Card.propTypes = {
    mainImg: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    profilePic: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    color: PropTypes.string
}


export default Card