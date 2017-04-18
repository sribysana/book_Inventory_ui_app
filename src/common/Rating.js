import React, { PropTypes } from 'react';
export default function Rating(props) {
  let fgStar = [];
  let bgStars = [];
  let starMaskPercent = ((props.avgRating - Math.floor(props.avgRating))*14 );
  const avgRatingCeil = Math.ceil(props.avgRating);

  for (let i = 0; i < props.maxStarts; i++) {
    bgStars.push(<i key={'bg_' + i} className="glyphicon glyphicon-star-empty" />);
    if (i <= avgRatingCeil) {
      if (i == avgRatingCeil-1) {
        fgStar.push(
          <span key={'fg_' + i}style={{
              position: 'absolute', clip: `rect(0px,${starMaskPercent}px,20px,0px)`}}> <i  className="glyphicon glyphicon-star" /></span>);
      } else {
        fgStar.push(<i key={'fg_'+i} className="glyphicon glyphicon-star" />);
      }
    }
  }
  return (
    <div>
      <div style={styles.wrap}>
        <div>{bgStars}</div>
        <div style={styles.fgWrap}>{fgStar}</div>
      </div>
    </div>
  );
}
Rating.defaultProps = {
  maxStarts: 5,
};

Rating.propTypes = {
  avgRating: PropTypes.number.isRequired,
  maxStarts: PropTypes.number.isRequired,
};

const styles = {
  wrap: {
    position: 'relative',
  },
  starWrap: {},
  fgWrap: {
    position: 'absolute',
    top: 0,
    left: 0
  }
};
