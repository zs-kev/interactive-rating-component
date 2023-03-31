import React from 'react';

import RatingSelect from '../RatingSelect';
import ShowRating from '../ShowRating';

function App() {
  const [rating, setRating] = React.useState(null);

  const RATING_NUMBERS = [1, 2, 3, 4, 5];

  return (
    <main>
      {rating === null ? (
        <RatingSelect
          setRating={setRating}
          ratingNumbers={RATING_NUMBERS}
        />
      ) : (
        <ShowRating
          rating={rating}
          ratingTotal={RATING_NUMBERS.length}
        />
      )}
    </main>
  );
}

export default App;
