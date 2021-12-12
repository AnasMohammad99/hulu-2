import { Apps, Dialpad, Mic, SearchOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searhInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searhInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <Apps className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar className="cursor-pointer transition duration-150 transform hover:scale-110 " />
        </div>
      </header>
      {/* body */}
      <form className="flex flex-col items-center p-20 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 items-center px-5 py-3 sm:max-w-xl lg:max-w-2xl">
          <SearchOutlined className="h5 text-gray-500 mr-3" />
          <input
            ref={searhInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <Mic className="h-5 " />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google search
          </button>
          <button onClick={search} className="btn">
            I'm Feel Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
