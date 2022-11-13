import React from 'react'

export default function Review(props) {
  if(!props.review) {
    return <p>No review!</p>
  }

  return (
    <div className="py-4 px-8 bg-white shadow-md rounded-lg my-8">
      <p className='font-lg'>
        {props.review.reviewText}
      </p>
      <p className="font-bold">
        Summary: {props.review.summary}
      </p>
    </div>
  )
}
