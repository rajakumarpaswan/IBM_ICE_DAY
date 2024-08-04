// import React from 'react'

function AmbulanceDetails() {
  
  return (
    <div className="w-[100%]">
      <hr className="shadow-[0_0px_1px_1px_#9ca3af] border-[1px] border-black" />
        <div className="w-[100%] flex justify-between items-center p-7 mt-8 ">
            <div className="name-carnumber">
                <p>Ramesh Suresh</p>
                <p>TN 00 TN 0000</p>
            </div>
            <div className="authokey-phonenumber">
              <p>9090909090</p>
              <p>Auth0|309240dsf890sdafsfasfafadf</p>
            </div>
            <div className="decline-approve-btn">
        <button type="button" className="text-white bg-green-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Approve</button>
        <button type="button" className="text-white bg-red-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Decline</button>

            </div>
        </div>
        <div className="estimate-time mb-10">
          <span className="text-center text-[1.5rem] text-red-600"><p>Estimated time :15 mins</p></span>
        </div>
        <hr className="shadow-[0_0px_1px_1px_#9ca3af] border-[1px] border-black" />
    </div>
  )
}

export default AmbulanceDetails