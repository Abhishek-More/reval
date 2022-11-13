import React, { PureComponent } from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Summary(props) {
  if(!props.data) {
    return <p>No Data</p>
  }

  function getAverage(data) {
    let reviews = data.reviews;
    let ratingSum = 0 
    for(let i = 0; i < reviews.length; i++) {
      let rating = reviews[i].overall;
      ratingSum += rating;
    }

    console.log(ratingSum/reviews.length)
    return ratingSum/reviews.length;
  }

  function getAverageSentiment(data) {
    let reviews = data.reviews;
    let ratingSum = 0 
    for(let i = 0; i < reviews.length; i++) {
      let rating = reviews[i].sentiment;
      ratingSum += rating;
    }

    return ratingSum/reviews.length + 1;
  }

  return (
    <div className="h-[400px] w-[700px] py-8 pr-4 mx-16">
    <p className="font-bold text-lg font-poppins ">Summary</p>
    <div className="flex justify-between items-center py-10 mt-8 px-16 border-2 rounded-lg">
      <div>
        <p className="text-center text-7xl pb-2 mb-2 border-b-2 text-[#FF65DD]">{props.data.reviews.length}</p>
        <p>reviews analyzed</p>
      </div>
      <div className="w-[150px]">
        <CircularProgressbar
          value={getAverage(props.data) / 5 * 100}
          text={`${getAverage(props.data).toFixed(2)}`}
          styles={buildStyles({
            // Text size
            textSize: '16px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `#4361EE`,
            textColor: '#000000',
            trailColor: '#e6e6e6',
            backgroundColor: '#3e98c7',
          })}
        />
        <p className="text-center mt-4 font-poppins text-gray-700">Average Rating</p>
      </div>
      <div className="w-[150px]">
        <CircularProgressbar
          value={(getAverageSentiment(props.data) / 2 * 100).toFixed(2)}
          text={`${getAverageSentiment(props.data).toFixed(2)}`}
          styles={buildStyles({
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'

            // Text size
            textSize: '16px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `#4361EE`,
            textColor: '#000000',
            trailColor: '#e6e6e6',
            backgroundColor: '#3e98c7',
          })}
        />
        <p className="text-center mt-4 font-poppins text-gray-700">Average Sentiment</p>
      </div>
    </div>
  </div>


  )
}
