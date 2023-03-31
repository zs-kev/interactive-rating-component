import React from 'react';

import styles from './RatingSelect.modules.css';

import RatingButton from './RatingButton';
import Button from './Button';

const rantingNumbers = [1, 2, 3, 4, 5];

function RatingSelect() {
  return (
    <div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All
        feedback is appreciated to help us improve our offering!
      </p>
      <div className="ratings">
        {rantingNumbers.map((rating) => (
          <RatingButton ratingNumber={rating} />
        ))}
      </div>
      <Button />
    </div>
  );
}

export default RatingSelect;
