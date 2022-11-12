import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="text-7xl indent-20 text-lime-600 font-semibold">
      <p>Customer Analytics </p>
      <p>Beautified.</p>
      </div>

      <div className="text-3xl indent-20 text-lime-900">
      <p>Discover a powerful sentiment </p>
      <p>analysis tool for your reviews in one click</p>
      </div>

      
      <p className="bg-primary-green font-medium text-md text-white px-6 py-4 rounded-lg"> 
      Upload CSV
      </p>
      
      
   </>
  )
}
