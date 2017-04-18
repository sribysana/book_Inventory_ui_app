import React, { PropTypes } from 'react';
import { List } from 'immutable';
import Rating from './Rating';

export default function Reviews(props) {
  let feedBack = 0;
  const reviews = props.reviews;
  let totalRating = 0;
  const size = reviews.size;
  const eachRating = {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
  };
  return (
    <div className="row">
      <h4>Reviews</h4>
      {
        reviews.map((e) => {
          totalRating += e.get('reviewerRating');
          const userRating = Math.round(e.get('reviewerRating'));
          eachRating[userRating]++;
          if (e.get('feedback')) {
            feedBack++;
          }
        })
      }
      <div className="col-md-5">
        <Rating avgRating={totalRating / size} />
        {size} Reviews <br />
        {feedBack} Feed Backs
      </div>
      <div className="col-md-5">
        <div className="list-group">
          <div className="list-group-item">5 <i className="glyphicon glyphicon-star" /> <small>{eachRating['5']}</small></div>
          <div className="list-group-item">4 <i className="glyphicon glyphicon-star" /> <small>{eachRating['4']}</small></div>
          <div className="list-group-item">3 <i className="glyphicon glyphicon-star" /> <small>{eachRating['3']}</small></div>
          <div className="list-group-item">2 <i className="glyphicon glyphicon-star" /> <small>{eachRating['2']}</small></div>
          <div className="list-group-item">1 <i className="glyphicon glyphicon-star" /> <small>{eachRating['1']}</small></div>
          <div className="list-group-item">0 <i className="glyphicon glyphicon-star" /> <small>{eachRating['0']}</small></div>
        </div>
      </div>
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.instanceOf(List).isRequired,
};


