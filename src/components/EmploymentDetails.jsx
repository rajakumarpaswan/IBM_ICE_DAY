// import React from 'react'
import { Button, Badge ,Select} from "@mantine/core";
import {
  IconPencilMinus,
  IconPointFilled,
  IconChevronDown,
  IconHexagonPlus,
  IconMap
} from "@tabler/icons-react";

function EmploymentDetails() {
  return (
    <div className="w-full mt-3">
      <div className="employment-details w-full flex justify-center items-center">
        <div className="employmentDetails-section w-[96%] border-[1px] rounded-lg font-mono">
          <div className="flex justify-between items-center border-b-[1px] p-2 ">
            <p>Employment-details</p>
            <Button
              color=""
              leftSection={<IconPencilMinus size={20} />}
              variant="subtle"
            >
              Edit
            </Button>
          </div>
          <div className="p-4">
            <div className="employment-status flex items-center gap-24">
              <p>Employment-status</p>
              <Badge
                p="md"
                color="#111827"
                variant="outline"
                leftSection={<IconPointFilled color="#22c55e" />}
                rightSection={<IconChevronDown />}
              >
                active
              </Badge>
            </div>
            <div className="flex items-center gap-44 mt-7 ">
              <p>Department</p>
              <p >logistics</p>
            </div>
            <div className="date flex items-center gap-44 mt-7">
              <p>start date</p>
              <p>04/12/24</p>
            </div>
            <div className="mt-7">
            <Button
              color=""
              leftSection={<IconHexagonPlus size={20} />}
              variant="subtle"
            >
              Add field
            </Button>
            </div>
          </div>
        </div>
       </div>
       <div className="w-full flex justify-center items-center mt-3">
       <div className="w-[96%] border-[1px] rounded-lg font-mono">
        <div className="flex justify-between items-center border-b-[1px] p-2 ">
            <p>Service Area</p>
            <div className="flex items-center">
            <Button
              color=""
              leftSection={<IconMap size={20} />}
              variant="subtle"
            >
              Map
            </Button>
            <hr className="w-8 rotate-90 border-[1.5px]" />
            <Button
              color=""
              leftSection={<IconPencilMinus size={20} />}
              variant="subtle"
            >
              Edit
            </Button>

            </div>
          </div>
          <div className="w-full p-6 flex justify-center ">
            <div className=" w-[80%] text-center  ">
            <Select 
      label="Your area name"
      placeholder="Pick value"
      data={['chennai', 'delhi', 'mumbai', 'punjab','mylapore','adyar','thuraipakkam']}
    />
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default EmploymentDetails;
