import React from 'react'
import ReviewStream from './ReviewStream'

export default function ReviewPopover(props) {

  if(!props.reviews) {
    return <p>No Reviews!</p>
  }

  return (
    <div className="absolute w-1/3 h-screen right-0 top-0 bg-gray-200 overflow-scroll">
      <ReviewStream reviews={props.reviews}></ReviewStream>
    </div>
  )
}
