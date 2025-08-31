import { useContext } from "react"
import { userDataContext } from '../context/UserContext'
import ai_robot from "../assets/ai_robot.png"
import { FaArrowLeftLong } from "react-icons/fa6";
import {useNavigate } from "react-router-dom";




const History = () => {
    const {userData}=useContext(userDataContext)
    const navigate= useNavigate();

  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#010163] flex justify-center items-center flex-col gap-[40px] relative overflow-hidden'>
        <FaArrowLeftLong  className="w-[25px] h-[25px]  text-white absolute left-8 top-8" onClick={()=>navigate("/")}/>

       <div className="flex justify-center items-center gap-3">
         <h1 className='text-white font-semibold text-[45px]'>History 
        </h1>
        <img src={ai_robot} className="w-[60px] h-[65px] mt-4" />
       </div>

<div className='w-[85%] md:w-[70vw]  lg:w-[60vw] h-[400px] gap-[20px] overflow-y-auto flex flex-col  truncate border-5 border-white p-8  lg:p-15  overflow-x-hidden'>
  {userData.history?.map((his, index)=>(
    <div key={index} className='text-gray-200 text-[15px] md:text-[18px]   w-full h-[30px]  '>{his}</div>
  ))}

</div>

    </div>
  )
}

export default History