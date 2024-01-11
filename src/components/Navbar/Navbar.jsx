import Link from "next/link";
import { useState, useEffect } from "react";
// import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  const handleSignOut = () => {
    // Cookies.remove('token')
    // Cookies.remove('status')
    setLogin(false)
    router.push('/')
  }

  useEffect(() => {
    // const token = Cookies.get('token');

    // if(token){
    //   setLogin(true)
    // }else{
    //   setLogin(false)
    // }
  },[])
  return (
    <>
      <div className="flex justify-center mx-10  ">
        <nav className="fixed z-[9999999] mt-4 xl:max-w-full w-full">
          <div className="flex justify-center">
            {/* <div className="ml-6 pt-2 flex ">
              {login ? (
                <h1 className="text-blue-dark font-bold text-xl ">
                  Hello, Admin
                </h1>
              ) : (
                <h1 className="text-blue-dark font-bold text-xl">
                  Capstone-C09
                </h1>
              )}
            </div> */}
            <div className="mx-auto xl:max-w-[511px] md:items-center md:flex px-12 py-2 bg-dark-grey shadow-xl xl:rounded-[50px] rounded-[20px] drop-shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="">
                <div className="flex items-center justify-center py-1 md:py-2 md:block">
                  <div className="md:hidden">
                    <button
                      className="p-2 text-whit-700 rounded-md outline-none focus:border-gray-400 focus:border"
                      onClick={() => setNavbar(!navbar)}
                    >
                      {navbar ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-n-blue"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-n-blue"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                  }`}
                >
                  <ul className="items-center text-center justify-center space-y-10 md:flex md:space-x-12 md:space-y-0">
                    <li className="text-n-blue">
                      <Link href="/">
                        <div className="font-poppins font-semibold text-white hover:text-[#E2AE34] transition duration-300 ease-in-out">
                          Home
                        </div>
                      </Link>
                    </li>
                    <li className="text-n-blue">
                      <Link href="/projects">
                        <div className="font-poppins font-semibold text-white hover:text-[#E2AE34] transition duration-300 ease-in-out">
                          Projects
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="mr-6 hidden md:flex gap-2">
              {login ? (
                <button onClick={handleSignOut} className="bg-blue-medium hover:bg-white rounded-[30px] transition duration-300 ease-in-out">
                  <p className="px-5 py-2 font-semibold text-white hover:text-blue-medium transition duration-300 ease-in-out">Sign Out</p>
                </button>
              ) : (
                <>
                  <Link href="/signin">
                    <button className="bg-blue-medium hover:bg-white rounded-[30px] transition duration-300 ease-in-out">
                      <p className="px-5 py-2 font-semibold text-white hover:text-blue-medium transition duration-300 ease-in-out">Sign In</p>
                    </button>
                  </Link>
                  <Link href="/signup">
                    <button className="bg-white hover:bg-blue-dark rounded-[30px] transition duration-300 ease-in-out">
                      <p className="px-5 py-2 font-semibold text-blue-medium hover:text-white transition duration-300 ease-in-out">
                        Sign Up
                      </p>
                    </button>
                  </Link>
                </>
              )}
            </div> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
