// import React from 'react'
import { Badge,Avatar } from "@mantine/core"

function Profile() {
  return (
    <div className="w-full flex justify-center items-center ">
         <div className="driverprofile shadow-[0_0px_1px_1px_#9ca3af] mt-5 border-[2px] w-[96%] flex justify-between items-center p-5 rounded-lg  ">
            <div className="flex gap-2 items-center  ">
            <Avatar src="avatar.png" size={95} alt="it's me" />
            <div className="">
                <p className="font-mono text-2xl">Raja kumar paswan</p>
                <span className="flex gap-2" ><p className="font-mono">Driver</p> <a className="font-semibold text-md text-blue-500" href="">View profile</a></span>
            </div>
            </div>
            <div className=" flex font-mono ">
                <div className="">
                <p className="text-sm text-gray-400">Employement type</p>
                <p className="font-semibold ">Full time employee</p>
                </div>
               <hr className="w-16 border-[1.3px] rotate-90 m-auto" />
                <div className="">
                    <p className="text-sm text-gray-400">Has Account</p>
                    <Badge color="#86efac"><p className="text-[.7rem] text-green-950">yes</p></Badge>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile