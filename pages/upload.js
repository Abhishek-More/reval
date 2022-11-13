import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
    <div>
      <div className="flex flex-col items-center mt-16">
        <div class="rounded-lg box-content bg-[#4361EE] bg-opacity-5 h-[500px] w-9/12 p-4 border-4 border-[#4361EE] border-opacity-25 py-28">
          <a className="bg-white border-2 border-[#4361EE] font-medium placeholder:text-md text-[#4361EE] px-11 py-4 rounded-lg ml-36">Browse Files</a>
          <a className="bg-[#4361EE] font-medium text-md text-white px-16 py-4 rounded-lg mt-4">Submit</a>
        </div>
      </div>
    </div>
   </>
  )
}
