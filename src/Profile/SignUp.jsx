import { useState } from "react";
import SignNav from "./SignNav";




function SignUp() {
   const [phoneNumber, setPhoneNumber] = useState("");
   console.log(phoneNumber);

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setPhoneNumber("");
  };
  return (
    <>
      <SignNav />
  
      <form
      onSubmit={HandleSubmit}
       className="h-[120vh] bg-[#fdebef] flex justify-center items-center">
        <div className="h-[102vh] mb-5 w-[33vw] bg-white mx-auto rounded-lg">
          <div className="h-[35vh]">
            <img
              className="rounded-t-xl cover h-[35vh] w-full"
              src="https://images.meesho.com/images/marketing/1661417516766.webp"
              alt=""
            />
          </div>

          <div className=" m-12">
            <h1 className="text-[25px] font-semibold text-gray-700 ">
              Sign Up to view your profile
            </h1>
            <div className="  mt-8">
              <div>
                <h1 className="text-[14px] font-semibold text-gray-500 mt-5">
                  Country
                </h1>
              </div>
              <div className="flex items-center gap-5">
                <h1 className="text-[15px] font-semibold text-black mt-2 border-b pb-1 border-gray-300 w-[5vw] ">
                  IN +91
                </h1>

                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}

                  className=" w-full focus:outline-none focus:ring-0 text-black border-b border-gray-300 w-[18vw] pb-1 mt-1"
                  type="text"
                  placeholder="Phone Number"
                  id=""
                />
              </div>
            </div>
            <button className="mt-10  bg-[#9f2089] p-2 px-32 text-xl text-white font-semibold rounded-md ">
              {" "}
              Continue
            </button>

            <p className="text-[11px] font-semibold text-gray-500 ml-20 mt-[19vh]">
              By continuing, you agree to Meesho’s <br />
              <span className="text-pink-700"> Terms & Conditions</span> and   <span className="text-pink-700">Privacy Policy</span>
            
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
