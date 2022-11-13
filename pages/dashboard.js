import React from "react";
import DashNavbar from "../components/DashNavbar";
import RatingChart from "../components/RatingChart";
import ReviewStream from "../components/ReviewStream";
import { IoChevronDown } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

export default function Dashboard() {
  let data = {
    "dataset_key": "78dd452b-b2ae-4644-aef0-7c81f0597fc0",
    "reviews": [
      {"index": 0, "sentiment": 1.0, "overall": 5.0, "verified": true, "reviewTime": "04 19, 2016", "reviewerID": "A1TNNZGA6OJ950", "asin": "140053271X", "reviewerName": "Laozee", "reviewText": "great product, still have it..(bought it 3-4 years ago)", "summary": "Five Stars", "unixReviewTime": 1461024000},
      {"index": 1, "sentiment": -1.0,"overall": 5.0, "verified": true, "reviewTime": "03 11, 2016", "reviewerID": "A2QBRAAAE0YQYF", "asin": "140053271X", "reviewerName": "Ellen Hilderbrand", "reviewText": "good quality", "summary": "Five Stars", "unixReviewTime": 1457654400},
      {"index": 2, "sentiment": -0.5,"overall": 3.0, "verified": true, "reviewTime": "02 14, 2016", "reviewerID": "A2HCME4HA74UGH", "asin": "140053271X", "reviewerName": "Miguel H.", "reviewText": "nice", "summary": "Three Stars", "unixReviewTime": 1455408000},
      {"index": 3, "sentiment": 0.2,"overall": 2.0, "vote": "4", "verified": true, "reviewTime": "01 28, 2016", "reviewerID": "A4DB2FNAM7D5J", "asin": "140053271X", "reviewerName": "Purple bicycle", "reviewText": "This is replacing my Nook first edition (which in my opinion, is the best version by far) and while I like the size and feel of it, the operation leaves something to be desired. Page turns are not instantaneous and there is a weird, albeit brief flash of the screen every time I change pages. The page turn is actually faster on my first edition. I was also having issues with some books where I received an error when I tried to turn the page, almost like the page didn't exist. I would have to reset my nook, used the \"Go To\" function to skip to the page AFTER the one I wanted to read, and then go back a page just to pick up where I left off. And BN customer service is completely unhelpful when it comes to their slightly older e-readers, because everybody wants you to upgrade to their newest tablet editions with backlit screens. If I wanted to read books on a tablet, I would do that, but what I want is an e-ink ereader specifically for reading books. I have been a nook fan since the beginning and I still totally am. I really want to love this, but until BN works out their software issues, I just can't.", "summary": "Really wanted to love this.", "unixReviewTime": 1453939200},
      {"index": 4, "sentiment": 0.5,"overall": 3.0, "verified": true, "reviewTime": "11 4, 2015", "reviewerID": "AN26RTA8LYN6U", "asin": "140053271X", "reviewerName": "Nanue", "reviewText": "Gave as a gift and after a year I have NEVER seen it used. Partly because of the parents having to use a credit card number to order books and the problem of children ordering by mistake or losing it and someone else having a great time on their dime.", "summary": "Partly because of the parents having to use a credit card number to order books and the problem of children ordering by mistake", "unixReviewTime": 1446595200},
      {"index": 5, "sentiment": 0.1,"overall": 5.0, "vote": "2", "verified": false, "reviewTime": "10 27, 2015", "reviewerID": "A1U8FPYFSHL9JC", "asin": "140053271X", "reviewerName": "MrMr", "reviewText": "I absolutely love the Simple Touch Reader by Nook.  I love the battery life, the simplicity and the size of the device.  I can go for weeks without charging it, I can download books within seconds.  The best part is the size and weight of the device.  I can hold it for hours and read without getting hand cramps.  I also love the e-ink display so much more than a back lit screen.  I have an iPad mini, an ipad 4 and several other devices but none of them can hold a candle to the Nook Simple Touch Reader.  It irritates me that Barnes and Noble doesn't actively sell them because in my opinion it's the best e-reader available.", "summary": "I absolutely love the Simple Touch Reader by Nook", "unixReviewTime": 1445904000},
      {"index": 6, "sentiment": 0.1,"overall": 3.0, "verified": true, "reviewTime": "10 5, 2015", "reviewerID": "A3LL8P833Q0PPQ", "asin": "140053271X", "reviewerName": "Rebecca M.", "reviewText": "Bought this as a gift, and the lack of any light assistance seems to be unsatisfactory when reading at night or in a dim area.", "summary": "not satisfied", "unixReviewTime": 1444003200},
      {"index": 7, "sentiment": 1.0,"overall": 4.0, "verified": true, "reviewTime": "09 23, 2015", "reviewerID": "A21QRMSZ6NHUI7", "asin": "140053271X", "reviewerName": "Bubba-J", "reviewText": "Outstanding for the price.", "summary": "Four Stars", "unixReviewTime": 1442966400},
      {"index": 8, "sentiment": 1.0,"overall": 5.0, "verified": true, "reviewTime": "08 28, 2015", "reviewerID": "A3LA9IB5BIEE06", "asin": "140053271X", "reviewerName": "H. Lockhart", "reviewText": "Works great so far, daughter loves it", "summary": "Five Stars", "unixReviewTime": 1440720000},
      {"index": 9, "sentiment": 1.0,"overall": 5.0, "verified": true, "reviewTime": "06 29, 2015", "reviewerID": "A1B35OVC5RWOQO", "asin": "140053271X", "reviewerName": "G. Smietana", "reviewText": "Easy to download and easy to read. Hods a charge very well.", "summary": "Nice easy reader", "unixReviewTime": 1435536000}
    ],
    "keywords": {
      "top10Positive": [
          {"keyword": "easy to use", "sentiment": 0.9, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "poggers", "sentiment": 0.5, "reviewsMentionedIn": [1, 2, 3]},
          {"keyword": "easy to use", "sentiment": 0.9, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "easy to use", "sentiment": 0.9, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "easy to use", "sentiment": 0.9, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "easy to use", "sentiment": 0.9, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "easy to use", "sentiment": 0.9, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "easy to use", "sentiment": 0.9, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "easy to use", "sentiment": 0.9, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "easy to use", "sentiment": 0.9, "reviewsMentionedIn": [2, 4, 6, 8]}
      ],
      "top10Negative": [
          {"keyword": "annoying setup", "sentiment": -1.0, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "bad design", "sentiment": -0.5, "reviewsMentionedIn": [1, 2, 3]},
          {"keyword": "annoying setup", "sentiment": -1.0, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "annoying setup", "sentiment": -1.0, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "annoying setup", "sentiment": -1.0, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "annoying setup", "sentiment": -1.0, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "annoying setup", "sentiment": -1.0, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "annoying setup", "sentiment": -1.0, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "annoying setup", "sentiment": -1.0, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "annoying setup", "sentiment": -1.0, "reviewsMentionedIn": [2, 4, 6, 8]}
      ],
      "top10Overall": [
          {"keyword": "compatible with iphone", "sentiment": 0.1, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "compatible with macbook", "sentiment": 0.05, "reviewsMentionedIn": [1, 2, 3]},
          {"keyword": "compatible with iphone", "sentiment": 0.1, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "compatible with iphone", "sentiment": 0.1, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "compatible with iphone", "sentiment": 0.1, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "compatible with iphone", "sentiment": 0.1, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "compatible with iphone", "sentiment": 0.1, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "compatible with iphone", "sentiment": 0.1, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "compatible with iphone", "sentiment": 0.1, "reviewsMentionedIn": [2, 4, 6, 8]},
          {"keyword": "compatible with iphone", "sentiment": 0.1, "reviewsMentionedIn": [2, 4, 6, 8]}
      ]
    }
  }

  return (
    <>
      <DashNavbar ready={false} />
      <div className="absolute pl-[250px] top-0">
        <div className="flex justify-between items-center  mt-32 px-16">
          <p className="font-bold text-3xl">Analytics</p>
          <a className="flex items-center gap-1 bg-black text-white text-md font-light font-OP px-6 py-3 rounded-md">
            Import JSON File
            <IoChevronDown />
          </a>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <RatingChart data={data}/>
          </div>
          <div className="w-1/2">
            <ReviewStream reviews={data.reviews} />
          </div>
        </div>
      </div>
    </>
  )
}
