import React from "react";
const style = {
  card: `bg-white rounded overflow-hidden shadow-md relative`,
};

const TailwindTest = () => {
  return (
    <div className="text-gray-600">
      <div className="grid grid-cols-6">
        <div className="">
          <nav className="">
            <div className="">
              <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                <a href="/">food ninja</a>
              </h1>
            </div>
            <ul>
              <li className="text-gray-700">
                <a href="#">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <main className="px-16 py-6 bg-gray-100 col-span-5">
          <div className="flex justify-end">
            <a href="#">log in</a>
            <a href="#" className="pl-2">
              sign up
            </a>
          </div>
          <header>
            <h2 className="text-gray-700 text-6xl font-semibold">recipes</h2>
            <h3 className="text-2xl font-semibold">for ninjas</h3>
          </header>
          <div className="">
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              latest recipes
            </h4>
            <div className="mt-8 grid md:grid-cols-3 gap-10">
              <div className={style.card}>
                <img
                  src="https://via.placeholder.com/150"
                  className="h-32 object-cover w-full"
                  alt=""
                />
                <div className="p-4">
                  <span className="font-bold">5 bean chilli</span>
                  <span className="block from-gray-500 text-sm">
                    recipe by mario
                  </span>
                </div>
                <div className="bg-gray-100 text-gray-500 text-sm uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                  <span className="">25 min</span>
                </div>
              </div>
              <div className={style.card}>
                <img
                  src="https://via.placeholder.com/150"
                  className="h-32 object-cover w-full"
                  alt=""
                />
                <div className="p-4">
                  <span className="font-bold">5 bean chilli</span>
                  <span className="block from-gray-500 text-sm">
                    recipe by mario
                  </span>
                </div>
                <div className="bg-gray-100 text-gray-500 text-sm uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                  <span className="">25 min</span>
                </div>
              </div>
              <div className={style.card}>
                <img
                  src="https://via.placeholder.com/150"
                  className="h-32 object-cover w-full"
                  alt=""
                />
                <div className="p-4">
                  <span className="font-bold">5 bean chilli</span>
                  <span className="block from-gray-500 text-sm">
                    recipe by mario
                  </span>
                </div>
                <div className="bg-gray-100 text-gray-500 text-sm uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                  <span className="">25 min</span>
                </div>
              </div>
            </div>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              most populer
            </h4>
            <div className="mt-2"></div>
            <div className="flex justify-center">
              <div className="bg-gray-200">load more</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TailwindTest;
