import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function RatingChart(props) {


  //Returns array of length 5 with each index representing the index
  function getBucketJSON(data) {
    let reviews = data.reviews;
    let ratings = [0,0,0,0,0]
    for(let i = 0; i < reviews.length; i++) {
      let rating = reviews[i].overall;
      ratings[rating-1]++;
    }

    let res = [];
    for(let i = 0; i < 5; i++) {
      let point = {
        name: (i+1).toString(),
        rating: ratings[i],
      };
      res.push(point);

    }

    console.log(res);

    return res;
  }

  return (
    <div className="h-[400px] w-[400px] py-8 pr-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-center">
        <p className="font-bold text-lg font-poppins pb-4">Ratings</p>
      </div>
      <div className="h-full pb-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={getBucketJSON(data)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="rating" fill="#4361EE" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}
