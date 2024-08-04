

function Floating() {
    const form = [
      { name: "username", label: "userName" },
      { name: "password", label: "password" },
      
    ];
  
    return (
      <div className="relative mt-4">
        {form.map((field, index) => (
          <div key={index} className="relative mb-4">
            <input
              type="text"
              id={`floating_outlined_${field.name}`}
              className="block px-2.5 pb-2.5 pt-4 w-full border-[2px] text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-900 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor={`floating_outlined_${field.name}`}
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-300  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              {field.label}
            </label>
          </div>
        ))}
        <div className="flex justify-center items-center">
        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button>
        </div>
      </div>
    );
  }

  


  
  export default Floating;
  