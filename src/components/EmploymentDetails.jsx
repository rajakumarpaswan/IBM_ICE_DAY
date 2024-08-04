// import React from 'react'
import { Button, Badge } from "@mantine/core";
import {
  IconPencilMinus,
  IconPointFilled,
  IconChevronDown,
  IconHexagonPlus
} from "@tabler/icons-react";

function EmploymentDetails() {
  return (
    <div className="w-full flex justify-center items-center mt-3">
      <div className="employment-details w-full flex justify-center items-center">
        <div className="employmentDetails-section w-[96%] border-[1px]">
          <div className="flex justify-between items-center border-b-[1px]">
            <p>Employment-details</p>
            <Button
              color=""
              leftSection={<IconPencilMinus size={20} />}
              variant="subtle"
            >
              Edit
            </Button>
          </div>
          <div className="">
            <div className="employment-status">
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
            <div className="">
              <p>Department</p>
              <p>logistics</p>
            </div>
            <div className="date">
              <p>start date</p>
              <p>04/12/24</p>
            </div>
            <div className="">
            <Button
              color=""
              leftSection={<IconHexagonPlus size={20} />}
              variant="subtle"
            >
              Add
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmploymentDetails;
