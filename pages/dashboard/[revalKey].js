import React, { use } from "react";
import RatingChart from "../../components/RatingChart";
import Link from "next/link";
import { Input } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useToast } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import ReviewStream from "../../components/ReviewStream";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoChevronDown } from "react-icons/io5";
import { IoAnalyticsOutline} from 'react-icons/io5'
import {SlSpeech} from 'react-icons/sl'
import { TiDeleteOutline } from 'react-icons/ti'
import {FiDelete} from 'react-icons/fi'
import ReactSearchBox from "react-search-box";
import Summary from "../../components/Summary";
import SentimentTable from "../../components/SentimentTable";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter()
  const toast = useToast()
  const { revalKey, tag } = router.query
  const [key, setKey] = useState(revalKey)
  const [view, setView] = useState("analytics");
  const [stack, setStack] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [data, setData] = useState({});

  function copyToClipboard() {
    navigator.clipboard.writeText(key)
    const id = 'email-toast'
    if(!toast.isActive(id)) { 
      toast({
        id,
        title: 'Key copied to clipboard!',
        status: 'success',
        position: 'bottom-right',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  useEffect(() => {
    if(tag && tag != "") {
      setView("reviews");
      setStack([tag]);
      router.replace(`/dashboard/${key}/`, undefined, { shallow: true });
    }
  }, [tag])

  useEffect(() => {
    setKey(revalKey)
  }, [revalKey])

  useEffect(() => {
    fetchData(key)
  }, [key])

  useEffect(() => {
    handleSearch(stack)
  }, [stack])

  useEffect(() => {
    handleSearch(data)
  }, [data])

  const handleDelTag = (index) => {
    let temp = [...stack];
    temp.splice(index,1);
    console.log(temp)
    setStack(temp);
  }

  const handleSearch = (arr) => {

    if(view == "reviews") {
      let key = data.dataset_key;
      axios({
        method: 'post',
        url: `http://reval-backend.herokuapp.com/product/${key}/mentions_of`,
        data: {
          keywords: arr,
        }
      })
      .then(function (response) {
        setReviews(response.data);
      }).catch(function (response) {
        setReviews([])
      })
    }
  }

  const fetchData = (key) => {

    axios({
      method: 'get',
      url: `http://reval-backend.herokuapp.com/product/${key}`,
    })
    .then(function (response) {
      console.log(response.data)
      setData(response.data);
      setReviews(response.data.reviews);
    }).catch(function (error) {
      setData({});
    })
  } 

  const handleKeyEnter = (event, input) => {
    console.log(router.query)
    if (event.key === 'Enter' && input != "") {
      setKey(input);
    }
  }

  const handleKeyDown = (event, input) => {
    console.log(router.query)
    if (event.key === 'Enter' && input != "" && !(Object.keys(data).length === 0)) {
      let arr = input.split(" ")
      if(arr.length > 5) {
        arr = arr.slice(0,5);
      }
  
      let temp = [...stack];
      for(let i = 0; i < arr.length; i++) {
        if(temp.length >=5) {
          temp.pop();
          temp.push(arr[i]);
        } else {
          temp.push(arr[i]);
        }
      }
      setStack(temp)
      document.getElementById("searcher").value = ""
    }
  }

  if(view=="analytics") {
  return (
      <>
        <div className="fixed left-0 top-0 h-screen w-[250px] pt-8 pl-10 border-r-2 border-gray-100">
          <Link href="/" className='text-2xl font-OP text-primary-blue font-bold flex-grow-0'>ReVal</Link>
          <div className="mt-32">
            <div className={`flex items-center ${view == "analytics" ? "bg-gray-200" : ""} pl-2 pr-4 py-2 mr-4 my-4 text-left rounded-md cursor-pointer`}>
              <IoAnalyticsOutline />
              <a onClick={() => setView('analytics')} className="text-lg font-semibold font-OP pl-2">Analytics</a>
            </div>
            <div className={`flex items-center ${view == "reviews" ? "bg-gray-200" : ""} pl-2 pr-4 py-2 mr-4 my-4 text-left rounded-md cursor-pointer`}>
              <SlSpeech />
              <a onClick={() => setView('reviews')} className="text-lg font-OP pl-2 ">Reviews</a>
            </div>
          </div>
          <div onClick={() => copyToClipboard()} className="absolute left-0 bottom-8 pt-8 pl-10 w-[250px] border-t-2 border-gray-100 cursor-pointer">
            <p className="text-xl font-bold font-poppins">Current Key</p>
            <p className="text-lg font-medium font-poppins">{key || "None"}</p>
          </div>
        </div>
        <div className="absolute ml-[250px] top-0">
          <div className="flex justify-between items-center w-[1200px] mt-32 px-16">
            <p className="font-bold text-3xl">Analytics</p>
            <Popover>
              <PopoverTrigger>
                <a className="flex items-center gap-1 bg-black text-white text-md font-light font-OP px-6 py-3 rounded-md cursor-pointer">
                  Enter ReVal Key
                  <IoChevronDown />
                </a>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Enter a ReVal key</PopoverHeader>
                <PopoverBody>
                  <Input id="keyEntry" placeholder="ReVal Key"  onKeyDown={() => handleKeyEnter(event, document.getElementById("keyEntry").value)}></Input>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </div>
          {!(Object.keys(data).length === 0) && 
          <>
            <div className="flex">
              <RatingChart data={data}/>
              <Summary data={data} />
            </div>
            <div className="mb-16">
              <SentimentTable data={data}></SentimentTable>
            </div>
          </>
          }
          {(Object.keys(data).length === 0) &&
          <div className="flex justify-center mt-32 ">
            <div>
              <p className="text-3xl text-center font-semibold">No key! Enter a ReVal key above!</p>
            </div>
          </div>
          }
        </div>
      </>
  )} else if (view=="reviews") {
    return (
      <>
      <div className="fixed left-0 top-0 h-screen w-[250px] pt-8 pl-10 border-r-2 border-gray-100">
      <Link href="/" className='text-2xl font-OP text-primary-blue font-bold flex-grow-0'>ReVal</Link>
      <div className="mt-32">
        <div className={`flex items-center ${view == "analytics" ? "bg-gray-200" : ""} pl-2 pr-4 py-2 mr-4 my-4 text-left rounded-md cursor-pointer`}>
          <IoAnalyticsOutline />
          <a onClick={() => setView('analytics')} className="text-lg font-OP pl-2">Analytics</a>
        </div>
        <div className={`flex items-center ${view == "reviews" ? "bg-gray-200 font-semibold" : ""} pl-2 pr-4 py-2 mr-4 my-4 text-left rounded-md cursor-pointer`}>
          <SlSpeech />
          <a onClick={() => setView('reviews')} className="text-lg font-OP pl-2 ">Reviews</a>
        </div>
      </div>
      <div onClick={() => copyToClipboard()} className="absolute left-0 bottom-8 pt-8 pl-10 w-[250px] border-t-2 border-gray-100 cursor-pointer">
        <p className="text-xl font-bold font-poppins">Current Key</p>
        <p className="text-lg font-medium font-poppins">{key || "None"}</p>
      </div>
    </div>
    <div className="absolute ml-[250px] top-0 ">
    <div className="ml-16 mt-8 w-1/3">
      <Input id="searcher" placeholder='Fuzzy Search' onKeyDown={() => handleKeyDown(event, document.getElementById("searcher").value)} className="px-6 py-2 appearance-none rounded-md bg-red border-2"></Input>
      <div className="flex gap-4 mt-4">
        {stack.map((keyword, index) => 
          <div key={index} onClick={() => handleDelTag(index)}className="flex items-center gap-2 pl-4 pr-2 py-2 bg-primary-blue text-white rounded-md cursor-pointer">
            <p>#{keyword}</p>
            <FiDelete />
          </div>
        )}
      </div>

    </div>
    <div className="flex justify-between items-center w-[1200px] mt-12 px-16 cursor-pointer">
      <p className="font-bold text-3xl">Reviews</p>
      <Popover>
        <PopoverTrigger>
          <a className="flex items-center gap-1 bg-black text-white text-md font-light font-OP px-6 py-3 rounded-md cursor-pointer">
            Enter ReVal Key
            <IoChevronDown />
          </a>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Enter a ReVal key</PopoverHeader>
          <PopoverBody>
            <Input id="keyEntry" placeholder="ReVal Key"  onKeyDown={() => handleKeyEnter(event, document.getElementById("keyEntry").value)}></Input>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
    
    {!(Object.keys(data).length === 0) && 
    <ReviewStream reviews={reviews}></ReviewStream>
    }
    {(Object.keys(data).length === 0) &&
      <div className="flex justify-center mt-32 ">
        <div>
          <p className="text-3xl text-center font-semibold">No key! Enter a ReVal key above!</p>
        </div>
      </div>
    }
    
  </div>
  </>
    )
  }
}
