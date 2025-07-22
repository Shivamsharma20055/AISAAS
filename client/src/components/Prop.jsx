import React from 'react'
import {useUser} from '@clerk/clerk-react'
import {useNavigate} from 'react-router-dom'

function Prop({title,description,Icon,bg,path}) {
    const {user}=useUser();
      const navigate=useNavigate();
     
  return (
    <div>
      <div  className="p-8 m-4 max-w-xs rounded-lg bg-[#fdfdfe] shadow-lg-border border-gray-100 hover:translate-y-1 transition-all duration-300 cursor-pointer"
             onClick={()=>user&&navigate(path)}>
               <Icon className="w-12 h-12 p-3 rounded-xl" style={{background:`linear-gradient(to bottom ,${bg.from},${bg.to})`}}/>
               <h3 className="wt-6 mb-3 text-lg font-semibold ">{title}</h3>
               <p className="text-gray-400 text-sm max-w-[95%]">{description}</p>
    </div>
    </div>
  )
}

export default Prop
