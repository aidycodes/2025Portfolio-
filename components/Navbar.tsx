import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
    return (
        <div className="relative w-full z-50 ">
            <div className="fixed top-0 left-0 right-0 border-gray-200 pt-2 backdrop-blur-sm">
            <div className="flex justify-end gap-6 lg:w-[80%] w-[90%] mx-auto ">
              
                <div className="relative">

                    <h1 className="top-0 left-0 absolute text-2xl hover:text-gray-100 transition-all duration-300 cursor-pointer font-extrabold text-transparent blur-lg ">About</h1>
                    <h1 className="text-2xl hover:text-gray-500 transition-all duration-300 cursor-pointer">About</h1>
                </div>
                <div>
                    <h1 className="text-2xl hover:text-gray-500 transition-all duration-300 cursor-pointer">Tech</h1>
                </div>
                <div>
                    <h1 className="text-2xl hover:text-gray-500 transition-all duration-300 cursor-pointer">Projects</h1>
                </div>
                <div>
                    <h1 className="text-2xl hover:text-gray-500 transition-all duration-300 cursor-pointer">Contact</h1>
                </div>
             
            </div>
        </div>
        </div>
      
    )
}

export default Navbar;