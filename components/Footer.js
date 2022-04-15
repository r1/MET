/* eslint-disable @next/next/no-html-link-for-pages */
import Facebook from "../public/svgs/facebook.svg";
import Twitter from "../public/svgs/twitter.svg";
import YouTube from "../public/svgs/youtube.svg";
import Pinterest from "../public/svgs/pinterest.svg";
import Instagram from "../public/svgs/instagram.svg";

export default function Footer() {
  return (
    <>
      <footer className="w-full border-t-[1px] border-[#a1a1a15e]">
        <div className="plain-regular flex  flex-wrap px-5 py-16 md:flex-row md:flex-nowrap md:items-start lg:container lg:mx-auto lg:items-start xl:pl-2">
          <div className="w-64 flex-shrink-0 text-left tracking-wide text-[#8f8f8f] lg:mx-auto">
            <a href="/" className="flex md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="110"
                viewBox="0 0 40 40"
              >
                <path
                  id="MetLogo_40x40tuned.svg"
                  fill="#ec0426"
                  d="M3258.74,127.009a11.607,11.607,0,0,0-.88-1.861,9.872,9.872,0,0,0-1.33-1.824,7.6,7.6,0,0,0-1.72-1.387,3.993,3.993,0,0,0-2.04-.55v15.4A3.032,3.032,0,0,0,3253,138a2.648,2.648,0,0,0,.64.883,2.821,2.821,0,0,0,.95.55,3.518,3.518,0,0,0,1.17.19V140h-6.13V121.577a4.916,4.916,0,0,0-2.08.4,4.175,4.175,0,0,0-1.47,1.111,5.312,5.312,0,0,0-.94,1.709,11.471,11.471,0,0,0-.54,2.213h-0.26a11.489,11.489,0,0,0-.54-2.194,5.48,5.48,0,0,0-.97-1.718,4.287,4.287,0,0,0-1.54-1.121,5.558,5.558,0,0,0-2.21-.4h-1.36V130h1.24a4.344,4.344,0,0,0,.57-0.133,2.833,2.833,0,0,0,1.22-.788,3.233,3.233,0,0,0,.68-1.339,7.637,7.637,0,0,0,.21-1.909h0.29l1.07,9.116h-0.29a5.834,5.834,0,0,0-1.62-3.228,3.808,3.808,0,0,0-1.25-.719h-2.12v8.43h2.19a5.146,5.146,0,0,0,2.17-.456,6.5,6.5,0,0,0,1.79-1.216,7.934,7.934,0,0,0,
1.39-1.737,10.231,10.231,0,0,0,.96-2.023h0.26l-0.77,6h-14.14v-0.38a3.518,3.518,0,0,0,1.17-.19,2.821,2.821,0,0,0,.95-0.55,2.47,2.47,0,0,0,.63-0.893,2.081,2.081,0,0,0,.18-0.987V124.5L3229,138h-0.5l-5.5-12.407V136.5a4.721,4.721,0,0,0,.37,1.487,2.62,2.62,0,0,0,.64.893,2.727,2.727,0,0,0,.95.55,3.5,3.5,0,0,0,1.16.19V140H3219v-0.38a3.561,3.561,0,0,0,1.17-.19,2.682,2.682,0,0,0,.94-0.55,2.493,2.493,0,0,0,.64-0.893,3.045,3.045,0,0,0,.23-1.2V123.362a3.1,3.1,0,0,0-2.98-1.975v-0.379h3.07a4.583,4.583,0,0,1,1.94.37,2.685,2.685,0,0,1,1.28,1.472L3230,133.5l4.5-11a2.05,2.05,0,0,1,1.17-1.113,3.971,3.971,0,0,1,1.7-.379h20.94l0.69,6h-0.26Zm-15.93-8.017v-0.38a2.169,2.169,0,0,0,2.49-2.525V110h-6.82v6.087a2.169,2.169,0,0,0,2.49,2.525v0.38h-8.63v-0.38a3.493,3.493,0,0,0,1.17-.189,2.806,2.806,0,0,0,.95-0.551,
2.616,2.616,0,0,0,.64-0.892,3.045,3.045,0,0,0,.23-1.2V105.7a6.756,6.756,0,0,0-.41-2.5,4.035,4.035,0,0,0-1.15-1.644,4.588,4.588,0,0,0-1.8-.9,9.207,9.207,0,0,0-2.34-.275v18.612h-6.14v-0.38a3.493,3.493,0,0,0,1.17-.189,2.806,2.806,0,0,0,.95-0.551,2.638,2.638,0,0,0,.64-0.883,3.023,3.023,0,0,0,.23-1.206v-15.4a3.938,3.938,0,0,0-1.98.56,8.306,8.306,0,0,0-1.82,1.4,11.9,11.9,0,0,0-1.47,1.814,8.736,8.736,0,0,0-.94,1.851h-0.26l0.77-6h20.19v0.38a2.217,2.217,0,0,0-2.49,2.526V109h6.82v-6.094a2.22,2.22,0,0,0-2.49-2.526V100h13.67l0.77,6h-0.26a10.276,10.276,0,0,0-.96-2.022,7.987,7.987,0,0,0-1.39-1.738,6.422,6.422,0,0,0-1.8-1.215,5.146,5.146,0,0,0-2.17-.456h-2.21V109h1.32a3.84,3.84,0,0,0,1.98-.861,4.343,4.343,0,0,0,1.03-3.315h0.29l1.18,9.117h-0.29a5.86,5.86,0,0,0-.72-1.89,4.644,4.644,0,0,0-2.61-2.051h-2.18v8.423h2.95a5.146,5.146,0,0,0,2.17-.456,6.726,6.726,0,0,0,1.8-1.216,8.264,8.264,0,0,0,1.39-1.737,11.526,11.526,0,0,0,.96-2.023h0.26l-0.78,6h-14.4Z"
                  transform="translate(-3219 -100)"
                ></path>
              </svg>
            </a>
            <div className="mt-12 lg:mt-24">
              <p className="text-sm">The Met Fifth Avenue</p>
              <p className=" text-sm">1000 Fifth Avenue</p>
              <p className="text-sm">New York, NY 10028</p>
            </div>
            <div className="mt-6 lg:mt-12">
              <p className="text-sm">Phone: 212-535-7710</p>
            </div>
            <div className="mt-6 lg:mt-12">
              <p className="text-sm">The Met Cloisters</p>
              <p className="text-sm">99 Margaret Corbin Drive</p>
              <p className="text-sm">Fort Tryon Park</p>
              <p className="text-sm">New York, NY 10040</p>
            </div>
            <div className="mt-6 lg:mt-12">
              <p className="text-sm">Phone: 212-923-3700</p>
            </div>
          </div>
          <div className="-mb-10 mt-10 flex flex-grow flex-wrap md:mt-0 lg:pl-0 xl:pl-56">
            <div className="w-full lg:px-4 mb-[4.7rem]">
              <div className="ogg-medium mb-10 text-[#363636]">
                <h3 className="text-[1.7rem]">
                  Bring some culture to your inbox
                </h3>
              </div>
              <div>
                <input
                  className="mr-7 h-14 xl:w-[32rem] lg:w-[30rem] md:w-[20rem] sm:w-[22rem] w-full rounded-xl border-2 bg-white px-4 py-3 placeholder-[#8f8f8f]"
                  placeholder="Email"
                />
                <button className="rounded-xl border-2 border-[#050505] px-8 py-3 xl:w-[8rem] lg:w-[8rem] md:w-[8rem] sm:w-[8rem] w-full mt-4 sm:mt-0">
                  Send
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 lg:px-4">
              <div className="plain-regular mb-10 list-none space-y-5 text-[#363636]">
                <li>
                  <a href="/">About The Met</a>
                </li>
                <li>
                  <a href="/">Mission and History</a>
                </li>
                <li>
                  <a href="/">Collection Areas</a>
                </li>
                <li>
                  <a href="/">Conservation Departments</a>
                </li>
                <li>
                  <a href="/">Press</a>
                </li>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:ml-32 lg:w-1/6 lg:pl-4 xl:ml-32">
              <div className="plain-regular mb-10 list-none space-y-5 text-[#363636]">
                <li>
                  <a href="/">Support</a>
                </li>
                <li>
                  <a href="/">Membership</a>
                </li>
                <li>
                  <a href="/">Host an Event</a>
                </li>
                <li>
                  <a href="/">Travel with The Met</a>
                </li>
                <li>
                  <a href="/">Corporate Support</a>
                </li>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:ml-24 lg:w-1/4 lg:px-4">
              <div className="plain-regular mb-10 list-none space-y-5 text-[#363636]">
                <li>
                  <a href="/">Site Index</a>
                </li>
                <li>
                  <a href="/">Terms and Conditions</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Contact Information</a>
                </li>
              </div>
            </div>
            <div className="w-full lg:px-4 mt-2 mb-[4.7rem]">
              <div className="plain-regular mb-10 text-[#363636] flex flex-row items-center space-x-2">
                <h3 className="text-[1.1rem] mr-12 sm:block hidden">
                  Follow us
                </h3>
                <Facebook/>
                <Twitter/>
                <Pinterest/>
                <Instagram/>
                <YouTube/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
