import React from 'react'
import Review from './Review';

export default function ReviewStream(props) {
  if(!props.reviews) {
    return <p>No Reviews!</p>
  }

  let reviewArr = []

  props.reviews.forEach(review => {
    reviewArr.push(<Review key={review.reviewer_id} review={review}/>)
  }); 

  return (
    <div className="px-32">
      {reviewArr}
    </div>
  )
}

