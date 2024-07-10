// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    id: 0,
  }

  onLeftArrowClick = () => {
    const {id} = this.state
    if (id === 0) {
      this.setState({id: 0})
    } else {
      this.setState({id: id - 1})
    }
  }

  onRightArrowClick = () => {
    const {reviewsList} = this.props
    const {id} = this.state
    if (id === reviewsList.length - 1) {
      this.setState({id: reviewsList.length - 1})
    } else {
      this.setState({id: id + 1})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {id} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[id]

    return (
      <div className="bg-container">
        <div className="details-container">
          <h1 className="heading">Reviews</h1>
          <ul className="unordered-list">
            <li className="list">
              <img src={imgUrl} className="img" alt={username} />
              <div className="arrows">
                <button
                  className="btn"
                  type="button"
                  onClick={this.onLeftArrowClick}
                  data-testid="leftArrow"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                    className="arrow"
                    alt="left arrow"
                  />
                </button>
                <p className="user-name">{username}</p>
                <button
                  className="btn"
                  type="button"
                  onClick={this.onRightArrowClick}
                  data-testid="rightArrow"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                    className="arrow"
                    alt="right arrow"
                  />
                </button>
              </div>
              <p className="company-name">{companyName}</p>
              <p className="description">{description}</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
