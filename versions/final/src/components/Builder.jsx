import React from 'react'

const Builder = () => {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-0">
        <h1 className="text-4xl font-bold py-8 text-center bg-slate-700 text-white mb-4">Chose PC Parts</h1>
        <div className="overflow-x-auto">
          <table className="w-full md:w-3/4 lg:w-3/4 mx-auto">
            <thead className="hidden bg-gray-200 md:table-header-group">
            <tr>
              <th className="px-4 py-2 font-semibold">Component</th>
              <th className="px-4 py-2 font-semibold">Selection</th>
              <th className="px-4 py-2 font-semibold">Base</th>
              <th className="px-4 py-2 font-semibold">Promo</th>
              <th className="px-4 py-2 font-semibold">Shipping</th>
              <th className="px-4 py-2 font-semibold">Tax</th>
              <th className="px-4 py-2 font-semibold">Price</th>
              <th className="px-4 py-2 font-semibold">Where</th>
            </tr>
            </thead>
            <tbody className="max-h-[calc(100vh-200px)]">

              <tr className="block border-b border-opacity-20 md:table-row dark:border-gray-300 dark:bg-gray-50">
              <td className="block px-4 py-3 text-xl font-semibold hover:underline md:table-cell md:px-6 md:py-4 md:text-base">
                <a href="/CPU">CPU</a>
              </td>
              <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 md:text-right">
                <button className="flex items-center rounded bg-blue-600 px-4 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Choose A CPU
                </button>
              </td>
              <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
              <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
              
              </tr>
              
              <tr className="block border-b border-opacity-20 md:table-row dark:border-gray-300 dark:bg-gray-50">
              <td className="block px-4 py-3 text-xl font-semibold hover:underline md:table-cell md:px-6 md:py-4 md:text-base">
                <a href="#">CPU Cooler</a>
              </td>
              <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 md:text-right">
                <button className="flex items-center rounded bg-blue-600 px-4 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Choose A Cooler
                </button>
              </td>
              <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
              <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
              </tr>

              <tr className="block border-b border-opacity-20 md:table-row dark:border-gray-300 dark:bg-gray-50">
            <td className="block px-4 py-3 text-xl font-semibold hover:underline md:table-cell md:px-6 md:py-4 md:text-base">
              <a href="#">Motherboard</a>
            </td>
            <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 md:text-right">
              <button className="flex items-center rounded bg-blue-600 px-4 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Choose A Motherboad
              </button>
            </td>
            <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
            <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
              </tr>

              <tr className="block border-b border-opacity-20 md:table-row dark:border-gray-300 dark:bg-gray-50">
                <td className="block px-4 py-3 text-xl font-semibold hover:underline md:table-cell md:px-6 md:py-4 md:text-base">
                  <a href="#">Memory</a>
                </td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 md:text-right">
                  <button className="flex items-center rounded bg-blue-600 px-4 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-2 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    Choose A Memory
                  </button>
                </td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
              </tr>

              <tr className="block border-b border-opacity-20 md:table-row dark:border-gray-300 dark:bg-gray-50">
                <td className="block px-4 py-3 text-xl font-semibold hover:underline md:table-cell md:px-6 md:py-4 md:text-base">
                  <a href="#">Storage</a>
                </td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 md:text-right">
                  <button className="flex items-center rounded bg-blue-600 px-4 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-2 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    Choose A Storage
                  </button>
                </td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
              </tr>

              <tr className="block border-b border-opacity-20 md:table-row dark:border-gray-300 dark:bg-gray-50">
                <td className="block px-4 py-3 text-xl font-semibold hover:underline md:table-cell md:px-6 md:py-4 md:text-base">
                  <a href="#">Video Card</a>
                </td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 md:text-right">
                  <button className="flex items-center rounded bg-blue-600 px-4 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-2 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    Choose A Video Card
                  </button>
                </td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
              </tr>

              <tr className="block border-b border-opacity-20 md:table-row dark:border-gray-300 dark:bg-gray-50">
                <td className="block px-4 py-3 text-xl font-semibold hover:underline md:table-cell md:px-6 md:py-4 md:text-base">
                  <a href="#">Case</a>
                </td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 md:text-right">
                  <button className="flex items-center rounded bg-blue-600 px-4 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-2 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    Choose A Case
                  </button>
                </td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
              </tr>

              <tr className="block border-b border-opacity-20 md:table-row dark:border-gray-300 dark:bg-gray-50">
                <td className="block px-4 py-3 text-xl font-semibold hover:underline md:table-cell md:px-6 md:py-4 md:text-base">
                  <a href="#">Power Supply</a>
                </td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 md:text-right">
                  <button className="flex items-center rounded bg-blue-600 px-4 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-2 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    Choose A Power Supply
                  </button>
                </td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
              </tr>

              <tr className="block border-b border-opacity-20 md:table-row dark:border-gray-300 dark:bg-gray-50">
                <td className="block px-4 py-3 text-xl font-semibold hover:underline md:table-cell md:px-6 md:py-4 md:text-base">
                  <a href="#">Operating System</a>
                </td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 md:text-right">
                  <button className="flex items-center rounded bg-blue-600 px-4 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-2 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    Choose A Operating System
                  </button>
                </td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
              </tr>

              <tr className="block border-b border-opacity-20 md:table-row dark:border-gray-300 dark:bg-gray-50">
                <td className="block px-4 py-3 text-xl font-semibold hover:underline md:table-cell md:px-6 md:py-4 md:text-base">
                  <a href="#">Monitor</a>
                </td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4 md:text-right">
                  <button className="flex items-center rounded bg-blue-600 px-4 py-2 font-bold text-white shadow-md hover:bg-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-2 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    Choose A Monitor
                  </button>
                </td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
                <td className="block px-4 py-3 md:table-cell md:px-6 md:py-4"></td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Builder