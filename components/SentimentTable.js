import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import { v4 as uuidv4 } from 'uuid';
import 'react-circular-progressbar/dist/styles.css';
import Link from 'next/link';

export default function SentimentTable(props) {

  const [positive, setPositive] = useState(true);

  if(!props.data) {
    return <p>No Data</p>
  }

  function getSentiments(data, isPositive) {
    let res = []
    for(let i = 0; i < data.reviews.length; i++) {
      if((isPositive && !data.keywords.top10Positive[i]) || (!isPositive && !data.keywords.top10Negative[i])) {
        break;
      }

      if(i==5) {
        break;
      }


      if(isPositive) {
        res.push(data.keywords.top10Positive[i]);
      } else {
        res.push(data.keywords.top10Negative[i]);
      }
    }



    console.log(res);
    return res
  }
  
  //https://reval-backend.herokuapp.com/product/sample
  return (
    <div className="h-[400px] w-[1100px] py-8 pr-4 mx-16">
    <p className="font-bold text-lg font-poppins ">Top Sentiments</p>
    <div className="flex gap-8 mt-2">
      <a onClick={() => setPositive(true)} className={`border-b-2 cursor-pointer ${positive ? 'border-[#FF65DD]' : 'border-none'}`}>Positive</a>
      <a onClick={() => setPositive(false)} className={`border-b-2 cursor-pointer ${!positive ? 'border-[#FF65DD]' : 'border-none'}`}>Negative</a>
    </div>
  
    <div className="flex flex-col mt-8 border-2 px-4 rounded-md">
      <div className="flex justify-between border-b-2 border-gray-200">
        <a className="text-lg font-semibold px-6 py-2 mt-2 font-OP">Keyword</a>
        <p className="text-lg font-semibold px-6 py-2 mt-2 font-OP">Sentiment</p>
      </div>
      {getSentiments(props.data, positive).map((sent) => 
        <Link id={uuidv4()} href={`/dashboard/${props.data.dataset_key}/?tag=${sent.keyword}`}>
        <div className="flex justify-between border-b-2 border-gray-200">
          <a className="text-lg px-6 py-2 mt-2 font-OP">{sent.keyword}</a>
          <p className="text-md px-6 py-2 mt-2 font-OP">{sent.sentiment}</p>
        </div>
        </Link>
      )}
    </div>
  </div>


  )
}
