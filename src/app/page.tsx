import Image from "next/image";
import Gallery from "./components/Gallery";
import tick from "./public/assets/tick.png";
export default function Home() {
  return (
    <div>
      <section>
        <div className="bg-gradient-to-b from-black to-blue-500 h-[500px] w-full">
          <p className="text-white text-5xl text-center pt-24">
            Find Used Cars in Pakistan
          </p>
          <p className="text-white text-2xl text-center pt-2">
            With thousands of cars, we have just the right one for you
          </p>
          <div className="flex text-center items-center justify-center m-auto h-24 rounded-md">
            <input
              className="text-left pl-20 pr-40 py-2"
              type="text"
              placeholder="Search your car "
            />
            
            <a href="">
              <img
                className="h-10"
                src="data:image/png;base64,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
              "
                alt=""
              />
            </a>
          </div>
          <div className="items-center text-center">
          <button className="text-white px-3 py-1 border-2 border-slate-50">Advanced Filter</button>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center w-5/6  p-10 m-auto">
  <fieldset className="border border-gray-500 p-6 rounded-lg w-full">
   
    <legend className="text-2xl font-semibold text-center mx-5">Sell Your Car on PakWheels and Get the Best Price</legend>

<div className="flex">
<div className="w-1/2" text-center>
<p className="text-center text-blue-800 text-2xl font-bold ">Post your Ad on PakWheels</p>

  <div className="flex ml-20 my-2">
    <Image src={tick} alt="tick icon" className="w-4 h-4 mx-2"/>
    <p>Post your Ad for Free in 3 Easy Steps </p>
  </div>

  <div className="flex ml-20 my-2">
    <Image src={tick} alt="tick icon" className="w-4 h-4 mx-2"/>
    <p>Get Genuine offers from Verified Buyers</p>
  </div>

  <div className="flex ml-20 my-2">
    <Image src={tick} alt="tick icon" className="w-4 h-4 mx-2"/>
    <p>Sell your car Fast at the Best Price</p>
  </div>
  
  <button className="bg-red-500 text-white ml-24 px-3 py-2 rounded-md">
            {" "}
            Post your Ad
          </button>
</div>

<div className="flex flex-col items-center mx-4 relative">
              <div className="w-px h-40 bg-gray-500 relative"></div>
              <p className="absolute bg-white px-2 text-gray-500 text-2xl font-bold top-1/2 transform -translate-y-1/2">
                OR
              </p>
            </div>

<div className="w-1/2" text-center>
<p className="text-center text-blue-800 text-2xl font-bold ">Post your Ad on PakWheels</p>

  <div className="flex ml-20 my-2">
    <Image src={tick} alt="tick icon" className="w-4 h-4 mx-2"/>
    <p>Post your Ad for Free in 3 Easy Steps </p>
  </div>

  <div className="flex ml-20 my-2">
    <Image src={tick} alt="tick icon" className="w-4 h-4 mx-2"/>
    <p>Get Genuine offers from Verified Buyers</p>
  </div>

  <div className="flex ml-20 my-2">
    <Image src={tick} alt="tick icon" className="w-4 h-4 mx-2"/>
    <p>Sell your car Fast at the Best Price</p>
  </div>
  
  <button className="bg-blue-500 text-white ml-24 px-3 py-2 rounded-md">
            {" "}
            Post your Ad
          </button>
</div>


</div>


  </fieldset>
</section>

<Gallery />
    </div>
  );
}
