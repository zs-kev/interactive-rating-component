import React from 'react';

import styles from './RatingSelect.modules.css';
import starIcon from './icon-star.svg';

import RatingButtons from './RatingButtons';
import Button from './Button';

function RatingSelect({ setRating, ratingNumbers }) {
  const [ratingValue, setRatingValue] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setRating(ratingValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="star-icon-background">
        <img className="star-icon" src={starIcon} alt="star" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All
        feedback is appreciated to help us improve our offering!
      </p>
      <div className="ratings">
        <RatingButtons
          setRatingValue={setRatingValue}
          ratingNumbers={ratingNumbers}
        />
      </div>
      <Button />
    </form>
  );
}

export default RatingSelect;
