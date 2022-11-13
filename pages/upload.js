import Navbar from "../components/Navbar"
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
    <div>
      <div className="mt-16 flex justify-center">
        <div class="flex items-center justify-between rounded-lg box-content bg-[#4361EE] bg-opacity-5 h-[500px] w-4/5 p-4 border-4 border-[#4361EE] border-opacity-25 pt-24">
          <div>
          <div class="text-3xl ml-36 mb-20">
            <p>
              Upload your files.
            </p>
          </div>

          <div className="mb-4">
            <a className="bg-white border-2 border-[#4361EE] font-medium placeholder:text-md text-[#4361EE] px-16 py-5 rounded-lg ml-36">Browse Files</a>
          </div>
         
          <div class="mt-16 ml-36 mb-14">
            <a className="bg-[#4361EE] font-medium text-md text-white px-20 py-5 rounded-lg mt-4">Submit</a>
          </div>

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
