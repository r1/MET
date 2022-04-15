/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

export default function Shop() {
  return (
    <>
      <div className="mb-20 mx-auto grid grid-cols-1 lg:container lg:mb-80 lg:grid-cols-2 xl:pl-2">
        <div className="mt-12">
          <div className="px-4 lg:px-0">
            <h2 className="ogg-regular text-[2.6rem] text-[#2d2d2d] lg:text-[4.1rem]">
              Holiday gift guide
            </h2>
          </div>
          <div className="mt-6 mb-8 px-4 lg:mt-20 lg:px-0">
            <p className="plain-regular max-w-[19rem] text-[1rem] text-[#2d2d2d] lg:text-[1.5rem]">
              Find unique gifts for the art lovers on your list.
            </p>
          </div>
          <div className="px-4 lg:px-0">
            <a href="/" className="plain-regular text-md text-[#ec0426]">
              Shop The Met Store
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45px"
                height="35px"
                fill="#ec0426"
                viewBox="0 0 29 32"
                version="1.1"
                className="inline-block"
              >
                <g>
                  <path d="M 22.488281 6.398438 C 21.9375 6.734375 20.484375 7.464844 19.871094 7.71875 C 17.703125 8.605469 15.613281 9.140625 13.246094 9.421875 C 12.148438 9.550781 11.300781 9.578125 10.683594 9.496094 C 10.085938 9.417969 9.503906 9.300781 8.816406 9.109375 C 8.519531 9.027344 8.277344 8.96875 8.273438 8.972656 C 8.253906 8.996094 11.246094 11.324219 13.542969 13.066406 C 14.164062 13.539062 14.679688 13.9375 14.6875 13.953125 C 14.695312 13.96875 14.4375 14.253906 14.109375 14.582031 C 13.78125 14.914062 12.101562 16.636719 10.371094 18.414062 L 7.222656 21.644531 L 7.660156 22.09375 L 8.101562 22.542969 L 11.820312 18.675781 C 13.871094 16.546875 15.550781 14.804688 15.5625 14.804688 C 15.570312 14.804688 15.851562 15.160156 16.1875 15.601562 C 17.539062 17.359375 18.671875 18.933594 19.609375 20.335938 L 20.171875 21.175781 L 20.171875 19.226562 C 20.171875 17.140625 20.199219 16.664062 20.390625 15.097656 C 20.730469 12.308594 21.597656 9.097656 22.679688 6.613281 C 22.777344 6.382812 22.859375 6.191406 22.851562 6.1875 C 22.847656 6.183594 22.683594 6.28125 22.488281 6.398438 Z M 22.488281 6.398438 " />
                </g>
              </svg>
            </a>
          </div>
          <div className="mt-[3rem] px-4 lg:mt-[17rem] lg:px-0">
            <Image
              src="/images/Gifts.png"
              alt="gift"
              height={265}
              width={320}
            />
          </div>
        </div>
        <div>
          <div className="mt-[3rem] px-4 lg:mt-[9rem] lg:px-0">
            <Image
              src="/images/Scarf.png"
              alt="Scarf"
              height={760}
              width={760}
            />
          </div>
        </div>
      </div>
    </>
  );
}
