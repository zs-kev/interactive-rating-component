import React from 'react';

import styles from './RatingButtons.modules.css';

function RatingButtons({ setRatingValue, ratingNumbers }) {
  return (
    <>
      {ratingNumbers.map((rating) => (
        <React.Fragment key={rating}>
          <input
            type="radio"
            name="select-rating"
            id={`rating-${rating}`}
            value={rating}
            onChange={(event) => {
              setRatingValue(event.target.value);
            }}
          />
          <label htmlFor={`rating-${rating}`}>{rating}</label>
        </React.Fragment>
      ))}
    </>
  );
}

export default RatingButtons;
