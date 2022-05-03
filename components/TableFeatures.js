import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";

const TableFeatures = () => {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="pl-6 ">
                <input type="checkbox" name="" id="" />
              </th>
              <th scope="col" class="px-6 ">
                <div className="flex items-centw">
                  <p className="">Data Updated</p>

                  <ArrowDownward />
                </div>
              </th>
              <th scope="col" class="px-6  flex items-center">
                <p>Title</p>
                <span className="flex flex-col">
                  <ArrowUpward />
                  <ArrowDownward />
                </span>
              </th>
              <th scope="col" class="px-6 ">
                Price
              </th>
              <th scope="col" class="px-6 ">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <input type="checkbox" name="" id="" />
              </th>
              <td class="px-6 py-4">Sliver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <input type="checkbox" name="" id="" />
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <input type="checkbox" name="" id="" />
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableFeatures;
{
  /* <table className=" flex flex-col mx-4">
<thead className="">
  <tr className="flex justify-between items-center bg-red-300 border-b border-gray-400">
    <th>
      <input type="checkbox" />
    </th>
    <th className="">
      <div className="flex items-centw">
        <p className="">Data Updated</p>
        
        <ArrowDownward />
        
      </div>
    </th>
    <th className="flex items-center">
      <p>Title</p>
      <span className="flex flex-col">
        <ArrowUpward />
        <ArrowDownward />
      </span>
    </th>
    <th>Details</th>
    <th>Status</th>
    <th>Quantity</th>
    <th>Unit Price</th>
    <th className="flex items-center">
      <p>Amount</p>
      <span className="flex flex-col">
        <ArrowUpward />
        <ArrowDownward />
      </span>
    </th>
  </tr>
</thead>
<tbody>
  <tr className="flex justify-between items-center ">
    <td>
      <input type="checkbox" />
    </td>
    <td>11 Nov 2021</td>
    <td>Hammar</td>
    <td>this is a hammer to do work with</td>
    <td>Alright</td>
    <td>200/300</td>
    <td>10$</td>
    <td>2000.00$</td>
  </tr>
  <tr className="flex justify-between items-center ">
    <td>
      <input type="checkbox" />
    </td>
    <td>11 Nov 2021</td>
    <td>Hammar</td>
    <td>this is a screw to do work with</td>
    <td>Alright</td>
    <td>122/230</td>
    <td>10$</td>
    <td>1220.00$</td>
  </tr>
  <tr className="flex justify-between items-center ">
    <td>
      <input type="checkbox" />
    </td>
    <td>11 Nov 2021</td>
    <td>Hammar</td>
    <td>wood plan will be used to do woodworks, duh</td>
    <td>in prgress</td>
    <td>100/300</td>
    <td>1.5$</td>
    <td>150.00$</td>
  </tr>
</tbody>
</table> */
}
