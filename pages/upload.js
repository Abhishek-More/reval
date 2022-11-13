import Navbar from "../components/Navbar"
import Image from 'next/image'
import { useState } from "react";
import { useToast } from '@chakra-ui/react'
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
 
  const [sending, setSending] = useState("")
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const toast = useToast()
  const router = useRouter()

  function onReaderLoad(event){
    console.log(event.target.result);
    setSending(event.target.result);
    
    var obj = JSON.parse(event.target.result);
}

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    let datastr = reader.readAsText(event.target.files[0]);
	}; 
  
	const handleFileSubmit = () => {
    if(!isFilePicked) {
      console.log("AAA")
      toast({
        title: 'Invalid Input',
        description: "Please choose a valid file!",
        status: 'error',
        position : 'bottom-right',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    console.log("SENDING THIS")
    console.log(sending)
    console.log(typeof(sending))


    axios.post('https://reval-backend.herokuapp.com/create', {
      reviews: sending,
    })
    .then(function (response) {
      console.log(response);
      router.push(`/dashboard/${response.data.id}`)
    })
    .catch(function (error) {
      console.log(error);
    });

    console.log(sending)

  }

  return (
    <>
      <Navbar></Navbar>
    <div>
      <div className="mt-16 flex justify-center">
        <div class="flex items-center justify-between rounded-lg box-content bg-[#4361EE] bg-opacity-5 h-[500px] w-4/5 p-4 border-4 border-[#4361EE] border-opacity-25 pt-24">
          <div>
          <div class="text-3xl ml-36 mb-20">
            <p>
              Upload your file.
            </p>
          </div>

          <div className="mb-4">
            <label className="bg-white border-2 border-[#4361EE] font-medium placeholder:text-md text-[#4361EE] px-16  py-5 rounded-lg ml-36 cursor-pointer">
              <input className="hidden" type="file" name="file" accept="json/*" onChange={changeHandler}/>
              Browse Files
            </label>
          </div>
         
          <div class="mt-16 ml-36 mb-14">
            <a onClick={() => handleFileSubmit()}className="bg-[#4361EE] w-[250px] font-medium text-md text-white px-20 py-5 rounded-lg mt-4 cursor-pointer">Submit</a>
          </div>

          {selectedFile && <p className="ml-32 ">
            Selected File: {selectedFile.name}
            </p>
          }
          </div>
          
          <div class="pr-40 align-middle">
            <Image 
              src="/upload.png"
              width={400}
              height={400}
              margin
            />
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
