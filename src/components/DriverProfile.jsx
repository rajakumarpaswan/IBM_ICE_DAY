// import React from 'react'
import { Button} from "@mantine/core";
import { IconArrowBarToLeft,IconChevronDown,IconChevronUp, IconMessage } from "@tabler/icons-react";
import Profile from "./Profile";
import EmploymentDetails from "./EmploymentDetails";
function DriverProfile() {
  return (
    <div className="w-full ">
      <div className="w-full ">
        <header className="header-section w-[100%] flex justify-between items-center p-5 border-b-[2px]">
          <div className="w-[50%] flex gap-4">
            <Button leftSection={<IconArrowBarToLeft size={20} />} variant="default">
              <a href="">Back</a>
            </Button>
            
            <span ><Button variant="default"><a href=""><IconChevronUp size={30}/></a></Button> </span>
            <span ><Button variant="default"><a href=""><IconChevronDown size={30}/></a></Button> </span>

          </div>
          <div className="send-message">
          <Button className="capitalize" leftSection={<IconMessage size={20} />} variant="default">
        send message
      </Button>
          </div>
        </header>
        
        {/* <div className="driverprofile mt-5 border-[2px] w-[80%] flex justify-between items-center ">
            <div className="flex gap-2 items-center p-3 ">
            <Avatar src="avatar.png" size={95} alt="it's me" />
            <div className="">
                <p className="font-mono text-2xl">Raja kumar paswan</p>
                <span className="flex gap-2" ><p className="font-mono">Driver</p> <a className="font-semibold text-md text-blue-500" href="">View profile</a></span>
            </div>
            </div>
            <div className=" flex ">
                <div className="">
                <p>Employement type</p>
                <p>Full time employee</p>
                </div>
               <hr className="w-16 border-[1.3px] rotate-90 m-auto" />
                <div className="">
                    <p>Has Account</p>
                    <Badge color="#86efac"><p className="text-[.7rem] text-green-950">yes</p></Badge>
                </div>
            </div>
        </div> */}
        <Profile/>
        <EmploymentDetails/>
      </div>
    </div>
  );
}

export default DriverProfile;
