
import React, { useState } from 'react';

const AdminDashboard = () => {
  // State to manage store creation form data
  const [storeName, setStoreName] = useState('');
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('');
  const [numEmployees, setNumEmployees] = useState('');
  const [store, setStore] = useState([]);
  const submitHandler = () => {
    // Prepare store data
    const newStore = {
      name: storeName,
      openTime: openTime,
      closeTime: closeTime,
      employees: parseInt(numEmployees) // Convert to integer
    };
    setStore([...store, newStore]);
    // Update store state with new store data
    // setStore([...store, newStore]);

    // Clear form inputs after successful creation
    setStoreName('');
    setOpenTime('');
    setCloseTime('');
    setNumEmployees('');
  };

  return (
<>
{/* Form to create */}

<section className="rounded-md bg-black/70 p-2">
  <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
      <div className="mb-2">
        <svg
          width="50"
          height="56"
          viewBox="0 0 50 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
            fill="black"
          ></path>
        </svg>
      </div>
      <h2 className="text-2xl font-bold leading-tight text-black">
        Create Your Own Desire Store
      </h2>
      <p className="mt-2text-sm text-gray-600 ">
        Don&#x27;t have an Store?{" "}
        <a
          href="#"
          title=""
          className="font-semibold text-black transition-all duration-200 hover:underline"
        >
          Create a free Store
        </a>
      </p>
      <form action="#" method="POST" className="mt-8">
        <div className="space-y-5">
        <div>
            <label for="" className="text-base font-medium text-gray-900">
              {" "}
              Store Name{" "}
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter the name of the Store"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label for="" className="text-base font-medium text-gray-900">
              {" "}
              Open Time{" "}
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                placeholder="Open Time"
                value={openTime}
                onChange={(e) => setOpenTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label for="" className="text-base font-medium text-gray-900">
              {" "}
              Closed Time{" "}
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="time"
                placeholder="Closed Time"
                value={closeTime}
                onChange={(e) => setCloseTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label for="" className="text-base font-medium text-gray-900">
                {" "}
                Enter the Number ofEmployees{" "}
              </label>
            </div>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                placeholder="No.of Employess"
                value={numEmployees}
                onChange={(e) => setNumEmployees(e.target.value)}
              />
            </div>
          </div>
          <div>
          </div>
        </div>
      </form>
      <div className="mt-3 space-y-3">
      <button
          type="button"
          className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={submitHandler}
        >
          Create Store
        </button>
      </div>
    </div>
  </div>
</section>


{/* Table Data */}
<section className="mx-auto w-full max-w-7xl px-4 py-4">
  <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
    <div>
      <h2 className="text-lg font-semibold">Store List</h2>
      <p className="mt-1 text-sm text-gray-700">
        This is a list of all Stores. You can edit or delete existing
        ones.
      </p>
    </div>
    <div>
    </div>
  </div>
  <div className="mt-6 flex flex-col">
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  <span>Store Name</span>
                </th>
                <th
                  scope="col"
                  className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Open Time
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Close Time
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Number of Employees
                </th>
                <th scope="col" className="relative px-4 py-3.5">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {store.map((stores,index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-4">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{stores.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-12 py-4">
                    {/* <div className="text-sm text-gray-900 ">{stores.title}</div> */}
                    <div className="text-sm text-gray-700">{stores.openTime}</div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      {stores.closeTime}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                    {stores.employees}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                    <a href="#" className="text-gray-700">
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
};

export default AdminDashboard;

