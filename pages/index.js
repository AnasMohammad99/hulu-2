import Body from "../components/Body";
import Head from "../components/Head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-6 ">
      <div className="col-span-6">
        <Head />
      </div>
      <div className="col-span-6 grid grid-cols-12">
        <div
          className=" col-span-2 border-r
         border-gray-300 h-[40rem]"
        >
          <Sidebar />
        </div>
        <div className="col-span-10 ">
          <p className=" py-4 pl-6 border-b border-gray-300 text-lg font-bold">
            Inventory
          </p>
          <Body />
        </div>
      </div>
    </div>
  );
}
