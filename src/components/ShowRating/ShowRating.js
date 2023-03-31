import React from 'react';

import ThankYouImg from './illustration-thank-you.svg';
import styles from './ShowRating.modules.css';

function ShowRating({ rating, ratingTotal }) {
  return (
    <div className="thanks-container">
      <img
        className="thank-you-img"
        src={ThankYouImg}
        alt="Thank You"
      />
      <div className="rating-selection">
        <p>
          You selected {rating} out of {ratingTotal}
        </p>
      </div>
      <h1>Thank You!</h1>
      <p className="thanks-text">
        We appreciate you taking the time to give a rating. If you
        ever need more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ShowRating;
