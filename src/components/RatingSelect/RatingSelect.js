import React from 'react';
import RatingButton from './RatingButton';
import Button from './Button';

function RatingSelect() {
  return (
    <div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All
        feedback is appreciated to help us improve our offering!
      </p>
      <RatingSelect />
      <Button />
    </div>
  );
}

export default RatingSelect;
