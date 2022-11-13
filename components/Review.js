import React from 'react'

export default function Review(props) {
  if(!props.review) {
    return <p>No review!</p>
  }

  return (
    <div className="py-4 px-8 bg-white shadow-md rounded-lg my-8">
      <div className="flex justify-between pb-4">
        <p className="font-bold">
          Summary: {props.review.summary}
        </p>
        <p className="">
          Sentiment: {props.review.sentiment}
        </p>
      </div>
      <p className='font-lg'>
        {props.review.reviewText}
      </p>
    </div>
  )
}
