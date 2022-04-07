/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
export default function Landing() {
  return (
    <>
      <div className="mx-auto my-0 flex max-w-7xl flex-col lg:items-center justify-center px-5 lg:my-20">
        <div className="relative flex justify-center">
          <div className="imggrid z-0 pr-44 pl-12">
            <div className="pos-1 hidden lg:grid">
              <div className="relative h-[9.2rem] w-28 bg-[url('/images/Iyoba.jfif')] bg-cover" />
            </div>
            <div className="pos-2 hidden lg:grid">
              <div className="relative h-44 w-36 bg-[url('/images/Brinley.jfif')] bg-cover" />
            </div>
            <div className="pos-3 hidden lg:grid">
              <div className="relative h-44 w-32 bg-[url('/images/Pieta.jfif')] bg-cover" />
            </div>
            <div className="pos-4 hidden lg:grid">
              <div className="relative h-32 w-24 bg-[url('/images/Bronzino.jfif')] bg-cover" />
            </div>
            <div className="pos-5 hidden lg:grid">
              <div className="relative h-28 w-32 bg-[url('/images/Dionysos.jfif')] bg-cover" />
            </div>
          </div>
          <div className="z-10 w-full text-left lg:text-center">
            <h1 className="ogg-regular mb-4 pt-24 text-[4.2rem] leading-[4rem] text-[#303030] md:text-[5rem] lg:text-[11rem] lg:leading-[12rem]">
              Welcome <span className="ogg-regular-italic">to</span> The Met
            </h1>
            <div className="plain-medium ml-0 mt-14 flex justify-start text-left lg:ml-72 lg:justify-center">
              <div className="flex flex-col">
                <span className="max-w-[17rem] leading-5">
                  For the health and safety of our staff and visitors, capacity
                  is limited. Prepare for longer lines outside the Museum.
                </span>
                <div className="mt-6 inline-block">
                  <a href="/" className="inline-block text-[#ec0426]">
                    Read our visitor guidelines
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="28px"
                    fill="#ec0426"
                    viewBox="0 0 29 28"
                    version="1.1"
                    className="ml-1 mb-1 inline-block"
                  >
                    <g id="surface1">
                      <path d="M 22.488281 6.398438 C 21.9375 6.734375 20.484375 7.464844 19.871094 7.71875 C 17.703125 8.605469 15.613281 9.140625 13.246094 9.421875 C 12.148438 9.550781 11.300781 9.578125 10.683594 9.496094 C 10.085938 9.417969 9.503906 9.300781 8.816406 9.109375 C 8.519531 9.027344 8.277344 8.96875 8.273438 8.972656 C 8.253906 8.996094 11.246094 11.324219 13.542969 13.066406 C 14.164062 13.539062 14.679688 13.9375 14.6875 13.953125 C 14.695312 13.96875 14.4375 14.253906 14.109375 14.582031 C 13.78125 14.914062 12.101562 16.636719 10.371094 18.414062 L 7.222656 21.644531 L 7.660156 22.09375 L 8.101562 22.542969 L 11.820312 18.675781 C 13.871094 16.546875 15.550781 14.804688 15.5625 14.804688 C 15.570312 14.804688 15.851562 15.160156 16.1875 15.601562 C 17.539062 17.359375 18.671875 18.933594 19.609375 20.335938 L 20.171875 21.175781 L 20.171875 19.226562 C 20.171875 17.140625 20.199219 16.664062 20.390625 15.097656 C 20.730469 12.308594 21.597656 9.097656 22.679688 6.613281 C 22.777344 6.382812 22.859375 6.191406 22.851562 6.1875 C 22.847656 6.183594 22.683594 6.28125 22.488281 6.398438 Z M 22.488281 6.398438 " />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
